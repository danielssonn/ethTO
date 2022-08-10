import { createAndExport } from '@axelar-network/axelar-local-dev'
import { ethers } from 'hardhat'

async function createLocal() {
    await createAndExport({
        chains: ['Polygon', 'Moonbeam'],
        async callback(network, info) {
            console.log(info)
            const deployerWallet = new ethers.Wallet(
                network.userWallets[0]._signingKey().privateKey,
                network.provider
            )

            await network.deployToken(
                'usdt',
                'aUSDT',
                6,
                BigInt(100_000_000e6)
            )
        }
    })
}

createLocal()
