// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import { AxelarExecutable } from '@axelar-network/axelar-utils-solidity/contracts/executables/AxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-utils-solidity/contracts/interfaces/IAxelarGateway.sol';
import { NFTMarket } from './NFTMarket.sol';
import { Collateral } from './Collateral.sol';
import { Payment } from './Payment.sol';

contract SendAckReceiver is AxelarExecutable, NFTMarket {
        IAxelarGateway immutable _gateway;

    constructor(address gateway_) {
        _gateway = IAxelarGateway(gateway_);
    }

    function gateway() public view override returns (IAxelarGateway) {
        return _gateway;
    }

    function _execute(
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata noncedPayload
    ) internal override {
        (uint256 nonce, bytes memory payload) = abi.decode(noncedPayload, (uint256, bytes));
        (
         ,
         ,
         uint16 daysToRent,
         Payment memory payment,
         Collateral memory collateral,
         ,
         address renter
         ) =
            abi.decode(payload, (address, uint256, uint16, Payment, Collateral, address, address));
        (string memory symbol, uint256 rentalPrice) =
            _verifyPayment(renter, payment, collateral, daysToRent);

        gateway().callContractWithToken(
             sourceChain,
            sourceAddress,
            noncedPayload,
            symbol,
            rentalPrice
        );
    }
}
