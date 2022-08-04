import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { CHAIN_MAP } from '../utils/constants'
import { TransactionContext } from '../context'
import PropTypes from 'prop-types'

// ethereum object from window, initiate provider and signer
const { ethereum } = window
const provider = new ethers.providers.Web3Provider(ethereum)

// context provider
const TransactionProvider = ({ children }) => {
    // states
    const [currentSigner, setCurrentSigner] = useState('')
    const [currentAccount, setCurrentAccount] = useState('')
    const [currentChain, setCurrentChain] = useState()
    const [ready, setReady] = useState(false)

    // check if wallet is connect
    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert('Please install MetaMask.')

            const accounts = await ethereum.request({ method: 'eth_accounts' })

            if (accounts.length) {
                setCurrentAccount(accounts[0])
                setCurrentSigner(provider.getSigner())
            } else {
                console.log('No accounts found')
            }
        } catch (error) {
            console.log(error)
        }
    }

    // connect to user's wallet
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install MetaMask.')
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            })
            setCurrentAccount(accounts[0])
            setCurrentSigner(provider.getSigner())
        } catch (error) {
            console.error(error)
        }
    }

    const detectChain = async () => {
        try {
            if (!ethereum) return alert('Please install MetaMask.')

            const chainId = await ethereum.request({ method: 'eth_chainId' })
            setCurrentChain(CHAIN_MAP.get(Number.parseInt(chainId)))
        } catch (error) {
            console.error(error)
        }
    }

    // check if wallet is connected every time page is rerendered
    useEffect(() => {
        checkIfWalletIsConnected().then(() => {
            setReady(true)
        })
    }, [])

    useEffect(() => {
        if (ethereum && currentSigner) {
            ethereum.on('chainChanged', detectChain)

            return () => {
                ethereum.removeListener('chainChanged', detectChain)
            }
        }
    }, [currentSigner])

    // TODO: add a nicer loading state
    if (!ready) {
        return <>Loading...</>
    }

    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                currentSigner,
                currentChain,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

TransactionProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TransactionProvider
