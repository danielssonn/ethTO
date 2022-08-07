import { Contract } from '@ethersproject/contracts'
import { expect } from 'chai'
import { ethers } from 'hardhat'
import { Payment, Collateral, nftListing } from '../../scripts/types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'

const nftBaseTokenURI = 'http://example.com'

describe('NFTMarket', function () {
  let nftMarket: Contract | undefined
  let nftContract: Contract | undefined
  let dummyCoin: Contract | undefined
  let anotherDummyCoin: Contract | undefined
  const daysToRent = 2
  let payment: Payment | undefined
  let collateral: Collateral | undefined
  let renter: SignerWithAddress | undefined
  let lender: SignerWithAddress | undefined

  before(async () => {
    const NFTMarket = await ethers.getContractFactory('NFTMarketExposed')
    nftMarket = await NFTMarket.deploy()
    await nftMarket.deployed()

    const NFTContract = await ethers.getContractFactory('NFTDummy')
    nftContract = await NFTContract.deploy(nftBaseTokenURI)
    await nftContract.deployed()

    const DummyCoin = await ethers.getContractFactory('DummyCoin')
    dummyCoin = await DummyCoin.deploy()
    await dummyCoin.deployed()
    anotherDummyCoin = await DummyCoin.deploy()
    await anotherDummyCoin.deployed()

    const signers = await ethers.getSigners()
    lender = signers[0]
    renter = signers[1]

    await nftContract.connect(lender!).mint()

    payment = {
      paymentToken: dummyCoin!.address,
      pricePerDay: ethers.utils.parseEther('0.001'),
    }
    collateral = {
      collateralToken: anotherDummyCoin!.address,
      collateralAmount: ethers.utils.parseEther('0.01'),
    }
  })

  describe('Listing an NFT', function () {
    it("Should fail if the sender isn't the token holder", async () => {
      await expect(
        nftMarket!.connect(lender!).listNFT(
          nftContract!.address,
          1,
          daysToRent, // two day from now
          collateral,
          payment
        )
      ).to.be.reverted
    })

    it('Should be able to list an NFT', async () => {
      // Approve the transfer first
      await nftContract!.connect(lender!).approve(nftMarket!.address, 0)

      const tx = await nftMarket!
        .connect(lender!)
        .listNFT(nftContract!.address, 0, daysToRent, payment, collateral)

      await expect(tx).to.emit(nftMarket!, 'NFTListed')
      expect(await nftContract!.balanceOf(nftMarket!.address)).to.equal(1)
    })
  })
  describe('Verifying rent Conditions', function () {
    let listing: nftListing | undefined
    before(async () => {
      listing = await nftMarket!.getListing(nftContract!.address, 0)
    })
    it('Should fail if the requested rental days is 0', async () => {
      await expect(
        nftMarket!.verifyRentConditions(nftContract!.address, 0, 0)
      ).to.be.revertedWith('The rental period must be greater than 0 days')
    })

    it('Should fail if the requested rental expiry is greater than the allowed end time', async () => {
      await expect(
        nftMarket!.verifyRentConditions(nftContract!.address, 0, 3)
      ).to.be.revertedWith('Rental timeframe too long.')
    })
  })
  describe('Verify Payment', function () {
    describe('Faling Scenario', function () {
      it('Should fail if the renter does not have sufficient payment funds', async () => {
        await expect(
          nftMarket!.verifyPayment(
            renter!.address,
            payment,
            collateral,
            daysToRent
          )
        ).to.be.revertedWith('Insufficient payment funds')
      })

      it('Should fail if the renter does not have sufficient collateral funds', async () => {
        await dummyCoin!.transfer(
          renter!.address,
          ethers.utils.parseEther('0.005')
        )

        await expect(
          nftMarket!.verifyPayment(
            renter!.address,
            payment,
            collateral,
            daysToRent
          )
        ).to.be.revertedWith('Insufficient collateral funds')
      })

      it('Should fail if both payment and collateral are the same and the renter does not have enough funds', async () => {
        const collateralSameToken = {
          collateralToken: dummyCoin!.address,
          collateralAmount: ethers.utils.parseEther('0.01'),
        }
        await expect(
          nftMarket!.verifyPayment(
            renter!.address,
            payment,
            collateralSameToken,
            daysToRent
          )
        ).to.be.revertedWith('Insufficient combined funds')
      })

      it('Should fail if the renter has not approved the payment or collateral', async () => {
        await dummyCoin!.transfer(
          renter!.address,
          ethers.utils.parseEther('0.005')
        )

        await expect(
          nftMarket!.verifyPayment(
            renter!.address,
            payment,
            collateral,
            daysToRent
          )
        ).to.be.reverted
      })
    })
    describe('Succesful Scenario', function () {
      it('Should increase the collateral escrow', async () => {
        await anotherDummyCoin!.transfer(
          renter!.address,
          ethers.utils.parseEther('0.01')
        )

        await anotherDummyCoin!
          .connect(renter!)
          .approve(nftMarket!.address, ethers.utils.parseEther('0.01'))

        await nftMarket!.verifyPayment(
          renter!.address,
          payment,
          collateral,
          daysToRent
        )
        expect(await anotherDummyCoin!.balanceOf(nftMarket!.address)).to.equal(
          ethers.utils.parseEther('0.01').toString()
        )
      })
    })
  })
  describe('Update Listing', function () {
    before(async () => {
      const tx = await nftMarket!.updateListing(
        nftContract!.address,
        0,
        renter!.address,
        daysToRent
      )

      await expect(tx).to.emit(nftMarket!, 'NFTRented')
    })
    it('Should update the listing with the rental info', async () => {
      const listing = await nftMarket!.getListing(nftContract!.address, 0)

      expect(listing.rental.renter).to.equal(renter!.address)
    })
  })
})
