import { createAndExport } from '@axelar-network/axelar-local-dev'
import { ethers } from 'hardhat'

async function main() {
    await createAndExport({
        chains: ['Polygon', 'Avalanche'],
        async callback(network, info) {
            console.log(info)
            const deployerWallet = new ethers.Wallet(
                network.userWallets[0]._signingKey().privateKey,
                network.provider
            )

            const wmatic = await network.deployToken(
                'WMATIC',
                'aMATIC',
                18,
                BigInt(100_000_000e18)
            )

            console.log('WMATIC', wmatic.address)

            const Market = await ethers.getContractFactory(
                'AxelarMarketExecutor',
                deployerWallet
            )
            const market = await Market.deploy(
                info.gateway,
                info.gasReceiver,
                info.name
            )
            await market.deployed()

            console.log('Market', market.address)

            const NFT = await ethers.getContractFactory(
                'NFTDummy',
                deployerWallet
            )
            const nft = await NFT.deploy(
                'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs'
            )
            await nft.deployed()

            console.log('NFTDummy', nft.address)

            if (network.name === 'Polygon') {
                // Mint some NFTs
                await nft.connect(deployerWallet).mint()
                await nft.connect(deployerWallet).approve(market.address, 0)

                await nft.connect(deployerWallet).mint()
                await nft.connect(deployerWallet).approve(market.address, 1)

                await nft.connect(deployerWallet).mint()
                await nft.connect(deployerWallet).approve(market.address, 2)

                await nft.connect(deployerWallet).mint()
                await nft.connect(deployerWallet).approve(market.address, 3)

                // List some NFTs
                const tx1 = await market.connect(deployerWallet).listNFT(
                    nft.address,
                    0,
                    Math.round(Date.now() / 1000) + 60 * 60 * 24 * 5,
                    {
                        paymentToken: wmatic.address,
                        pricePerDay: ethers.utils.parseEther('0.01'),
                    },
                    {
                        collateralToken: wmatic.address,
                        collateralAmount: ethers.utils.parseEther('2'),
                    }
                )

                await tx1.wait()

                const tx2 = await market.connect(deployerWallet).listNFT(
                    nft.address,
                    1,
                    Math.round(Date.now() / 1000) + 60 * 60 * 24 * 5,
                    {
                        paymentToken: wmatic.address,
                        pricePerDay: ethers.utils.parseEther('0.01'),
                    },
                    {
                        collateralToken: wmatic.address,
                        collateralAmount: ethers.utils.parseEther('2'),
                    }
                )

                await tx2.wait()

                const tx3 = await market.connect(deployerWallet).listNFT(
                    nft.address,
                    2,
                    Math.round(Date.now() / 1000) + 60 * 60 * 24 * 5,
                    {
                        paymentToken: wmatic.address,
                        pricePerDay: ethers.utils.parseEther('0.01'),
                    },
                    {
                        collateralToken: wmatic.address,
                        collateralAmount: ethers.utils.parseEther('2'),
                    }
                )

                await tx3.wait()

                const tx4 = await market.connect(deployerWallet).listNFT(
                    nft.address,
                    3,
                    Math.round(Date.now() / 1000) + 60 * 60 * 24 * 5,
                    {
                        paymentToken: wmatic.address,
                        pricePerDay: ethers.utils.parseEther('0.01'),
                    },
                    {
                        collateralToken: wmatic.address,
                        collateralAmount: ethers.utils.parseEther('2'),
                    }
                )

                await tx4.wait()
            }

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
