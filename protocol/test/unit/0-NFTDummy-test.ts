import { Contract } from '@ethersproject/contracts'
import { expect } from 'chai'
import { ethers } from 'hardhat'

const nftBaseTokenURI = 'http://example.com'

describe('NFTDummy', function () {
    let nftContract: Contract | undefined

    before(async () => {
        const NFTContract = await ethers.getContractFactory('NFTDummy')
        nftContract = await NFTContract.deploy(nftBaseTokenURI)
        await nftContract.deployed()
    })

    it('Should be able to mint an NFT', async () => {
        const [deployer] = await ethers.getSigners()
        await nftContract!.mint()

        expect(await nftContract!.balanceOf(deployer.address)).to.equal(1)
    })

    it('Should return a valid tokenURI', async () => {
        const uri = await nftContract!.tokenURI(0)
        const metadata = JSON.parse(
            atob(uri.replace('data:application/json;base64,', ''))
        )
        expect(metadata.image).to.equal(`${nftBaseTokenURI}/0.png`)
    })
})
