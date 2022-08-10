import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import '@typechain/hardhat'
import 'hardhat-deploy'
import 'hardhat-abi-exporter'
import './tasks'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

const {
    ALCHEMY_API_KEY_KOVAN,
    ALCHEMY_API_KEY_RINKEBY,
    PRIVATE_KEY,
    ETHERSCAN_API_KEY,
    ALCHEMY_API_KEY_MAINNET,
    ALCHEMY_GOERLI,
    TEST_PK,
} = process.env

const config: HardhatUserConfig = {
    solidity: {
        compilers: [{ version: '0.8.9' }, { version: '0.6.6' }],
    },
    networks: {
        // goerli: {
        //   url: ALCHEMY_GOERLI,
        //   accounts: [`0x${PRIVATE_KEY}`],
        // },
        mumbai: {
            url: 'https://polygon-mumbai.g.alchemy.com/v2/GFNd1Xak4hJmcWhQ0FeaOc6MWyAE80Ee',
            accounts: [`0x${TEST_PK}`],
        },
        fuji: {
            url: 'https://api.avax-test.network/ext/bc/C/rpc',
            gasPrice: 225000000000,
            chainId: 43113,
            accounts: [`0x${TEST_PK}`],
        },
        hardhat: {
            // forking: {
            //   url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY_MAINNET}`,
            // },
            accounts: {
                accountsBalance: '10000000000000000000000000',
            },
        },
        localhost: {
            chainId: 31337,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            // 1: 0,
        },
    },
    etherscan: {
        apiKey: '8NDFF311UEQNMP9VT1WPS9467ZUXEKXSQ3',
    },
    abiExporter: {
        path: './data/abi',
        runOnCompile: true,
        clear: true,
        flat: true,
        spacing: 2,
        format: 'json',
        only: ['NFT*'],
    },
}

export default config
