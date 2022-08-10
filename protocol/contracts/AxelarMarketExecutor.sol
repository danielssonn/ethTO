// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import './GatewayAck.sol';
import './INftLinker.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import {AxelarExecutable} from '@axelar-network/axelar-utils-solidity/contracts/executables/AxelarExecutable.sol';
import {IAxelarGateway} from '@axelar-network/axelar-utils-solidity/contracts/interfaces/IAxelarGateway.sol';
import {StringToAddress, AddressToString} from '@axelar-network/axelar-utils-solidity/contracts/StringAddressUtils.sol';
import {NFTMarket} from './NFTMarket.sol';
import {IERC20} from '@axelar-network/axelar-cgp-solidity/contracts/interfaces/IERC20.sol';
import {IAxelarGasService} from '@axelar-network/axelar-cgp-solidity/contracts/interfaces/IAxelarGasService.sol';

contract AxelarMarketExecutor is AxelarExecutable, NFTMarket {
    using StringToAddress for string;
    using AddressToString for address;

    error AlreadyInitialized();

    IAxelarGateway private _gateway;
    IAxelarGasService public gasReceiver;
    string public chainName; // see valid chain names at https://docs.axelar.dev/dev/build/chain-names

    function init(
        string memory chainName_,
        address gateway_,
        address gasReceiver_
    ) external {
        if (address(gateway()) != address(0) || address(gasReceiver) != address(0)) revert AlreadyInitialized();
        gasReceiver = IAxelarGasService(gasReceiver_);
        _gateway = IAxelarGateway(gateway_);
        chainName = chainName_;
    }

    function gateway() public view override returns (IAxelarGateway) {
        return _gateway;
    }

    /**
     * @dev request a rent on the listing chain from the renter's chain
     */
    function requestRent(
        string memory destinationChain,
        address nftAddress,
        uint256 tokenId,
        uint16 daysToRent,
        GatewayAck memory gas
    ) public payable nonReentrant {
        address sender = msgSender();
        if (_compareStrings(destinationChain, chainName)) {
            // non cross-chain case: listing is on renter's chain
            rent(nftAddress, tokenId, daysToRent);
            IERC721(nftAddress).transferFrom(sender, address(this), tokenId);
        } else {
            // cross-chain case: listing is on a differnt chain
            bytes memory payload = abi.encode(
                nftAddress,
                tokenId,
                daysToRent,
                sender,
                chainName,
                gas.renterLinker
            );
            bytes memory responsePayload = abi.encode(
                nftAddress,
                tokenId,
                sender,
                chainName
            );
            string memory stringAddress = address(this).toString();

            if (gas.gasForRemote > 0) {
                require(
                    gas.gasForRemote > msg.value,
                    'Not enough value for gas'
                );
                gasReceiver.payNativeGasForContractCall{
                    value: gas.gasForRemote
                }(
                    address(this),
                    destinationChain,
                    gas.lenderMarket.toString(),
                    payload,
                    msg.sender
                );
                if (msg.value > gas.gasForRemote) {
                    gasReceiver.payNativeGasForContractCall{
                        value: msg.value - gas.gasForRemote
                    }(
                        gas.lenderLinker,
                        chainName,
                        gas.renterLinker.toString(),
                        responsePayload,
                        msg.sender
                    );
                }
            }

            gasReceiver.payNativeGasForContractCall{value: msg.value}(
                address(this),
                destinationChain,
                stringAddress,
                payload,
                sender
            );
            gateway().callContract(destinationChain, stringAddress, payload);
        }
    }

    /**
     * @dev executes the request on the lender's chain
     */
    function _execute(
        string memory,
        string memory,
        bytes calldata payload
    ) internal override {
        (
            address nftAddress,
            uint256 nftId,
            uint16 daysToRent,
            address recipient,
            string memory renterChain,
            address nftLinker
        ) = abi.decode(payload, (address, uint256, uint16, address, string, address));

        rent(nftAddress, nftId, daysToRent);
        INftLinker(nftLinker).sendNFT(
            nftAddress,
            nftId,
            renterChain,
            recipient
        );
    }

    function _compareStrings(string memory a, string memory b)
        internal
        pure
        returns (bool)
    {
        if (bytes(a).length != bytes(b).length) {
            return false;
        } else {
            return
                keccak256(abi.encodePacked(a)) ==
                keccak256(abi.encodePacked(b));
        }
    }
}
