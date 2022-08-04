// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { AxelarExecutable } from '@axelar-network/axelar-utils-solidity/contracts/executables/AxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-utils-solidity/contracts/interfaces/IAxelarGateway.sol';
import { StringToAddress, AddressToString } from '@axelar-network/axelar-utils-solidity/contracts/StringAddressUtils.sol';
import "./INFTMarket.sol"
import "./NFTMarket.sol"

contract MarketSyncher is
    AxelarExecutable,
    NFTMarket
{
    IAxelarGateway immutable gateway;
    string public chainName; // see valid chain names at https://docs.axelar.dev/dev/build/chain-names

    function init(
        string memory _chainName,
        address _gateway,
        address _gasReceiver
    ) external {
        if (address(gateway()) != address(0) || address(gasReceiver) != address(0)) revert AlreadyInitialized();
        gasReceiver = IAxelarGasService(gasReceiver_);
        gateway = IAxelarGateway(_gateway);
        chainNamae = _chainName;
    }


    function gateway() public view override returns (IAxelarGateway) {
        return _gateway;
    }

    // TODO: switch from public to external, since this is meant to be called by the FE only
    // TODO: if we switch to external using calldata reference for dest chain will save us gas
    function rent(
        string memory destinationChain,
        address nftAddress,
        uint256 tokenId,
        uint16 daysToRent
    ) public payable nonReentrant {
        // verify that user has
         bytes memory payload = abi.encode(chainName, nftAddress, tokenId, daysToRent);
         string memory stringAddress = address(this).toString();

         gasReceiver.payNativeGasForContractCall{ value: msg.value }(address(this), destinationChain, stringAddress, payload, msg.sender);
         // TODO: callContractWithToken
         gateway().callContractWithToken(destinationChain, stringAddress, payload);
    }

    function _executeWithToken(
        string memory sourceChain,
        string memory sourceAddress,
        bytes calldata payload
    ) internal override {
        (string chainName, address nftAddress, uint256 tokenId, uint16 daysToRent) = abi.decode(payload, (string, address, uint256, uint16));
        _markAsRented(nftAddress, tokenId, daysToRent)
    }
}
