import { createAndExport } from '@axelar-network/axelar-local-dev'
import { ethers } from 'hardhat'

async function main() {
    await createAndExport({
        chains: ['Polygon', 'Avalanche'],
        async callback(network, info) {
            console.log(info)

            const weth = await network.deployToken(
                'WETH',
                'aWETH',
                18,
                BigInt(100_000_000e18)
            )

            console.log('WETH', weth.address)

            const Sender = await ethers.getContractFactory('SendAckSender')
            const sender = await Sender.deploy(
                info.gateway,
                info.gasReceiver,
                info.name
            )
            await sender.deployed()

            console.log('SendAckSender', sender.address)

            const Receiver = await ethers.getContractFactory('SendAckReceiver')
            const receiver = await Receiver.deploy(info.gateway)
            await receiver.deployed()

            console.log('SendAckReceiver', receiver.address)

            const NFT = await ethers.getContractFactory('NFTDummy')
            const nft = await NFT.deploy(
                'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs'
            )
            await nft.deployed()

            console.log('NFTDummy', nft.address)

            // Mint some NFTs
            ;[0, 1, 2, 3].forEach(
                async () => await nft.connect(network.userWallets[0]).mint()
            )

            // List some NFTs
            ;[0, 1, 2, 3].forEach(async (tokenId) => {
                const tx = await sender.connect(network.userWallets[0]).listNFT(
                    nft.address,
                    tokenId,
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

                await tx.wait()
                const listing = await sender.getListing(nft.address, tokenId)
                console.log(listing)
            })

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
