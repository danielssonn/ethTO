import { useEffect, useReducer, useState } from 'react'
import { ethers } from 'ethers'

import { ContractContext } from '../context'
import useWeb3 from '../hooks/use-web3'
import { CHAIN_MAP } from '../utils/constants'

import abi from '../../../protocol/data/abi/NFTMarket.json'

const reducer = (state, action) => {
    return {
        ...state,
        ...action,
    }
}

const ContractProvider = ({ children }) => {
    const { alchemyWS, currentChain, currentSigner } = useWeb3()
    const [listings, dispatch] = useReducer(reducer, {})
    const [contract, setContract] = useState()

    const fetchListingsFrom = async (chainId) => {
        const chainConfig = CHAIN_MAP[chainId]
        const contract = new ethers.Contract(
            chainConfig.contract,
            abi,
            alchemyWS
        )
        try {
            const listings = await contract.listedNFTs()
            dispatch({ [chainConfig.name]: listings })
        } catch (e) {
            console.error(`Failed to fetch listings for ${chainConfig.name}`, e)
        }
    }

    useEffect(() => {
        if (currentSigner) {
            setContract(
                new ethers.Contract(
                    CHAIN_MAP[currentChain].contract,
                    abi,
                    currentSigner
                )
            )
        }
    }, [currentChain, currentSigner])

    useEffect(() => {
        if (currentChain && alchemyWS) {
            // TODO: fetch listings from all supported chains
            fetchListingsFrom(currentChain)
        }
    }, [currentChain, alchemyWS])

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
