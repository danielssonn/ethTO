import { createNetwork } from '@axelar-network/axelar-local-dev'
import { Wallet, Contract } from 'ethers'
import { ethers } from 'hardhat'

async function deployMarketPlace(signer: Wallet): Promise<Contract> {
  const MarketPlace = await ethers.getContractFactory(
    'AxelarMarketExecutor',
    signer
  )
  const marketPlace = await MarketPlace.deploy()
  await marketPlace.deployed()
  return marketPlace
}

// async function deployNFT(signer: Wallet, tokenURI: string): Promise<Contract> {
//   const MarketPlace = await ethers.getContractFactory('NFTDummy', signer)
//   const marketPlace = await MarketPlace.deploy({ args: [tokenURI] })
//   await marketPlace.deployed()
//   return marketPlace
// }

export async function setupNetworks() {
  const polygon = await createNetwork({ name: 'Polygon' })
  const polygonDeployer = polygon.userWallets[0]
  const polygonMarketPlace = await deployMarketPlace(polygonDeployer)

  const moonriver = await createNetwork({ name: 'Moonriver' })
  const moonriverDeployer = moonriver.userWallets[0]
  const moonriverMarketPlace = await deployMarketPlace(moonriverDeployer)

  return [
    {
      chain: polygon,
      contract: polygonMarketPlace,
    },
    {
      chain: moonriver,
      contract: moonriverMarketPlace,
    },
  ]
}
