// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { AxelarExecutable } from "@axelar-network/axelar-utils-solidity/contracts/executables/AxelarExecutable.sol";
import { IAxelarGateway } from "@axelar-network/axelar-utils-solidity/contracts/interfaces/IAxelarGateway.sol";
import { StringToAddress, AddressToString } from "@axelar-network/axelar-utils-solidity/contracts/StringAddressUtils.sol";
import { NFTMarket } from "./NFTMarket.sol";
import { IERC20 } from "@axelar-network/axelar-cgp-solidity/contracts/interfaces/IERC20.sol";
import { IAxelarGasService } from "@axelar-network/axelar-cgp-solidity/contracts/interfaces/IAxelarGasService.sol";

contract MarketSyncher is
    AxelarExecutable,
    NFTMarket
{
    using StringToAddress for string;
    using AddressToString for address;

    error AlreadyInitialized();

    IAxelarGateway private s_gateway;
    IAxelarGasService public gasReceiver;
    string public chainName; // see valid chain names at https://docs.axelar.dev/dev/build/chain-names

    function init(
        string memory _chainName,
        address _gateway,
        address _gasReceiver
    ) external {
        if (address(gateway()) != address(0) || address(gasReceiver) != address(0)) revert AlreadyInitialized();
        gasReceiver = IAxelarGasService(_gasReceiver);
        s_gateway = IAxelarGateway(_gateway);
        chainName = _chainName;
    }

    function gateway() public view override returns(IAxelarGateway) {
        return s_gateway;
    }

    function rent(
        string calldata destinationChain,
        address nftAddress,
        uint256 tokenId,
        uint16 daysToRent
    ) external payable nonReentrant {
        // verify that user has
         bytes memory payload = abi.encode(nftAddress, tokenId, daysToRent, address(0));
         string memory stringAddress = address(this).toString();
         string memory tokenSymbol = "aUSDC";
         uint256 amount = 100;

         gasReceiver.payNativeGasForContractCall{ value: msg.value }(address(this), destinationChain, stringAddress, payload, msg.sender);
         gateway().callContractWithToken(destinationChain, stringAddress, payload, tokenSymbol, amount);
    }

    function _executeWithToken(
        string memory sourceChain,
        string memory sourceAddress,
        bytes calldata payload,
        string memory tokenSymbol,
        uint256 amount
    ) internal override {
        (address nftAddress, uint256 nftId, uint16 daysToRent, address recipient) = abi.decode(payload, (address,  uint256, uint16, address));
        address tokenAddress = gateway().tokenAddresses(tokenSymbol);

        _markAsRented(nftAddress, nftId, daysToRent);
        IERC20(tokenAddress).transfer(recipient, amount);
    }
}
