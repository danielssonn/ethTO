import { Contract } from '@ethersproject/contracts'
import { expect } from 'chai'
import { ethers } from 'hardhat'

const nftBaseTokenURI = 'http://example.com'

describe('NFTMarket', function () {
  let nftMarket: Contract | undefined
  let nftContract: Contract | undefined

  before(async () => {
    const NFTMarket = await ethers.getContractFactory('NFTMarket')
    nftMarket = await NFTMarket.deploy()
    await nftMarket.deployed()

    const NFTContract = await ethers.getContractFactory('NFTDummy')
    nftContract = await NFTContract.deploy(nftBaseTokenURI)
    await nftContract.deployed()

    const [, addr1, addr2] = await ethers.getSigners()

    await nftContract.connect(addr1).mint()
    await nftContract.connect(addr2).mint()
  })

  it("Should fail if the sender isn't the token holder", async () => {
    const [, addr1] = await ethers.getSigners()

    await expect(
      nftMarket!.connect(addr1).listNFT(
        nftContract!.address,
        1,
        60 * 60 * 24, // a day in seconds
        Math.round(Date.now() / 1000) + 60 * 60 * 24, // a day from now
        {
          paymentToken: '0x93567d6b6553bde2b652fb7f197a229b93813d3f', //AVAX
          pricePerDay: ethers.utils.parseEther('0.001'),
        },
        {
          collateralToken: '0x93567d6b6553bde2b652fb7f197a229b93813d3f', //AVAX
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
      60 * 60 * 24, // a day in seconds
      Math.round(Date.now() / 1000) + 60 * 60 * 24, // a day from now
      {
        paymentToken: '0x93567d6b6553bde2b652fb7f197a229b93813d3f', //AVAX
        pricePerDay: ethers.utils.parseEther('0.001'),
      },
      {
        collateralToken: '0x93567d6b6553bde2b652fb7f197a229b93813d3f', //AVAX
        collateralAmount: ethers.utils.parseEther('0.01'),
      }
    )

    await expect(tx).to.emit(nftMarket!, 'NFTListed')
    expect(await nftContract!.balanceOf(nftMarket!.address)).to.equal(1)
  })
})
