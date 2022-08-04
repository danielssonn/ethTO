import { createContext } from 'react'
import SwingSDK from '@swing.xyz/sdk'

export const SwingContext = createContext()

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
