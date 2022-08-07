import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import TransactionProvider from './providers/TransactionProvider'
import ContractProvider from './providers/ContractProvider'
import SwingProvider from './providers/SwingProvider'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <TransactionProvider>
        <ContractProvider>
            <SwingProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </SwingProvider>
        </ContractProvider>
    </TransactionProvider>,
    rootElement
)
