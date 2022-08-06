import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import TransactionProvider from './providers/TransactionProvider'
import SwingProvider from './providers/SwingProvider'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <TransactionProvider>
        <SwingProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </SwingProvider>
    </TransactionProvider>,
    rootElement
)
