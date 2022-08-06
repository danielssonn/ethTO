import { useContext } from 'react'

import { TransactionContext } from '../context'

export default () => {
  return useContext(TransactionContext)
}
