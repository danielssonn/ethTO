// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./NFTListing.sol";
import "./Payment.sol";
import "./Collateral.sol";

interface INFTMarket {
    function listNFT(
        address nftAddress,
        uint256 tokenId,
        uint64 minimumDuration,
        uint64 maximumEndTime,
        Payment memory payment,
        Collateral memory collateral
    ) external;

    function rentNFT(
        address nftAddress,
        uint256 tokenId,
        uint64 maximumEndTime,
        uint64 minimumDuration,
        Payment memory payment,
        Collateral memory collateral
    ) external payable;

    function returnRentedNFT(
        address renter,
        address nftAddress,
        uint256 tokenId
    ) external payable returns (uint256 txId);

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
        uint64 minimumDuration,
        uint64 maximumEndTime,
        Payment payment,
        Collateral collateral
    );

    event CancelNFTListing(address lender, address nftAddress, uint256 tokenId);

    event NFTRented(
        address renter,
        address nftAddress,
        uint256 tokenId,
        uint64 maximumEndTime,
        uint64 minimumDuration,
        Payment payment,
        Collateral collateral
    );
}
