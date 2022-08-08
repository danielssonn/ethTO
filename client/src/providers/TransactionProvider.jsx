import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { TransactionContext } from '../context'
import PropTypes from 'prop-types'
import { CHAIN_MAP } from '../utils/constants'

// ethereum object from window
const { ethereum } = window

const TransactionProvider = ({ children }) => {
    // states
    const [currentSigner, setCurrentSigner] = useState('')
    const [currentAccount, setCurrentAccount] = useState('')
    const [currentChain, setCurrentChain] = useState(2500)
    const [ready, setReady] = useState(false)
    const [web3Provider] = useState(new ethers.providers.Web3Provider(ethereum))
    const [isDev, setIsDev] = useState(false)
    const [provider, setProvider] = useState()

    // check if wallet is connect
    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert('Please install MetaMask.')

            const accounts = await ethereum.request({ method: 'eth_accounts' })

            if (accounts.length) {
                setCurrentAccount(accounts[0])
                setCurrentSigner(web3Provider.getSigner())
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
            setCurrentSigner(web3Provider.getSigner())
        } catch (error) {
            console.error(error)
        }
    }

    const detectChain = async () => {
        try {
            if (!ethereum) return alert('Please install MetaMask.')

            const chainId = await ethereum.request({ method: 'eth_chainId' })
            console.log(chainId)
            setCurrentChain(Number.parseInt(chainId))
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

    useEffect(() => {
        const dev = [2500, 2501].includes(currentChain)
        setIsDev(dev)

        if (dev) {
            setProvider(
                new ethers.providers.JsonRpcProvider(
                    CHAIN_MAP.get(currentChain).rpc
                )
            )
        } else {
            /* eslint-disable no-undef */
            setProvider(
                ethers.providers.AlchemyProvider.getWebSocketProvider(
                    currentChain,
                    ALCHEMY_ID
                )
            )
            /* eslint-enable no-undef */
        }
    }, [currentChain])

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
                isDev,
                provider,
                web3Provider,
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
