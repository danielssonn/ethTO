// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Payment.sol";
import "./Collateral.sol";

struct NFTListing {
    address lender;
    address nftAddress;
    uint256 tokenId;
    uint64 maximumEndTime;
    uint64 minimumDuration;
    uint64 createTime;
    address renter;
    Payment payment;
    Collateral collateral;
}
