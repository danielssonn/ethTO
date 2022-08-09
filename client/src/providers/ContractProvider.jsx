import { useEffect, useReducer, useState } from 'react'
import { ethers } from 'ethers'

import { ContractContext } from '../context'
import useWeb3 from '../hooks/use-web3'
import { CHAIN_MAP } from '../utils/constants'

import { abi as receiver } from '../../../protocol/artifacts/contracts/SendAckReceiver.sol/SendAckReceiver.json'
import { abi as sender } from '../../../protocol/artifacts/contracts/SendAckSender.sol/SendAckSender.json'
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
                createTime: new Date(createTime.toNumber()),
                maximumEndTime: new Date(maximumEndTime.toNumber()),
                isRented:
                    rental.renter !==
                    '0x0000000000000000000000000000000000000000',
                isRentedByCurrentAccount: rental.renter === currentAccount,
                renter: rental.renter,
                rentalExpiry: new Date(rental.expiryTime),
            })
        )
    )
}

const reducer = (state, action) => {
    return [...state, ...action.data]
}

const ContractProvider = ({ children }) => {
    const { currentAccount, currentChain, currentSigner, provider } = useWeb3()
    const [listings, dispatch] = useReducer(reducer, [])
    const [contract, setContract] = useState()

    const fetchListingsFrom = async (chainId) => {
        const chainConfig = CHAIN_MAP.get(chainId)
        const contract = new ethers.Contract(
            chainConfig.sender,
            sender,
            provider
        )
        try {
            const chainName = chainConfig.name
            const listings = await contract.getAllListings()

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

    useEffect(() => {
        if (currentSigner) {
            setContract(
                new ethers.Contract(
                    CHAIN_MAP.get(currentChain).receiver,
                    receiver,
                    currentSigner
                )
            )
        }
    }, [currentChain, currentSigner])

    useEffect(() => {
        if (currentChain && currentSigner) {
            // TODO: fetch listings from all supported chains
            fetchListingsFrom(currentChain)
        }
    }, [currentChain, currentSigner])

    return (
        <ContractContext.Provider
            value={{
                contract,
                listings,
            }}
        >
            {children}
        </ContractContext.Provider>
    )
}

export default ContractProvider
