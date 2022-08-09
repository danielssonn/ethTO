// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Payment.sol";
import "./Collateral.sol";
import "./Rental.sol";

struct NFTListing {
    address nftAddress;
    uint256 tokenId;
    address lender;
    uint256 maximumEndTime;
    uint256 createTime;
    Rental rental;
    Payment payment;
    Collateral collateral;
}
