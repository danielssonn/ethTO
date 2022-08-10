// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import './NFTListing.sol';
import './Payment.sol';
import './Collateral.sol';
import './Rental.sol';

interface INFTMarket {
    function listNFT(
        address nftAddress,
        uint256 tokenId,
        uint256 maximumEndTime,
        address preferredToken,
        uint256 pricePerDay,
        uint256 collateralAmount
    ) external;

    function rent(
        address nftAddress,
        uint256 tokenId,
        uint16 daysToRent
    ) external;

    function returnRentedNFT(address nftAddress, uint256 tokenId)
        external
        payable
        returns (uint256 txId);

    function getListing(address nftAddress, uint256 tokenId)
        external
        view
        returns (NFTListing memory);

    function cancelNFTListing(address nftAddress, uint256 tokenId) external;

    // Events section
    event NFTListed(
        address lender,
        address nftAddress,
        uint256 tokenId,
        uint256 maximumEndTime,
        uint256 pricePerDay,
        uint256 collateralAmount
    );

    event CancelNFTListing(address lender, address nftAddress, uint256 tokenId);

    event NFTRented(address nftAddress, uint256 tokenId, Rental rental);
}
