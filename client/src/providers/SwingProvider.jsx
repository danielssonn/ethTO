import { useState, useEffect } from 'react'
import SwingSDK from '@swing.xyz/sdk'
import { SwingContext } from '../context'
import PropTypes from 'prop-types'

const sdk = new SwingSDK({
    debug: true,
})

const SwingProvider = ({ children }) => {
    const [ready, setReady] = useState(false)
    const [chains, setChains] = useState([])
    const [transferState, setTransferState] = useState('idle')

    useEffect(() => {
        if (!ready) {
            ;(async () => {
                await sdk.init()
                setChains(sdk.chains)
                setReady(true)
            })()
        } else {
            sdk.on('TRANSFER', (transfer) => {
                switch (transfer.status) {
                    case 'PENDING':
                        console.log(
                            `Creating a transaction for the ${transfer.step} step`
                        )
                        setTransferState('pending')
                        break
                    case 'CHAIN_SWITCH_REQUIRED':
                        // Handle switching chains or alert the user to do it manually
                        break
                    case 'ACTION_REQUIRED':
                        console.log(
                            'Please complete the required action within your connected wallet'
                        )
                        setTransferState('action required')
                        break
                    case 'CONFIRMING':
                        console.log(
                            `Waiting for the transaction from the ${transfer.step} step to complete`
                        )
                        setTransferState('confirming')
                        break
                    case 'SUCCESS':
                        console.log(
                            `Transfer has completed the ${transfer.step} step`
                        )
                        setTransferState('success')
                        setTimeout(() => setTransferState('idle'), 2500)
                        break
                    case 'FAILED':
                        console.log(
                            `Transfer failed at the ${transfer.step} step:`,
                            transfer.error
                        )
                        setTransferState('failed')
                        setTimeout(() => setTransferState('idle'), 2500)
                        break
                    default:
                        setTransferState('idle')
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

    const getChain = (name) => {
        return chains.filter((chainData) => chainData.slug === name)[0]
    }

    const getNativeToken = (name) => {
        const chain = getChain(name)

        if (chain) {
            const { tokens } = chain
            return tokens.filter((token) =>
                sdk.isNativeToken(name, token.symbol)
            )[0]
        }
    }

    return (
        <SwingContext.Provider
            value={{
                sdk,
                fetchQuote,
                chains,
                getChain,
                transfer,
                transferState,
                swingReady: ready,
                getNativeToken,
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
