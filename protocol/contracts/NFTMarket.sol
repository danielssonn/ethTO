// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "./INFTMarket.sol";
import "./NFTListing.sol";
import "./Payment.sol";
import "./Collateral.sol";

contract NFTMarket is
    INFTMarket,
    ERC721Holder,
    ERC1155Receiver,
    ERC1155Holder,
    Ownable,
    ReentrancyGuard
{
    // The main mapping maintaing the NFT listings. Address represents the lender
    mapping(address => mapping(uint256 => NFTListing)) internal listedNFT;

    /**
     * Lender can list NFT on the platform
     */
    function listNFT(
        address nftAddress,
        uint256 tokenId,
        uint64 minimumDuration,
        uint64 maximumEndTime,
        Payment memory payment,
        Collateral memory collateral
    ) public override nonReentrant {
        onlyApprovedOrOwner(msg.sender, nftAddress, tokenId);
        // Add the NFT into the listedNFT mapping
        // No renter, yet ...
        // transfer the NFT to this contract for an escrow (see ERC721Holder and ERC1155Holder)

        emit NFTListed(
            msg.sender,
            nftAddress,
            tokenId,
            minimumDuration,
            maximumEndTime,
            payment,
            collateral
        );
    }

    /**
     * Renter can rent NFT
     */
    function rentNFT(
        address nftAddress,
        uint256 tokenId,
        uint64 maximumEndTime,
        uint64 minimumDuration,
        Payment memory payment,
        Collateral memory collateral
    ) public payable override nonReentrant {
        // get the price token type and amounts.
        // Will be converted by SWING.XYZ to lender's desired one
        // Lock in the collateral in this contract
        // Make the payment to the lender
        // update listedNFT with collateral and payment
        // pay collateral to this contract, for this NFTListing
        // check https://github.com/axelarnetwork/axelar-local-gmp-examples/tree/main/examples/nft-auctionhouse for the axealar hookup
        emit NFTRented(
            msg.sender,
            nftAddress,
            tokenId,
            maximumEndTime,
            minimumDuration,
            payment,
            collateral
        );
    }

    /**
     * Renter returns NFT to the lender, lender gets paid
     */
    function returnRentedNFT(
        address renter,
        address nftAddress,
        uint256 tokenId
    ) public payable override returns (uint256 txId) {
        // get the NFT from the renter
        // calculate royalties, fees etc. get a cut
        // return collateral to the renter
        // transfer the NFT to the lender
        // pay collateral from this contract
        // check https://github.com/axelarnetwork/axelar-local-gmp-examples/tree/main/examples/nft-auctionhouse for the axealar hookup
    }

    function getListing(address nftAddress, uint256 tokenId)
        public
        view
        override
        returns (NFTListing memory)
    {}

    /**
     * NFT listing can be cancelled by lender
     */
    function cancelNFTListing(address nftAddress, uint256 tokenId)
        public
        override
    {
        onlyApprovedOrOwner(msg.sender, nftAddress, tokenId);

        // Make sure it is not rented ATM
        // Remove the NFT into the listedNFT mapping
    }

    /**
     * Let's make sure the lender owns the NFT.
     * TODO: Add 1155 support
     */
    function onlyApprovedOrOwner(
        address lender,
        address nftAddress,
        uint256 tokenId
    ) internal view {
        address _owner = IERC721(nftAddress).ownerOf(tokenId);
        require(
            lender == _owner ||
                IERC721(nftAddress).getApproved(tokenId) == lender ||
                IERC721(nftAddress).isApprovedForAll(_owner, lender),
            "You must be the owner or approved to do this ..."
        );
    }
}
