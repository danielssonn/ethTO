import { createAndExport } from '@axelar-network/axelar-local-dev'
import { ethers } from 'hardhat'

import receiverJson from '../artifacts/contracts/SendAckReceiver.sol/SendAckReceiver.json'
import senderJson from '../artifacts/contracts/SendAckSender.sol/SendAckSender.json'

async function main() {
    await createAndExport({
        chains: ['Polygon', 'Avalanche'],
        async callback(network, info) {
            console.log(info)
            const deployerWallet = new ethers.Wallet(
                network.userWallets[0]._signingKey().privateKey,
                network.provider
            )

            const weth = await network.deployToken(
                'WETH',
                'aWETH',
                18,
                BigInt(100_000_000e18)
            )

            console.log('WETH', weth.address)

            const Sender = new ethers.ContractFactory(
                senderJson.abi,
                senderJson.bytecode,
                deployerWallet
            )
            const sender = await Sender.deploy(
                info.gateway,
                info.gasReceiver,
                info.name
            )
            await sender.deployed()

            console.log('SendAckSender', sender.address)

            const Receiver = new ethers.ContractFactory(
                receiverJson.abi,
                receiverJson.bytecode,
                deployerWallet
            )
            const receiver = await Receiver.deploy(info.gateway)
            await receiver.deployed()

            console.log('SendAckReceiver', receiver.address)

            const NFT = await ethers.getContractFactory(
                'NFTDummy',
                deployerWallet
            )
            const nft = await NFT.deploy(
                'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs'
            )
            await nft.deployed()

            console.log('NFTDummy', nft.address)

            // Mint some NFTs
            await nft.connect(deployerWallet).mint()
            await nft.connect(deployerWallet).approve(sender.address, 0)

            await nft.connect(deployerWallet).mint()
            await nft.connect(deployerWallet).approve(sender.address, 1)

            await nft.connect(deployerWallet).mint()
            await nft.connect(deployerWallet).approve(sender.address, 2)

            await nft.connect(deployerWallet).mint()
            await nft.connect(deployerWallet).approve(sender.address, 3)

            // List some NFTs
            const tx1 = await sender.connect(deployerWallet).listNFT(
                nft.address,
                0,
                Math.round(Date.now() / 1000) + 60 * 60 * 24 * 5,
                {
                    paymentToken: weth.address,
                    pricePerDay: ethers.utils.parseEther('0.01'),
                },
                {
                    collateralToken: weth.address,
                    collateralAmount: ethers.utils.parseEther('2'),
                }
            )

            await tx1.wait()

            const tx2 = await sender.connect(deployerWallet).listNFT(
                nft.address,
                1,
                Math.round(Date.now() / 1000) + 60 * 60 * 24 * 5,
                {
                    paymentToken: weth.address,
                    pricePerDay: ethers.utils.parseEther('0.01'),
                },
                {
                    collateralToken: weth.address,
                    collateralAmount: ethers.utils.parseEther('2'),
                }
            )

            await tx2.wait()

            const tx3 = await sender.connect(deployerWallet).listNFT(
                nft.address,
                2,
                Math.round(Date.now() / 1000) + 60 * 60 * 24 * 5,
                {
                    paymentToken: weth.address,
                    pricePerDay: ethers.utils.parseEther('0.01'),
                },
                {
                    collateralToken: weth.address,
                    collateralAmount: ethers.utils.parseEther('2'),
                }
            )

            await tx3.wait()

            const tx4 = await sender.connect(deployerWallet).listNFT(
                nft.address,
                3,
                Math.round(Date.now() / 1000) + 60 * 60 * 24 * 5,
                {
                    paymentToken: weth.address,
                    pricePerDay: ethers.utils.parseEther('0.01'),
                },
                {
                    collateralToken: weth.address,
                    collateralAmount: ethers.utils.parseEther('2'),
                }
            )

            await tx4.wait()

            const wallets = network.userWallets.map(async (wallet) => {
                const balance = await wallet.provider.getBalance(wallet.address)
                const keys = wallet._signingKey()
                return {
                    address: wallet.address,
                    balance: ethers.utils.formatEther(balance),
                    privateKey: keys.privateKey,
                }
            })

            Promise.all(wallets).then((accounts) => {
                console.log(accounts)
            })
        },
    })
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
