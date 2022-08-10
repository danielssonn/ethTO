// SPDX-License-Identifier: MIT

pragma solidity >=0.8.7 <0.9.0;

// (renterMarket, renterChain) ====> (lenderMarket, lenderChain) ----> (lenderLinker, lenderChain) =====> (renterLinker, renterChain)

struct GatewayAck {
    address lenderMarket;
    address renterLinker;
    address lenderLinker;
    uint256 gasForRemote;
}
