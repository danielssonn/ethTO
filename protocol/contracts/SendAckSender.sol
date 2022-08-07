// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import { AxelarExecutable } from '@axelar-network/axelar-utils-solidity/contracts/executables/AxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-utils-solidity/contracts/interfaces/IAxelarGateway.sol';
import { IAxelarGasService } from '@axelar-network/axelar-cgp-solidity/contracts/interfaces/IAxelarGasService.sol';
import { StringToAddress, AddressToString } from '@axelar-network/axelar-utils-solidity/contracts/StringAddressUtils.sol';
import { NFTMarket } from './NFTMarket.sol';
import { Collateral } from './Collateral.sol';
import { Payment } from './Payment.sol';

contract SendAckSender is AxelarExecutable, NFTMarket {
    using StringToAddress for string;
    using AddressToString for address;

    error NotEnoughValueForGas();

    event ContractCallSent(string destinationChain, string contractAddress, bytes payload, uint256 nonce);
    event FalseAcknowledgment(string destinationChain, string contractAddress, uint256 nonce);

    uint256 public nonce;
    mapping(uint256 => bool) public executed;
    mapping(uint256 => bytes32) public destination;
    IAxelarGasService public gasReceiver;
    IAxelarGateway _gateway;
    string public thisChain;

    constructor(
        address gateway_,
        address gasReceiver_,
        string memory thisChain_
    ) {
        gasReceiver = IAxelarGasService(gasReceiver_);
        _gateway = IAxelarGateway(gateway_);
        thisChain = thisChain_;
    }

    function gateway() public view override returns (IAxelarGateway) {
        return _gateway;
    }

    function _getDestinationHash(string memory destinationChain, string memory contractAddress) internal pure returns (bytes32) {
        return keccak256(abi.encode(destinationChain, contractAddress));
    }

    function rent(
        address nftAddress,
        uint256 tokenId,
        uint16 daysToRent,
        string calldata destinationChain,
        string calldata contractAddress,
        uint256 gasForRemote
    ) external payable {
        (Payment memory payment, Collateral memory collateral, address lender) =
            _verifyRentConditions(nftAddress, tokenId, daysToRent);
        address renter = msgSender();
        bytes memory payload = abi.encode(nftAddress, tokenId, daysToRent, payment, collateral, lender, renter);
        _sendContractCall(destinationChain, contractAddress, payload, gasForRemote);
    }

    function _sendContractCall(
        string memory destinationChain,
        string memory contractAddress,
        bytes memory payload,
        uint256 gasForRemote
    ) internal {
        uint256 nonce_ = nonce;
        bytes memory noncedPayload = abi.encode(nonce_, payload);

        // verify gas is sufficient for roundtrip message
        if (gasForRemote > 0) {
            if (gasForRemote > msg.value) revert NotEnoughValueForGas();
            gasReceiver.payNativeGasForContractCall{ value: gasForRemote }(
                address(this),
                destinationChain,
                contractAddress,
                noncedPayload,
                msg.sender
            );
            if (msg.value > gasForRemote) {
                gasReceiver.payNativeGasForContractCall{ value: msg.value - gasForRemote }(
                    contractAddress.toAddress(),
                    thisChain,
                    address(this).toString(),
                    noncedPayload,
                    msg.sender
                );
            }
        }

        // send to Receiver
        gateway().callContract(destinationChain, contractAddress, noncedPayload);
        emit ContractCallSent(destinationChain, contractAddress, payload, nonce_);

        destination[nonce_] = _getDestinationHash(destinationChain, contractAddress);
        nonce = nonce_ + 1;
    }

    function _executeWithToken(
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload,
        string memory tokenSymbol,
        uint256 amount
    ) internal override {
        // nonce verification
        (uint256 nonce_, bytes memory responsePayload) =
            abi.decode(payload, (uint256, bytes));
        if (destination[nonce_] != _getDestinationHash(sourceChain, sourceAddress)) {
            emit FalseAcknowledgment(sourceChain, sourceAddress, nonce_);
            return;
        }
        (
         address nftAddress,
         uint256 tokenId,
         uint16 daysToRent,
         ,
         ,
         address lender,
         address renter
         ) =
            abi.decode(responsePayload, (address, uint256, uint16, Payment, Collateral, address, address));
        address paymentTokenContract = gateway().tokenAddresses(tokenSymbol);

        IERC20(paymentTokenContract).transferFrom(renter, lender, amount);

        executed[nonce_] = true;
        destination[nonce_] = 0; // get some gas back.
        _updateListing(nftAddress, tokenId, renter, daysToRent); // mark nft as rented
    }
}
