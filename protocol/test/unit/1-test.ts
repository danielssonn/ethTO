import { Contract } from '@ethersproject/contracts'
import { TransactionResponse } from '@ethersproject/abstract-provider'
import { expect } from 'chai'
import { ethers } from 'hardhat'
import { nftListing } from '../../scripts/types'
import { BigNumber } from 'ethers'

const nftBaseTokenURI = 'http://example.com'

describe('NFTMarket', function () {
  let nftMarket: Contract | undefined
  let nftContract: Contract | undefined
  let dummyCoin: Contract | undefined

  before(async () => {
    const NFTMarket = await ethers.getContractFactory('NFTMarket')
    nftMarket = await NFTMarket.deploy()
    await nftMarket.deployed()

    const NFTContract = await ethers.getContractFactory('NFTDummy')
    nftContract = await NFTContract.deploy(nftBaseTokenURI)
    await nftContract.deployed()

    const DummyCoin = await ethers.getContractFactory('DummyCoin')
    dummyCoin = await DummyCoin.deploy()
    await dummyCoin.deployed()

    const [, addr1, addr2] = await ethers.getSigners()

    await nftContract.connect(addr1).mint()
    await nftContract.connect(addr2).mint()
  })

  describe('Listing an NFT', function () {
    it("Should fail if the sender isn't the token holder", async () => {
      const [, addr1] = await ethers.getSigners()

      await expect(
        nftMarket!.connect(addr1).listNFT(
          nftContract!.address,
          1,
          Math.round(Date.now() / 1000) + 60 * 60 * 48, // two day from now
          {
            paymentToken: dummyCoin!.address,
            pricePerDay: ethers.utils.parseEther('0.001'),
          },
          {
            collateralToken: dummyCoin!.address,
            collateralAmount: ethers.utils.parseEther('0.01'),
          }
        )
      ).to.be.reverted
    })

    it('Should be able to list an NFT', async () => {
      const [, addr1] = await ethers.getSigners()

      // Approve the transfer first
      await nftContract!.connect(addr1).approve(nftMarket!.address, 0)

      const tx = await nftMarket!.connect(addr1).listNFT(
        nftContract!.address,
        0,
        Math.round(Date.now() / 1000) + 60 * 60 * 48, // a day from now
        {
          paymentToken: dummyCoin!.address,
          pricePerDay: ethers.utils.parseEther('0.001'),
        },
        {
          collateralToken: dummyCoin!.address,
          collateralAmount: ethers.utils.parseEther('0.01'),
        }
      )

      await expect(tx).to.emit(nftMarket!, 'NFTListed')
      expect(await nftContract!.balanceOf(nftMarket!.address)).to.equal(1)
    })
  })

  describe('Renting an NFT', function () {
    let listing: nftListing | undefined
    before(async () => {
      listing = await nftMarket!.getListing(nftContract!.address, 0)
    })
    describe('Failing scenario', function () {
      it('Should fail if the requested rental days is 0', async () => {
        await expect(
          nftMarket!.rent(nftContract!.address, 0, 0, listing!)
        ).to.be.revertedWith('The rental period must be greater than 0 days')
      })

      it('Should fail if the requested rental expiry is greater than the allowed end time', async () => {
        await expect(
          nftMarket!.rent(nftContract!.address, 0, 3, listing!)
        ).to.be.revertedWith('Rental timeframe too long.')
      })

      it('Should fail if the renter does not have sufficient payment funds', async () => {
        const [, addr1] = await ethers.getSigners()
        await expect(
          nftMarket!.connect(addr1).rent(nftContract!.address, 0, 1, listing!)
        ).to.be.revertedWith('Insufficient payment funds')
      })

      it('Should fail if the renter does not have sufficient collateral funds', async () => {
        const [, , addr2] = await ethers.getSigners()
        await dummyCoin!.transfer(
          addr2.address,
          ethers.utils.parseEther('0.005')
        )

        await expect(
          nftMarket!.connect(addr2).rent(nftContract!.address, 0, 1, listing!)
        ).to.be.revertedWith('Insufficient collateral funds')
      })

      it('Should fail if both payment and collateral are the same and the renter does not have enough funds', async () => {
        const [, , addr2] = await ethers.getSigners()
        await dummyCoin!.transfer(
          addr2.address,
          ethers.utils.parseEther('0.005')
        )

        await expect(
          nftMarket!.connect(addr2).rent(nftContract!.address, 0, 1, listing!)
        ).to.be.revertedWith('Insufficient combined funds')
      })

      it('Should fail if the renter has not approved the payment or collateral', async () => {
        const [, , addr2] = await ethers.getSigners()
        await dummyCoin!.transfer(
          addr2.address,
          ethers.utils.parseEther('0.005')
        )

        await expect(
          nftMarket!.connect(addr2).rent(nftContract!.address, 0, 1, listing!)
        ).to.be.reverted
      })
    })

    describe('Passing scenario', function () {
      let tx: TransactionResponse | undefined
      let listing: nftListing | undefined

      before(async () => {
        const [, addr1, addr2] = await ethers.getSigners()
        listing = {
          lender: addr1!.address,
          maximumEndTime: BigNumber.from(100).mul(86400),
          createTime: BigNumber.from(1),
          rental: {
            renter: '',
            expiryTime: BigNumber.from(0),
          },
          payment: {
            paymentToken: dummyCoin!.address,
            pricePerDay: BigNumber.from(10),
          },
          collateral: {
            collateralToken: dummyCoin!.address,
            collateralAmount: BigNumber.from(10000),
          }
        }
        // Approve the escrow to transfer the collateral and payment cost
        await dummyCoin!
          .connect(addr2)
          .approve(nftMarket!.address, ethers.utils.parseEther('0.011'))
        tx = await nftMarket!.connect(addr2).rent(nftContract!.address, 0, 1, listing!)
      })

      it('Should increase the collateral escrow', async () => {
        expect(await dummyCoin!.balanceOf(nftMarket!.address)).to.equal(
          ethers.utils.parseEther('0.01').toString()
        )
      })

      it('Should increase the lenders balance', async () => {
        const [, addr1] = await ethers.getSigners()
        expect(await dummyCoin!.balanceOf(addr1.address)).to.equal(
          ethers.utils.parseEther('0.001')
        )
      })

      it('Should transfer the rented NFT to the renter', async () => {
        const [, , addr2] = await ethers.getSigners()
        expect(await nftContract!.ownerOf(0)).to.equal(addr2.address)
      })

      it('Should emit the NFTRented event', async () => {
        const [, , addr2] = await ethers.getSigners()

        await expect(tx).to.emit(nftMarket!, 'NFTRented')
      })

      it('Should update the listing with the rental info', async () => {
        const [, , addr2] = await ethers.getSigners()
        const listing = await nftMarket!.getListing(nftContract!.address, 0)

        expect(listing.rental.renter).to.equal(addr2.address)
      })
    })
  })
})
