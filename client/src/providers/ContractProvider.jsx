import { useEffect, useReducer } from 'react'
import { ethers } from 'ethers'

import { ContractContext } from '../context'
import useWeb3 from '../hooks/use-web3'
import { CHAIN_MAP } from '../utils/constants'

import { abi as marketAbi } from '../../../protocol/artifacts/contracts/AxelarMarketExecutor.sol/AxelarMarketExecutor.json'
import { abi as nftAbi } from '../../../protocol/artifacts/contracts/NFTDummy.sol/NFTDummy.json'

async function fetchMetadata(chainId, address, tokenId) {
    const chainConf = CHAIN_MAP.get(chainId)
    const nftContract = new ethers.Contract(
        chainConf.nft,
        nftAbi,
        new ethers.providers.JsonRpcProvider(chainConf.rpc)
    )
    const encodedURI = await nftContract.tokenURI(tokenId.toNumber())
    const metadata = JSON.parse(
        atob(encodedURI.replace('data:application/json;base64,', ''))
    )
    return metadata
}

function formatListings(rawListings, { chainName, chainId, currentAccount }) {
    return Promise.all(
        rawListings.map(
            async ({
                lender,
                nftAddress,
                tokenId,
                payment,
                collateral,
                createTime,
                maximumEndTime,
                rental,
            }) => ({
                nft: await fetchMetadata(chainId, nftAddress, tokenId),
                chainName,
                chainId,
                lender,
                nftAddress,
                tokenId: tokenId.toNumber(),
                paymentToken: payment.paymentToken,
                pricePerDay: Number.parseFloat(
                    ethers.utils.formatEther(payment.pricePerDay)
                ),
                collateralToken: collateral.collateralToken,
                collateralAmount: Number.parseFloat(
                    ethers.utils.formatEther(collateral.collateralAmount)
                ),
                createTime: new Date(createTime.toNumber() * 1000),
                maximumEndTime: new Date(maximumEndTime.toNumber() * 1000),
                isRented:
                    rental.renter !==
                    '0x0000000000000000000000000000000000000000',
                isRentedByCurrentAccount: rental.renter === currentAccount,
                renter: rental.renter,
                rentalExpiry: new Date(rental.expiryTime * 1000),
            })
        )
    )
}

function getContractFor(chainId, signer) {
    const chainConfig = CHAIN_MAP.get(chainId)

    return new ethers.Contract(
        chainConfig.market,
        marketAbi,
        signer || new ethers.providers.JsonRpcProvider(chainConfig.rpc)
    )
}

const reducer = (state, action) => {
    return [...state, ...action.data]
}

const ContractProvider = ({ children }) => {
    const { currentAccount, currentChain, currentSigner } = useWeb3()
    const [listings, dispatch] = useReducer(reducer, [])

    // eslint-disable-next-line
    const fetchListingsFrom = async (chainId) => {
        const chainConfig = CHAIN_MAP.get(chainId)
        // Use the contract for the specified chain
        const contract = getContractFor(chainId)
        try {
            const chainName = chainConfig.name
            const listings = await contract.getAllListings()

            console.log(listings)

            if (listings.length > 0) {
                const data = await formatListings(listings, {
                    chainName,
                    chainId,
                    currentAccount,
                })
                dispatch({ data })
            }
        } catch (e) {
            console.error(`Failed to fetch listings for ${chainConfig.name}`, e)

            const chainName = chainConfig.name
            const listings = [
                [
                    '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
                    { type: 'BigNumber', hex: '0x00' },
                    '0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB',
                    { type: 'BigNumber', hex: '0x62fa2f27' },
                    { type: 'BigNumber', hex: '0x62f397a6' },
                    [
                        '0x0000000000000000000000000000000000000000',
                        { type: 'BigNumber', hex: '0x00' },
                    ],
                    [
                        '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        { type: 'BigNumber', hex: '0x2386f26fc10000' },
                    ],
                    [
                        '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        { type: 'BigNumber', hex: '0x1bc16d674ec80000' },
                    ],
                ],
                [
                    '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
                    { type: 'BigNumber', hex: '0x01' },
                    '0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB',
                    { type: 'BigNumber', hex: '0x62fa2f27' },
                    { type: 'BigNumber', hex: '0x62f397a6' },
                    [
                        '0x0000000000000000000000000000000000000000',
                        { type: 'BigNumber', hex: '0x00' },
                    ],
                    [
                        '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        { type: 'BigNumber', hex: '0x2386f26fc10000' },
                    ],
                    [
                        '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        { type: 'BigNumber', hex: '0x1bc16d674ec80000' },
                    ],
                ],
                [
                    '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
                    { type: 'BigNumber', hex: '0x02' },
                    '0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB',
                    { type: 'BigNumber', hex: '0x62fa2f27' },
                    { type: 'BigNumber', hex: '0x62f397a7' },
                    [
                        '0x0000000000000000000000000000000000000000',
                        { type: 'BigNumber', hex: '0x00' },
                    ],
                    [
                        '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        { type: 'BigNumber', hex: '0x2386f26fc10000' },
                    ],
                    [
                        '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        { type: 'BigNumber', hex: '0x1bc16d674ec80000' },
                    ],
                ],
                [
                    '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
                    { type: 'BigNumber', hex: '0x03' },
                    '0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB',
                    { type: 'BigNumber', hex: '0x62fa2f27' },
                    { type: 'BigNumber', hex: '0x62f397a7' },
                    [
                        '0x0000000000000000000000000000000000000000',
                        { type: 'BigNumber', hex: '0x00' },
                    ],
                    [
                        '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        { type: 'BigNumber', hex: '0x2386f26fc10000' },
                    ],
                    [
                        '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        { type: 'BigNumber', hex: '0x1bc16d674ec80000' },
                    ],
                ],
            ]

            if (listings.length > 0) {
                const data = await formatListings(listings, {
                    chainName,
                    chainId,
                    currentAccount,
                })
                dispatch({ data })
            }
        }
    }

    const executeRent = async (nftAddress, tokenId, daysToRent) => {
        if (currentSigner) {
            // TODO: use the mainnet / testnet chain ID
            const contract = getContractFor(2501, currentSigner)
            try {
                const tx = await contract.rent(nftAddress, tokenId, daysToRent)
                // eslint-disable-next-line
                const listings = await contract.getAllListings()

                console.log(tx)
                return await tx.wait()
            } catch (e) {
                return e.reason || e.transaction
            }
        }
    }

    useEffect(() => {
        if (currentChain && currentSigner) {
            // TODO: fetch listings from all supported chains
            // fetchListingsFrom(currentChain)
            dispatch({
                data: [
                    {
                        nft: {
                            name: 'Dummy #0',
                            description: 'The dumbest NFT around, guaranteed!',
                            image: 'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs/0.png',
                        },
                        chainName: 'Polygon',
                        chainId: 2500,
                        lender: '0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB',
                        nftAddress:
                            '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
                        tokenId: 0,
                        paymentToken:
                            '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        pricePerDay: 0.1,
                        collateralToken:
                            '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        collateralAmount: 2,
                        createTime: new Date('2022-08-10T11:52:53.000Z'),
                        maximumEndTime: new Date('2022-08-15T11:52:53.000Z'),
                        isRented: false,
                        isRentedByCurrentAccount: false,
                        renter: '0x0000000000000000000000000000000000000000',
                        rentalExpiry: new Date('1970-01-01T00:00:00.000Z'),
                    },
                    {
                        nft: {
                            name: 'Dummy #1',
                            description: 'The dumbest NFT around, guaranteed!',
                            image: 'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs/1.png',
                        },
                        chainName: 'Polygon',
                        chainId: 2500,
                        lender: '0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB',
                        nftAddress:
                            '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
                        tokenId: 1,
                        paymentToken:
                            '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        pricePerDay: 0.1,
                        collateralToken:
                            '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        collateralAmount: 2,
                        createTime: new Date('2022-08-10T11:52:53.000Z'),
                        maximumEndTime: new Date('2022-08-15T11:52:53.000Z'),
                        isRented: false,
                        isRentedByCurrentAccount: false,
                        renter: '0x0000000000000000000000000000000000000000',
                        rentalExpiry: new Date('1970-01-01T00:00:00.000Z'),
                    },
                    {
                        nft: {
                            name: 'Dummy #2',
                            description: 'The dumbest NFT around, guaranteed!',
                            image: 'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs/2.png',
                        },
                        chainName: 'Polygon',
                        chainId: 2500,
                        lender: '0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB',
                        nftAddress:
                            '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
                        tokenId: 2,
                        paymentToken:
                            '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        pricePerDay: 0.1,
                        collateralToken:
                            '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        collateralAmount: 2,
                        createTime: new Date('2022-08-10T11:52:53.000Z'),
                        maximumEndTime: new Date('2022-08-15T11:52:53.000Z'),
                        isRented: false,
                        isRentedByCurrentAccount: false,
                        renter: '0x0000000000000000000000000000000000000000',
                        rentalExpiry: new Date('1970-01-01T00:00:00.000Z'),
                    },
                    {
                        nft: {
                            name: 'Dummy #3',
                            description: 'The dumbest NFT around, guaranteed!',
                            image: 'https://arweave.net/9KOV2hEKM5P4xejfLMD5yRo8kQZHPxLH6kzHNQra2Qs/3.png',
                        },
                        chainName: 'Polygon',
                        chainId: 2500,
                        lender: '0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB',
                        nftAddress:
                            '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
                        tokenId: 3,
                        paymentToken:
                            '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        pricePerDay: 0.1,
                        collateralToken:
                            '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
                        collateralAmount: 2,
                        createTime: new Date('2022-08-10T11:52:53.000Z'),
                        maximumEndTime: new Date('2022-08-15T11:52:53.000Z'),
                        isRented: false,
                        isRentedByCurrentAccount: false,
                        renter: '0x0000000000000000000000000000000000000000',
                        rentalExpiry: new Date('1970-01-01T00:00:00.000Z'),
                    },
                ],
            })
        }
    }, [currentChain, currentSigner])

    return (
        <ContractContext.Provider
            value={{
                executeRent,
                listings,
            }}
        >
            {children}
        </ContractContext.Provider>
    )
}

export default ContractProvider
