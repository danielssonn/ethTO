import { networks } from '@axelar-network/axelar-local-dev'
import { ethers } from 'hardhat'

async function deployNFTMarket() {
    const deployments = networks.map( async (network) => {
        const Marketfactory = await ethers.getContractFactory('AxelarMarketExecutor', networks[0].userWallets[0])
        const nft = await Marketfactory.deploy(network.gateway.address, network.gasReceiver.address, network.name)
        await nft.deployed()
    })

    await Promise.all(deployments)
    console.log('Contracts deployed')
}

async function deployNFT() {
    const deployments = networks.map( async (network) => {
        const NFTfactory = await ethers.getContractFactory('AxelarMarketExecutor', networks[0].userWallets[0])
        const nft = await NFTfactory.deploy('testURI')
        await nft.deployed()

        await
    })

    await Promise.all(deployments)
    console.log('Contracts deployed')

}

deployNFTMarket()
