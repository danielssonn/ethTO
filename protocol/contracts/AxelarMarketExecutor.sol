// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import { AxelarExecutable } from "@axelar-network/axelar-utils-solidity/contracts/executables/AxelarExecutable.sol";
import { IAxelarGateway } from "@axelar-network/axelar-utils-solidity/contracts/interfaces/IAxelarGateway.sol";
import { StringToAddress, AddressToString } from "@axelar-network/axelar-utils-solidity/contracts/StringAddressUtils.sol";
import { NFTMarket } from "./NFTMarket.sol";
import { IERC20 } from "@axelar-network/axelar-cgp-solidity/contracts/interfaces/IERC20.sol";
import { IAxelarGasService } from "@axelar-network/axelar-cgp-solidity/contracts/interfaces/IAxelarGasService.sol";

contract AxelarMarketExecutor is
    AxelarExecutable,
    NFTMarket
{
    using StringToAddress for string;
    using AddressToString for address;

    error AlreadyInitialized();

    IAxelarGateway private _gateway;
    IAxelarGasService public gasReceiver;
    string public chainName; // see valid chain names at https://docs.axelar.dev/dev/build/chain-names
     mapping(uint256 => address) _nftLinkerContract;

    constructor(
        address gateway,
        address gasReceiver_,
        string memory chainName_
    ) {
        gasReceiver = IAxelarGasService(gasReceiver_);
        _gateway = IAxelarGateway(gateway);
        chainName = chainName_;
    }

    function gateway() public view override returns(IAxelarGateway) {
        return _gateway;
    }

    /**
     * @dev request a rent on the listing chain from the renter's chain
     */
    function requestRent(
        string memory destinationChain,
        address nftAddress,
        uint256 tokenId,
        uint16 daysToRent
    ) public payable nonReentrant {
        address sender = msgSender();
        if (_compareStrings(destinationChain, chainName)) {
            // non cross-chain case: listing is on renter's chain
            rent(nftAddress, tokenId, daysToRent);
            IERC721(nftAddress).transferFrom(sender, address(this), tokenId);
        } else {
            // cross-chain case: listing is on a differnt chain
            bytes memory payload = abi.encode(nftAddress, tokenId, daysToRent, sender, chainName);
            string memory stringAddress = address(this).toString();

            gasReceiver.payNativeGasForContractCall{ value: msg.value }(address(this), destinationChain, stringAddress, payload, sender);
            gateway().callContract(destinationChain, stringAddress, payload);
        }
    }

    /**
     * @dev executes the request on the lender's chain
     */
    function _execute(
        string memory sourceChain,
        string memory _sourceAddress,
        bytes calldata payload
    ) internal override {
        (address nftAddress, uint256 nftId, uint16 daysToRent, address recipient, string memory renterChain) = abi.decode(payload, (address,  uint256, uint16, address, string));

        rent(nftAddress, nftId, daysToRent);
        // INFTLinker(_nftLinkeContract[tokenId]).sendNFT(nftAddress, tokenId, renterChain, recipient)
    }

    function _compareStrings(string memory a, string memory b) internal pure returns (bool) {
        if(bytes(a).length != bytes(b).length) {
            return false;
        } else {
            return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
        }
    }
}
