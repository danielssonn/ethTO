import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import Button from '../components/Button'
import useSwing from '../hooks/use-swing'
import useWeb3 from '../hooks/use-web3'

const SwingConverter = ({ amount, fromChain, fromToken, toChain, toToken }) => {
    const { fetchQuote, swingReady } = useSwing()
    const { currentAccount } = useWeb3()
    const [quote, setQuote] = useState(null)
    const [quoteLoading, setQuoteLoading] = useState(null)
    const [error, setError] = useState(null)

    const getQuote = async (amount, fromChain, fromToken, toChain, toToken) => {
        setQuote(null)
        setQuoteLoading(true)

        const quote = await fetchQuote({
            fromChain,
            toChain,
            fromToken,
            toToken,
            amount,
            fromUserAddress: currentAccount,
        })

        setQuoteLoading(false)
        setQuote(quote)
    }

    const confirmTransfer = async () => {}

    useEffect(() => {
        if (currentAccount && swingReady) {
            try {
                getQuote(amount, fromChain, fromToken, toChain, toToken)
            } catch (e) {
                setError(e.message)
            }
        }
    }, [currentAccount, swingReady, amount, fromChain, toChain])

    return (
        <div className="mt-4">
            <div>
                {error && <p>{error}</p>}
                {quoteLoading && 'Loading Quote...'}
                {quote && (
                    <>
                        <h2 className="text-xl font-bold mb-4 mt-4">
                            Conversion Quote
                        </h2>
                        <dl>
                            <dt className="inline-block mr-2">
                                <strong>From:</strong>
                            </dt>
                            <dd className="inline-block">
                                {quote.fromChain.name} -{' '}
                                {quote.fromToken.symbol}
                            </dd>
                            <br />
                            <dt className="inline-block mr-2">
                                <strong>To:</strong>
                            </dt>
                            <dd className="inline-block">
                                {quote.toChain.name} - {quote.toToken.symbol}
                            </dd>
                            <br />
                            <dt className="inline-block mr-2">
                                <strong>Gas:</strong>
                            </dt>
                            <dd className="inline-block">
                                {quote.routes[0].gas}
                            </dd>
                            <br />
                            <dt className="inline-block mr-2">
                                <strong>Amount Received:</strong>
                            </dt>
                            <dd className="inline-block">
                                {ethers.utils.formatEther(
                                    quote.routes[0].quote.amount,
                                    quote.routes[0].quote.decimals
                                )}{' '}
                                {quote.toToken.symbol}
                            </dd>
                        </dl>
                    </>
                )}
            </div>
            <div>
                <Button disabled={!swingReady} onClick={confirmTransfer}>
                    Confirm Transfer
                </Button>
            </div>
        </div>
    )
}

export default SwingConverter
