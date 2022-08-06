import { createNetwork } from '@axelar-network/axelar-local-dev'
import { getContractFactory } from '@nomiclabs/hardhat-ethers/types'
import { ethers } from 'hardhat'
import { BigNumber, Contract, Wallet } from 'ethers'
import { Network } from '@axelar-network/axelar-local-dev/dist/Network'

type Payment = {
  paymentToken: string,
  pricePerDay: BigNumber
}

type Collateral = {
  collateralToken: string,
  collateralAmount: BigNumber
}

async function deployMarketPlace(signer: Wallet): Promise<Contract> {
  const MarketPlace = await ethers.getContractFactory('AxelarMarketExecutor', signer)
  const marketPlace = await MarketPlace.deploy()
  await marketPlace.deployed()
  return marketPlace
}

async function deployNFT(signer: Wallet, tokenURI: string): Promise<Contract> {
  const MarketPlace = await ethers.getContractFactory('NFTDummy', signer)
  const marketPlace = await MarketPlace.deploy({args: [tokenURI]})
  await marketPlace.deployed()
  return marketPlace
}

// Scenario
// - NFT minted by the lender and listed on Moonbeam
// - renter on Polygon
export async function setupScenario() {
  const polygon = await createNetwork({ name: 'Polygon' })
  const matic = await polygon.deployToken('wrapped Matic','wMatic', 6, BigInt(100_000_000e6));
  const polygonDeployer = polygon.userWallets[0]
  await polygon.giveToken(polygonDeployer.address, 'wMatic', BigInt(100e6))
  const polygonMarketPlace = await deployMarketPlace(polygonDeployer)

  const moonriver = await createNetwork({ name: 'Moonriver' })
  const movr = await moonriver.deployToken('wrapped Moonriver','wMOVR', 6, BigInt(100_000_000e6));
  const moonriverDeployer = moonriver.userWallets[0]
  await moonriver.giveToken(moonriverDeployer.address, 'wMOVR', BigInt(100e6))
  const moonriverMarketPlace = await deployMarketPlace(moonriverDeployer)
  const moonriverNFTDummy = await deployNFT(moonriverDeployer, "https://www.example2.com")

  const lender = moonriver.userWallets[1]
  const firstNFTOnMoonriver = await(await moonriverNFTDummy.connect(lender).mint()).wait(1)

  const renter = polygon.userWallets[1]
  await polygon.giveToken(renter.address, 'wMATIC', BigInt(100e6))

  const  approveTx = await moonriverNFTDummy.connect(lender).approve(moonriverMarketPlace.address, 0)

  const listTx = await moonriverMarketPlace.connect(lender).listNFT(
    moonriverNFTDummy.address,
    0,
    Math.round(Date.now() / 1000) + 60 * 60 * 48,
    {
      paymentToken: matic.address,
      pricePerDay: ethers.utils.parseEther('10.0'),
    },
    {
      collateralToken: matic.address,
      collateralAmount: ethers.utils.parseEther('100.0'),
    }
  )
  await listTx.wait(1)
}

setupScenario()
