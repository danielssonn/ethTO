import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const baseUri =
    'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, ethers } = hre
    const { deploy } = deployments

    const { deployer } = await getNamedAccounts()

    const factory = await ethers.getContractFactory('NFTDummy')
    const contract = await factory.deploy('NFTDummy', baseUri, {
        from: deployer,
        log: true,
    })
    await contract.deployed()
}

export default func
func.tags = ['NFTDummy']
