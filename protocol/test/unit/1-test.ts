import { Contract } from '@ethersproject/contracts'
import { TransactionResponse } from '@ethersproject/abstract-provider'
import { expect } from 'chai'
import { ethers } from 'hardhat'

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

  describe('Renting an NFT on alternative chain', function () {
    describe('Failing scenario', function () {
      it('Should fail if the listing does not exist', async () => {
        await expect(
          nftMarket!.rentOnAlternativeChain(nftContract!.address, 1, 1)
        ).to.be.revertedWith('This listing does not exist')
      })

      it('Should fail if the requested rental days is 0', async () => {
        await expect(
          nftMarket!.rentOnAlternativeChain(nftContract!.address, 0, 0)
        ).to.be.revertedWith('The rental period must be greater than 0 days')
      })

      it('Should fail if the requested rental expiry is greater than the allowed end time', async () => {
        await expect(
          nftMarket!.rentOnAlternativeChain(nftContract!.address, 0, 3)
        ).to.be.revertedWith('Rental timeframe too long.')
      })

      it('Should fail if the renter does not have sufficient payment funds', async () => {
        const [, addr1] = await ethers.getSigners()
        await expect(
          nftMarket!.connect(addr1).rentOnAlternativeChain(nftContract!.address, 0, 1)
        ).to.be.revertedWith('Insufficient payment funds')
      })

      it('Should fail if the renter does not have sufficient collateral funds', async () => {
        const [, , addr2] = await ethers.getSigners()
        await dummyCoin!.transfer(
          addr2.address,
          ethers.utils.parseEther('0.005')
        )

        await expect(
          nftMarket!.connect(addr2).rentOnAlternativeChain(nftContract!.address, 0, 1)
        ).to.be.revertedWith('Insufficient collateral funds')
      })

      it('Should fail if both payment and collateral are the same and the renter does not have enough funds', async () => {
        const [, , addr2] = await ethers.getSigners()
        await dummyCoin!.transfer(
          addr2.address,
          ethers.utils.parseEther('0.005')
        )

        await expect(
          nftMarket!.connect(addr2).rentOnAlternativeChain(nftContract!.address, 0, 1)
        ).to.be.revertedWith('Insufficient combined funds')
      })

      it('Should fail if the renter has not approved the payment or collateral', async () => {
        const [, , addr2] = await ethers.getSigners()
        await dummyCoin!.transfer(
          addr2.address,
          ethers.utils.parseEther('0.005')
        )

        await expect(
          nftMarket!.connect(addr2).rentOnAlternativeChain(nftContract!.address, 0, 1)
        ).to.be.reverted
      })
    })

    describe('Passing scenario', function () {
      let tx: TransactionResponse | undefined

      before(async () => {
        const [, addr1, addr2] = await ethers.getSigners()
        // Approve the escrow to transfer the collateral and payment cost
        await dummyCoin!
          .connect(addr2)
          .approve(nftMarket!.address, ethers.utils.parseEther('0.011'))
        tx = await nftMarket!.connect(addr2).rentOnAlternativeChain(nftContract!.address, 0, 1)
      })

      it('Should increase the collateral escrow', async () => {
        expect(await dummyCoin!.balanceOf(nftMarket!.address)).to.equal(
          ethers.utils.parseEther('0.01').toString()
        )
      })

      it('Should emit the NFTRentedOnAlternativeChain event', async () => {
        const [, , addr2] = await ethers.getSigners()

        await expect(tx).to.emit(nftMarket!, 'NFTRentedOnAlternativeChain')
      })

      it('Should update the listing with the rental info', async () => {
        const [, , addr2] = await ethers.getSigners()
        const listing = await nftMarket!.getListing(nftContract!.address, 0)

        expect(listing.rental.renter).to.equal(addr2.address)
      })
    })
  })
      describe('Renting an NFT on Native Chain', function () {
      let tx: TransactionResponse | undefined

      before(async () => {
        const [, addr1, addr2] = await ethers.getSigners()
        // Approve the escrow to transfer the collateral and payment cost
        await dummyCoin!
          .connect(addr2)
          .approve(nftMarket!.address, ethers.utils.parseEther('0.011'))
        tx = await nftMarket!.connect(addr2).rentOnNativeChain(nftContract!.address, 0, 1)
      })

      it('Should transfer the rented NFT to the renter', async () => {
        const [, , addr2] = await ethers.getSigners()
        expect(await nftContract!.ownerOf(0)).to.equal(addr2.address)
      })

      it('Should update the listing with the rental info', async () => {
        const [, , addr2] = await ethers.getSigners()
        const listing = await nftMarket!.getListing(nftContract!.address, 0)

        expect(listing.rental.renter).to.equal(addr2.address)
      })

      it('Should emit the NFTRentedOnNativeChain event', async () => {
        const [, , addr2] = await ethers.getSigners()

        await expect(tx).to.emit(nftMarket!, 'NFTRentedOnNativeChain')
      })

    })
})
