import { useContext } from 'react'

import { TransactionContext } from '../context/TransactionContext'

export default () => {
  return useContext(TransactionContext)
}
