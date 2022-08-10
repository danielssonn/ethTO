import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const baseUri =
    'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs'

const AXELAR: { [key: string]: any } = {
    mumbai: {
        name: 'Polygon',
        gateway: '0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B',
        gas: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6',
    },
    fuji: {
        name: 'Avalanche',
        gateway: '0xC249632c2D40b9001FE907806902f63038B737Ab',
        gas: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6',
    },
    polygon: {
        name: 'Polygon',
        gateway: '0x6f015F16De9fC8791b234eF68D486d2bF203FBA8',
        gas: '0xc8E0b617c388c7E800a7643adDD01218E14a727a',
    },
    avalanche: {
        name: 'Avalanche',
        gateway: '0x5029C0EFf6C34351a0CEc334542cDb22c7928f78',
        gas: '0xB53C693544363912D2A034f70D9d98808D5E192a',
    },
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { name } = hre.network

    const Linker = await hre.ethers.getContractFactory('NftLinker')
    const linker = await Linker.deploy()

    console.log('Linker', linker.address)

    const initTx = await linker.init(
        AXELAR[name].name,
        AXELAR[name].gateway,
        AXELAR[name].gas
    )

    await initTx.wait()

    if (name === 'mumbai' || name === 'polygon') {
        const NFT = await hre.ethers.getContractFactory('NFTDummy')
        const nft = await NFT.deploy(baseUri)
        await nft.deployed()
        console.log('NFT', nft.address)

        const mintTx = await nft.mint()
        await mintTx.wait()
    }
}

export default func
func.tags = ['NFTDummy']
