import { Payment, Collateral } from './types'
import { BigNumber, Contract } from 'ethers'
import { setupNetworks } from './deploy'
import { Network } from '@axelar-network/axelar-local-dev/dist/Network'

export async function listNFT(
  lender: string,
  nftAddress: string,
  tokenId: BigNumber,
  maximumEndTime: BigNumber,
  payment: Payment,
  collateral: Collateral,
  chain: Network
) {
  const lenderMarketPlace = deployment!.contract
  const listTx = await lenderMarketPlace
    .connect(lender)
    .listNFT(nftAddress, tokenId, maximumEndTime, payment, collateral)
  await listTx.wait(1)
}
