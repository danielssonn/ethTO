import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { CHAIN_MAP } from '../utils/constants'

export const TransactionContext = React.createContext()

// ethereum object from window, initiate provider and signer
const { ethereum } = window
const provider = new ethers.providers.Web3Provider(ethereum)

// context provider
export const TransactionProvider = ({ children }) => {
  // states
  const [currentSigner, setCurrentSigner] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentChain, setCurrentChain] = useState()

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
      setCurrentChain(CHAIN_MAP.get(chainId))
    } catch (error) {
      console.error(error)
    }
  }

  // check if wallet is connected every time page is rerendered
  useEffect(() => {
    checkIfWalletIsConnected()
    // loadIdentitiesFromContract()
  }, [])

  useEffect(() => {
    if (ethereum) {
      ethereum.on('chainChanged', detectChain)

      return () => {
        ethereum.removeListener('chainChanged', detectChain)
      }
    }
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        currentSigner,
        currentChain
      }}
    >
        {children}
    </TransactionContext.Provider>
  )
}
