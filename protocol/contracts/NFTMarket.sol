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
import "./Rental.sol";
import "hardhat/console.sol";

contract NFTMarket is
    INFTMarket,
    ERC721Holder,
    ERC1155Receiver,
    ERC1155Holder,
    Ownable,
    ReentrancyGuard
{
    // The main mapping maintaing the NFT listings.
    // Address represents the NFTContract address
    // uint256 represents the tokenId of the NFT
    mapping(address => mapping(uint256 => NFTListing)) internal listedNFTs;

    function msgSender() internal view virtual returns (address) {
      return msg.sender;
    }

    /**
     * Lender can list NFT on the platform
     */
    function listNFT(
        address nftAddress,
        uint256 tokenId,
        uint256 maximumEndTime,
        Payment memory payment,
        Collateral memory collateral
    ) public override nonReentrant {
        onlyApprovedOrOwner(msgSender(), nftAddress, tokenId);

        address lender = msgSender();

        // Create the listing Struct with default values.
        // We need to do it this way because the renter is not yet defined.
        NFTListing storage listing = listedNFTs[nftAddress][tokenId];
        listing.lender = lender;
        listing.maximumEndTime = maximumEndTime;
        listing.createTime = block.timestamp;
        listing.payment = payment;
        listing.collateral = collateral;

        // transfer the NFT to this contract for an escrow (see ERC721Holder and ERC1155Holder)
        IERC721(nftAddress).safeTransferFrom(lender, address(this), tokenId);

        emit NFTListed(
            msgSender(),
            nftAddress,
            tokenId,
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
        uint16 daysToRent
    ) public payable override nonReentrant returns(string memory, uint256) {
        NFTListing memory listing = listedNFTs[nftAddress][tokenId];
        uint256 rentalExpiry = (daysToRent * 86400) + block.timestamp;

        require(listing.createTime != 0, "This listing does not exist");
        require(daysToRent > 0, "The rental period must be greater than 0 days");
        require(rentalExpiry <= listing.maximumEndTime, "Rental timeframe too long.");
        require(listing.rental.renter == address(0) && listing.rental.expiryTime == 0, "This item is already rented.");

        ERC20 paymentToken = ERC20(listing.payment.paymentToken);
        ERC20 collateralToken = ERC20(listing.collateral.collateralToken);
        uint256 rentalCost = daysToRent * listing.payment.pricePerDay;

        require(paymentToken.balanceOf(msgSender()) >= rentalCost, "Insufficient payment funds");
        require(collateralToken.balanceOf(msgSender()) >= listing.collateral.collateralAmount, "Insufficient collateral funds");

        if (listing.payment.paymentToken == listing.collateral.collateralToken) {
            uint256 totalCost = rentalCost + listing.collateral.collateralAmount;
            require(paymentToken.balanceOf(msgSender()) >= totalCost, "Insufficient combined funds");
        }

        // Lock in the collateral in this contract
        collateralToken.transferFrom(msgSender(), address(this), listing.collateral.collateralAmount);

        // Make the payment to the lender
        // paymentToken.transferFrom(msgSender(), listing.lender, rentalCost);

        // Transfer NFT to renter address on this chain
        IERC721(nftAddress).safeTransferFrom(address(this), msgSender(), tokenId);

        // Save the rental on the listing
        listing.rental = Rental(msgSender(), rentalExpiry);
        listedNFTs[nftAddress][tokenId] = listing;

        // check https://github.com/axelarnetwork/axelar-local-gmp-examples/tree/main/examples/nft-auctionhouse for the axealar hookup
        emit NFTRented(
            nftAddress,
            tokenId,
            listing.rental
        );

        // needed to perform payment via Axelar
        return (paymentToken.symbol(), rentalCost);
    }

    /**
     * Internally used to mark an nft as rented
     */
    function _markAsRented(
        address nftAddress,
        uint256 tokenId,
        uint16 daysToRent
    ) internal {
        uint256 rentalExpiry = (daysToRent * 86400) + block.timestamp;
        listedNFTs[nftAddress][tokenId].rental = Rental(msgSender(), rentalExpiry);
    }

    /**
     * Renter returns NFT to the lender, lender gets paid
     */
    function returnRentedNFT(
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
    {
        return listedNFTs[nftAddress][tokenId];
    }

    /**
     * NFT listing can be cancelled by lender
     */
    function cancelNFTListing(address nftAddress, uint256 tokenId)
        public
        override
    {
        onlyApprovedOrOwner(msgSender(), nftAddress, tokenId);

        // Make sure it is not rented ATM
        // Remove the NFT from the listedNFTs mapping
    }

    /**
     * Make sure the lender owns the NFT.
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
