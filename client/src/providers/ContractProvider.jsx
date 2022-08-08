import { useEffect, useReducer, useState } from 'react'
import { ethers } from 'ethers'

import { ContractContext } from '../context'
import useWeb3 from '../hooks/use-web3'
import { CHAIN_MAP } from '../utils/constants'

import { abi as receiver } from '../../../protocol/artifacts/contracts/SendAckReceiver.sol/SendAckReceiver.json'
import { abi as sender } from '../../../protocol/artifacts/contracts/SendAckSender.sol/SendAckSender.json'

const reducer = (state, action) => {
    return {
        ...state,
        ...action,
    }
}

const ContractProvider = ({ children }) => {
    const { currentChain, currentSigner, provider } = useWeb3()
    const [listings, dispatch] = useReducer(reducer, {})
    const [contract, setContract] = useState()

    const fetchListingsFrom = async (chainId) => {
        const chainConfig = CHAIN_MAP.get(chainId)
        const contract = new ethers.Contract(
            chainConfig.sender,
            sender,
            provider
        )
        try {
            const listings = await contract.getAllListings()
            console.log('listings', listings)
            dispatch({ [chainConfig.name.toLowerCase()]: listings })
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
