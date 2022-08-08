import { createNetwork } from '@axelar-network/axelar-local-dev'
import { Network } from '@axelar-network/axelar-local-dev/src/Network'
import { getContractFactory } from '@nomiclabs/hardhat-ethers/types'
import assert from 'assert'
import { expect } from 'chai'
import { BigNumber, Contract, Wallet } from 'ethers'
import { ethers } from 'hardhat'
import { Payment, Collateral } from '../../scripts/types'

describe('Renting NFT flow verification', function () {
    let polygon: Network | undefined
    let avalanche: Network | undefined
    let avaxPoly: Contract | undefined
    let avaxAva: Contract | undefined
    let sender: Contract | undefined
    let receiver: Contract | undefined
    let nftContract: Contract | undefined
    let lender: Wallet | undefined
    let renter: Wallet | undefined
    let payment: Payment | undefined
    let collateral: Collateral | undefined
    let totalCost: BigNumber
    const renterEndowement = BigInt(100)

    const daysToRent = 2 // 2 days
    const maxmumEndTime =
        BigNumber.from(Math.round(Date.now() / 1000) + 60 * 60 * 24 * 5) // 5 days?
    const totalGas = BigNumber.from(0)

    before(async function () {
        polygon = await createNetwork({ name: 'Polygon' })
        avaxPoly = await polygon.deployToken(
            'avax',
            'wAVAX',
            6,
            BigInt(100_000_000e6)
        )
        renter = polygon.userWallets[1]
        await polygon.giveToken(renter!.address, 'wAVAX', renterEndowement)

        // TODO (Axelar): why I am getting 0 balance
        const testBalance = await avaxPoly!.balanceOf(renter!.address)
        console.log(`balance for renter ${testBalance}`)

        avalanche = await createNetwork({ name: 'Avalanche' })
        lender = avalanche.userWallets[1]
        avaxAva = await avalanche.deployToken(
            'avax',
            'wAVAX',
            6,
            BigInt(100_000_000e6)
        )

        const NFTContract = await ethers.getContractFactory('NFTDummy', lender)
        nftContract = await NFTContract.deploy('https://www.example.com')
        await nftContract.deployed()

        const polygonDeployer = polygon.userWallets[0]
        const Receiver = await ethers.getContractFactory(
            'SendAckReceiver',
            polygonDeployer
        )
        receiver = await Receiver.deploy(avalanche.gateway.address)
        await receiver.deployed()

        const avalancheDeployer = avalanche.userWallets[0]
        const Sender = await ethers.getContractFactory(
            'SendAckSender',
            avalancheDeployer
        )
        sender = await Sender.deploy(
            avalanche.gateway.address,
            avalanche.gasReceiver.address,
            avalanche.name
        )
        await sender.deployed()

        payment = {
            paymentToken: avaxAva!.address,
            pricePerDay: ethers.utils.parseEther('0.001'),
        }
        collateral = {
            collateralToken: avaxAva!.address,
            collateralAmount: ethers.utils.parseEther('0.01'),
        }

        await nftContract.connect(lender).mint()
        await nftContract.connect(lender).approve(sender!.address, 0)

        const listTx = await sender!.connect(lender).listNFT(
            nftContract!.address,
            0,
            maxmumEndTime,
            payment,
            collateral
        )
        await listTx.wait()

        // should simulate chain switch
        const avalancheRenter = renter.connect(avalanche.provider)

        const rentalCost = ethers.utils.parseEther('0.002')
        const collateralCost = ethers.utils.parseEther('0.01')
        totalCost = rentalCost.add(collateralCost)
        avaxPoly!.connect(renter).approve(receiver!.address, totalCost)

        const rentTx = await sender!
            .connect(avalancheRenter)
            .rent(
                nftContract!.address,
                0,
                daysToRent,
                'Avalanche',
                receiver!.address,
                totalGas
            )
        await rentTx.wait()
    })
    it('Should increase lenders balance', async function () {
        const lenderRevenue = await avaxAva!.balanceOf(lender!.address)
        expect(lenderRevenue).to.be.above(BigNumber.from(0))
    })
    it('Should decrease renters balance', async function () {
        const renterBalance = await avaxPoly!.balanceOf(renter!.address)
        const expectedResidual = renterEndowement - totalCost.toBigInt()
        expect(renterBalance).to.be.equal(expectedResidual)
    })
    it('Should mark the NFT as listed', async function () {
        const listing = await sender!.getListing(nftContract!.address, 0)
        expect(listing.rental.renter).to.be.equal(renter!.address)
    })
    it('Should deposit the collateral', async function () {
        const collateralDeposited = await avaxPoly!.balanceOf(receiver!.address)
        expect(collateralDeposited).to.be.equal(collateral)
    })
})
