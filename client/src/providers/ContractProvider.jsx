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
        }
    }

    const executeRent = async (
        nftAddress,
        tokenId,
        daysToRent
    ) => {
        if (currentSigner) {
            // TODO: use the mainnet / testnet chain ID
            const contract = getContractFor(2501, currentSigner) //local
            try {
                const tx = await contract.rent(
                    nftAddress,
                    tokenId,
                    daysToRent
                )
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
            fetchListingsFrom(currentChain)
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
