import { ethers } from 'hardhat'
import axios from 'axios'

import linkerConf from '../artifacts/contracts/NftLinker.sol/NftLinker.json'
import nftConf from '../artifacts/contracts/NFTDummy.sol/NFTDummy.json'

async function getGasPrice(
    env: string,
    source: { [key: string]: any },
    destination: { [key: string]: any },
    tokenAddress: string
): Promise<number> {
    if (env == 'local') return 1
    if (env != 'testnet') throw Error('env needs to be "local" or "testnet".')
    const api_url = 'https://devnet.api.gmp.axelarscan.io'

    const requester = axios.create({ baseURL: api_url })
    const params: { [key: string]: any } = {
        method: 'getGasPrice',
        destinationChain: destination.name,
        sourceChain: source.name,
    }

    // set gas token address to params
    if (tokenAddress != ethers.constants.AddressZero) {
        params.sourceTokenAddress = tokenAddress
    } else {
        params.sourceTokenSymbol = source.tokenSymbol
    }
    // send request
    const response = await requester.get('/', { params }).catch((error) => {
        return { data: { error } }
    })
    const result = response.data.result
    const dest = result.destination_native_token
    const destPrice = 1e18 * dest.gas_price * dest.token_price.usd
    return destPrice / result.source_token.token_price.usd
}

async function main() {
    const [deployer] = await ethers.getSigners()

    const nft = new ethers.Contract(
        '0x25f8A11591b84Aa11B7514Ab0822fCb6F7d13656',
        nftConf.abi,
        deployer
    )

    const approveTx = await nft.approve(
        '0x7293Ced8471fEdC2ACa98776119713495Bf316fa',
        0
    )
    await approveTx.wait()

    const contract = new ethers.Contract(
        '0x7293Ced8471fEdC2ACa98776119713495Bf316fa',
        linkerConf.abi,
        deployer
    )

    const gasLimit = 1e6
    const gasPrice = await getGasPrice(
        'testnet',
        {
            name: 'Polygon',
            tokenSymbol: 'MATIC',
        },
        {
            name: 'Avalanche',
            tokenSymbol: 'AVAX',
        },
        ethers.constants.AddressZero
    )

    console.log(gasPrice)
    console.log(gasLimit * gasPrice)

    const resp = await contract.sendNFT(
        '0x25f8A11591b84Aa11B7514Ab0822fCb6F7d13656',
        0,
        'Avalanche',
        '0x92d52b3A52405ed2274de54b68344b5C65194EA6',
        { value: BigInt(gasLimit * gasPrice) }
    )
    const receipt = await resp.wait()
    console.log(receipt)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
