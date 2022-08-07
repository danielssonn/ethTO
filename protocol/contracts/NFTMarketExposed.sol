// SPDX-License-Identifier: MIT

// exposed version of NFTMarket for unit tests
pragma solidity >=0.8.7 <0.9.0;

import {NFTMarket} from './NFTMarket.sol';
import {Payment} from './Payment.sol';
import {Collateral} from './Collateral.sol';

contract NFTMarketExposed is NFTMarket {
    function verifyRentConditions(
        address nftAddress,
        uint256 tokenId,
        uint16 daysToRent
    ) public {
        _verifyRentConditions(nftAddress, tokenId, daysToRent);
    }

    function verifyPayment(
        address renter,
        Payment memory payment,
        Collateral memory collateral,
        uint16 daysToRent
    ) public {
        _verifyPayment(renter, payment, collateral, daysToRent);
    }

    function updateListing(
        address nftAddress,
        uint256 tokenId,
        address renter,
        uint16 daysToRent
    ) public {
        _updateListing(nftAddress, tokenId, renter, daysToRent);
    }
}
