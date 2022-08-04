import { createContext } from 'react'
import SwingSDK from '@swing.xyz/sdk'
import { SwingContext } from '../context'

const sdk = new SwingSDK({
  debug: true,
});

const SwingContext = ({ children }) => {
  return (
    <SwingContext.Provider value={{ sdk }}>
      {children}
    </SwingContext.Provider>
  )
}

export default SwingContext
