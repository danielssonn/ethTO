import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { TransactionProvider } from './context/TransactionContext'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <TransactionProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </TransactionProvider>,
    rootElement
)
