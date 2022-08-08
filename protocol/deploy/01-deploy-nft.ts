import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const baseUri =
    'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre
    const { deploy } = deployments

    const { deployer } = await getNamedAccounts()

    await deploy('NFTDummy', baseUri, {
        from: deployer,
        log: true,
    })
}

export default func
func.tags = ['NFTDummy']
