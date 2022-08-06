import { networks } from '@axelar-network/axelar-local-dev'
import { BigNumber } from 'ethers'
import { setupNetworks } from '../scripts/deploy'
import { Payment, Collateral, nftListing } from './types'

export async function rent(
  lenderChainName: string,
  renterChainName: string, // source chain
  nftAddress: string,
  tokenId: BigNumber,
  daysToRent: number,
  listing: nftListing
) {
  // chain + axelarMarketExecutor on chain
  const axelarDeployments = await setupNetworks()
  const renterDeployment = axelarDeployments.find(
    (deployment) => deployment.chain.name === renterChainName
  )
  const lenderDeployment = axelarDeployments.find(
    (deployment) => deployment.chain.name === lenderChainName
  )
  if (renterDeployment === undefined || lenderDeployment === undefined) {
    throw new Error('Invalid Chain name provided')
  } else {
    await swingSwap()

    const renterMarketPlace = deployment.contract
    const rentTx = await renterMarketPlace.executeRent(
      lenderChainName,
      nftAddress,
      tokenId,
      daysToRent,
      listing
    )

    await rentTx.wait()
  }
}

// stub: to Expand
async function swingSwap() {}
