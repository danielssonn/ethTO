import { Network } from '@axelar-network/axelar-local-dev/src/Network'
import { createNetwork } from '@axelar-network/axelar-local-dev'
import { BigNumber, Contract, Wallet } from 'ethers'
import { ethers } from 'hardhat'
import { expect } from 'chai'

describe('Testing setup preconditions', function () {
    let destinationChain: Network | undefined
    let sourceChain: Network | undefined
    let nftContractSource: Contract | undefined
    let nftContractDestination: Contract | undefined
    let sourceDeployer: Wallet | undefined
    let destinationDeployer: Wallet | undefined
    let sender: Wallet | undefined
    let receiver: Wallet | undefined

    const senderBalance = BigNumber.from(100)
    const tokenId = BigNumber.from(0)

    before(async function () {
        destinationChain = await createNetwork({ name: 'Polygon' })
        sourceChain = await createNetwork({ name: 'Moonbeam' })

        sourceDeployer = sourceChain.userWallets[0]
        destinationDeployer = destinationChain.userWallets[0]

        sender = sourceChain.userWallets[1]

        sourceChain.giveToken(
            sender!.address,
            'wGLMR',
            senderBalance.toBigInt()
        )

        receiver = destinationChain.userWallets[1]

        const NFTContractSource = await ethers.getContractFactory(
            'NFTDummy',
            sourceDeployer
        )

        // deploy the contract on source
        nftContractSource = await NFTContractSource.deploy('https://www.example.com')
        await nftContractSource.deployed()
        await (await nftContractSource!.connect(sender!).mint()).wait()

        // deploy the contract on destination
        const NFTContractDestination = await ethers.getContractFactory(
            'NFTDummy',
            destinationDeployer
        )
        nftContractDestination = await NFTContractDestination.deploy('https://www.example.com')
        await nftContractDestination.deployed()

        await (await nftContractSource!
            .connect(sender!)
            .approve(nftContractSource!.address, tokenId)).wait()

        const tx = await nftContractSource!.connect(sender!).sendNFT(
                tokenId,
                destinationChain!.name,
                receiver!.address,
            )
    })
    describe('Verify setup preconditions', function () {
        it('Should mint the nft to sender', async function () {
            const senderAddr = await nftContractSource!.ownerOf(tokenId)
            expect(senderAddr).to.be.equal(sender!.address)
        })

        it('Should give the sender some native tokens', async function() {
            const balance = await sender!.getBalance()
            expect(balance).to.be.above(0)
        })
        it('Should have the nft contract be approved', async function() {
            const approved = await nftContractSource!.getApproved(tokenId)
            expect(approved).to.be.equal(nftContractSource!.address)
        })
        it('Should have the nft owner be sender', async function() {
            const owner = await nftContractSource!.ownerOf(tokenId)
            expect(owner).to.be.equal(sender!.address)
        })
    })
    describe('Verify send conditions', function () {
        before(async function () {
            const gatewayGasAmount = BigNumber.from(1e9)
            const gatewayGasPrice = BigNumber.from(1)
            const gatewayGasCost = gatewayGasPrice.mul(gatewayGasAmount)

            console.log('---------------- nft about to be sent ---------------')
            const tx = await nftContractSource!.connect(sender!).sendNFT(
                tokenId,
                destinationChain!.name,
                receiver!.address,
                { value: gatewayGasCost }
            )
            //await expect(tx).to.emit(nftContract!, 'NFTSent')
        })
        it('Sholud transfer nft to the dest chain', async function () {})
    })
})
