import { createNetwork } from '@axelar-network/axelar-local-dev'
import { deployMarketPlace } from './utils'
import { createNetwork } from '@axelar-network/axelar-local-dev'

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
