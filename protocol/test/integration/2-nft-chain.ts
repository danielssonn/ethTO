import { Network } from '@axelar-network/axelar-local-dev/src/Network'
import { createNetwork } from '@axelar-network/axelar-local-dev'
import { Contract, Wallet } from 'ethers'
import { ethers } from 'hardhat'

describe('Testing the cross chain nft functionality', function() {
    let polygon: Network | undefined
    let moonbeam: Network | undefined
    let nftContract: Contract | undefined
    let polygonDeployer: Wallet | undefined
    let moonbeamDeployer: Wallet | undefined
    let lender: Wallet | undefined
    let renter: Wallet | undefined

    before(async function() {
        polygon = await createNetwork({ name: 'Polygon' })
        moonbeam = await createNetwork({ name: 'Moonbeam' })

        moonbeamDeployer = moonbeam.userWallets[0]

        const NFTContract = await ethers.getContractFactory('NFTDummy', moonbeamDeployer)
    })

})
