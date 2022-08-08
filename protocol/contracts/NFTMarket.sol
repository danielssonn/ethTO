// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721.sol';
import '@openzeppelin/contracts/token/ERC1155/IERC1155.sol';
import '@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol';
import '@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol';
import '@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol';
// import './INFTMarket.sol';
import './NFTListing.sol';
import './Payment.sol';
import './Collateral.sol';
import './Rental.sol';
import 'hardhat/console.sol';

contract NFTMarket is
    ERC721Holder,
    ERC1155Receiver,
    ERC1155Holder,
    Ownable,
    ReentrancyGuard
{
    event NFTListed(
        address lender,
        address nftAddress,
        uint256 tokenId,
        uint256 maximumEndTime,
        Payment payment,
        Collateral collateral
    );

    event NFTRented(address nftAddress, uint256 tokenId, Rental rental);

    // The main mapping maintaing the NFT listings.
    // Address represents the NFTContract address
    // uint256 represents the tokenId of the NFT
    mapping(address => mapping(uint256 => NFTListing)) internal listedNFTs;

    NFTListing[] public listings;

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
    ) public nonReentrant {
        onlyApprovedOrOwner(msgSender(), nftAddress, tokenId);

        address lender = msgSender();

        // Create the listing Struct with default values.
        // We need to do it this way because the renter is not yet defined.
        NFTListing storage listing = listedNFTs[nftAddress][tokenId];
        listing.nftAddress = nftAddress;
        listing.tokenId = tokenId;
        listing.lender = lender;
        listing.maximumEndTime = maximumEndTime;
        listing.createTime = block.timestamp;
        listing.payment = payment;
        listing.collateral = collateral;

        listings.push(listing);

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
    function _verifyRentConditions(
        address nftAddress,
        uint256 tokenId,
        uint16 daysToRent
    )
        internal
        nonReentrant
        returns (
            Payment memory payment,
            Collateral memory collateral,
            address lender
        )
    {
        NFTListing storage listing = listedNFTs[nftAddress][tokenId];
        uint256 rentalExpiry = (daysToRent * 86400) + block.timestamp;

        require(listing.createTime != 0, 'This listing does not exist');
        require(
            daysToRent > 0,
            'The rental period must be greater than 0 days'
        );
        require(
            rentalExpiry <= listing.maximumEndTime,
            'Rental timeframe too long.'
        );
        require(
            listing.rental.renter == address(0) &&
                listing.rental.expiryTime == 0,
            'This item is already rented.'
        );

        payment = listing.payment;
        collateral = listing.collateral;
        lender = listing.lender;
    }

    /**
     * Used to mark an nft as rented and transfer the NFT
     */
    function _verifyPayment(
        address renter,
        Payment memory payment,
        Collateral memory collateral,
        uint16 daysToRent
    )
        internal
        nonReentrant
        returns (string memory paymentTokenSymbol, uint256 rentalCost)
    {
        ERC20 paymentTokenContract = ERC20(payment.paymentToken);
        paymentTokenSymbol = paymentTokenContract.symbol();
        ERC20 collateralTokenContract = ERC20(collateral.collateralToken);
        rentalCost = daysToRent * payment.pricePerDay;

        if (payment.paymentToken == collateral.collateralToken) {
            uint256 totalCost = rentalCost + collateral.collateralAmount;
            require(
                paymentTokenContract.balanceOf(renter) >= totalCost,
                'Insufficient combined funds'
            );
        } else {
            require(
                paymentTokenContract.balanceOf(renter) >= rentalCost,
                'Insufficient payment funds'
            );
            require(
                collateralTokenContract.balanceOf(renter) >=
                    collateral.collateralAmount,
                'Insufficient collateral funds'
            );
        }

        // lock in the collateral
        collateralTokenContract.transferFrom(
            renter,
            address(this),
            collateral.collateralAmount
        );
    }

    /**
     * update listing information after payment has been received
     */
    function _updateListing(
        address nftAddress,
        uint256 tokenId,
        address renter,
        uint16 daysToRent
    ) internal {
        NFTListing storage listing = listedNFTs[nftAddress][tokenId];
        uint256 rentalExpiry = (daysToRent * 86400) + block.timestamp;
        Rental memory rental = Rental(renter, rentalExpiry);
        listing.rental = rental;

        // check https://github.com/axelarnetwork/axelar-local-gmp-examples/tree/main/examples/nft-auctionhouse for the axealar hookup
        emit NFTRented(nftAddress, tokenId, rental);
    }

    /**
     * Renter returns NFT to the lender, lender gets paid
     */
    function returnRentedNFT(address nftAddress, uint256 tokenId)
        public
        payable
        returns (uint256 txId)
    {
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
        returns (NFTListing memory)
    {
        return listedNFTs[nftAddress][tokenId];
    }

    function getAllListings() public view returns (NFTListing[] memory) {
        return listings;
    }

    /**
     * NFT listing can be cancelled by lender
     */
    function cancelNFTListing(address nftAddress, uint256 tokenId) public {
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
            'You must be the owner or approved to do this ...'
        );
    }
}
