import { Network } from '@axelar-network/axelar-local-dev/src/Network'
import { createNetwork } from '@axelar-network/axelar-local-dev'
import { BigNumber, Contract, Wallet } from 'ethers'
import { ethers } from 'hardhat'
import { expect } from 'chai'

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

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
        sourceChain = await createNetwork({ name: 'Avalanche' })

        sourceDeployer = sourceChain.userWallets[0]
        destinationDeployer = destinationChain.userWallets[0]

        sender = sourceChain.userWallets[1]
        receiver = destinationChain.userWallets[1]

        const NFTContractSource = await ethers.getContractFactory(
            'NFTDummy',
            sourceDeployer
        )

        // deploy the contract on source
        nftContractSource = await NFTContractSource.deploy(
            'https://www.example.com',
            'Avalanche'
        )
        await nftContractSource!.deployed()
        await (
            await nftContractSource!.init(
                sourceChain!.name,
                sourceChain!.gateway.address,
                sourceChain!.gasReceiver.address
            )
        ).wait()
        await (await nftContractSource!.connect(sender!).mint()).wait()

        // deploy the contract on destination
        const NFTContractDestination = await ethers.getContractFactory(
            'NFTDummy',
            destinationDeployer
        )
        nftContractDestination = await NFTContractDestination.deploy(
            'https://www.example.com',
            'Avalanche'
        )
        await nftContractDestination!.deployed()
        await (
            await nftContractDestination!.init(
                destinationChain!.name,
                destinationChain!.gateway.address,
                destinationChain!.gasReceiver.address
            )
        ).wait()

        await (
            await nftContractSource!
                .connect(sender!)
                .approve(nftContractSource!.address, tokenId)
        ).wait()
    })
    describe('Verify setup preconditions', function () {
        it('Should mint the nft to sender', async function () {
            const senderAddr = await nftContractSource!.ownerOf(tokenId)
            expect(senderAddr).to.be.equal(sender!.address)
        })

        it('Should give the sender some native tokens', async function () {
            const balance = await sender!.getBalance()
            expect(balance).to.be.above(0)
        })
        it('Should have the nft contract be approved', async function () {
            const approved = await nftContractSource!.getApproved(tokenId)
            expect(approved).to.be.equal(nftContractSource!.address)
        })
        it('Should have the nft owner be sender', async function () {
            const owner = await nftContractSource!.ownerOf(tokenId)
            expect(owner).to.be.equal(sender!.address)
        })
    })
    describe('Verify send conditions', function () {
        before(async function () {
            const gatewayGasLimit = BigNumber.from(5e6)
            const gatewayGasPrice = BigNumber.from(10)
            const gatewayGasCost = gatewayGasPrice.mul(gatewayGasLimit)

            const sendTx = await nftContractSource!
                .connect(sender!)
                .sendNFT(tokenId, destinationChain!.name, receiver!.address, {
                    value: gatewayGasCost,
                })

            await expect(sendTx).to.emit(nftContractSource!, 'NFTSent')

            let executed = false
            while (!executed) {
                executed = await nftContractDestination!.executed()
                // try {
                //     executed = await nftContractDestination!.executed()
                // } catch (e) {
                //     console.log(
                //         '--------- protocol not completed ---------------'
                //     )
                // }
                delay(2000)
            }
            console.log('---------------- done ------------------')
        })
        it('Should burn the nft on source chain', async function () {
            await expect(nftContractSource!.ownerOf(tokenId)).to.be.reverted
        })
    })
})
