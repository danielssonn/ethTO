// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Payment.sol";
import "./Collateral.sol";

struct NFTListing {
    address lender;
    uint64 maximumEndTime;
    uint64 minimumDuration;
    uint256 createTime;
    address renter;
    Payment payment;
    Collateral collateral;
}
