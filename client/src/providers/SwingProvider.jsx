import { useState, useEffect } from 'react'
import SwingSDK from '@swing.xyz/sdk'
import { SwingContext } from '../context'
import PropTypes from 'prop-types'

const sdk = new SwingSDK({
    debug: true,
})

const SwingProvider = ({ children }) => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (!ready) {
            ;(async () => {
                await sdk.init()
                setReady(true)
            })()
        } else {
            sdk.on('TRANSFER', (transfer) => {
                switch (transfer.status) {
                    case 'PENDING':
                        console.log(
                            `Creating a transaction for the ${transfer.step} step`
                        )
                        break
                    case 'CHAIN_SWITCH_REQUIRED':
                        // Handle switching chains or alert the user to do it manually
                        break
                    case 'ACTION_REQUIRED':
                        console.log(
                            'Please complete the required action within your connected wallet'
                        )
                        break
                    case 'CONFIRMING':
                        console.log(
                            `Waiting for the transaction from the ${transfer.step} step to complete`
                        )
                        break
                    case 'SUCCESS':
                        console.log(
                            `Transfer has completed the ${transfer.step} step`
                        )
                        break
                    case 'FAILED':
                        console.log(
                            `Transfer failed at the ${transfer.step} step:`,
                            transfer.error
                        )
                        break
                }
            })

            return () => {
                // somehow remove the event handler (no docs on this)
            }
        }
    }, [ready])

    const fetchQuote = async ({
        fromChain,
        toChain,
        fromToken,
        toToken,
        amount,
        fromUserAddress,
        toUserAddress,
    }) => {
        console.log({
            fromChain,
            toChain,
            fromToken,
            toToken,
            amount,
            fromUserAddress,
            toUserAddress,
        })
        const quote = await sdk.getQuote({
            fromChain,
            toChain,
            fromToken,
            toToken,
            amount,
            fromUserAddress,
            toUserAddress,
        })

        console.log(quote)

        return quote
    }

    const transfer = async (transferRoute, transferParams) => {
        sdk.transfer(transferRoute, transferParams)
    }

    return (
        <SwingContext.Provider
            value={{
                sdk,
                fetchQuote,
                transfer,
                swingReady: ready,
            }}
        >
            {children}
        </SwingContext.Provider>
    )
}

SwingProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SwingProvider
