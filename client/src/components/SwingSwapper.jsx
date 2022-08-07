import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import cn from 'classnames'

import useSwing from '../hooks/use-swing'
import useWeb3 from '../hooks/use-web3'

const SwingSwapper = ({ active, onComplete, params }) => {
    const { fetchQuote, swingReady, transferState } = useSwing()
    const { currentAccount } = useWeb3()
    const [quote, setQuote] = useState(null)
    const [quoteLoading, setQuoteLoading] = useState(null)
    const [error, setError] = useState(null)

    const getQuote = async ({
        amount,
        fromChain,
        fromToken,
        toChain,
        toToken,
    }) => {
        setQuote(null)
        setQuoteLoading(true)

        const quote = await fetchQuote({
            fromChain,
            toChain,
            fromToken,
            toToken,
            amount: amount.toString(),
            fromUserAddress: currentAccount,
        })

        setQuoteLoading(false)
        setQuote(quote)
    }

    useEffect(() => {
        if (active && currentAccount && swingReady) {
            try {
                getQuote(params)
            } catch (e) {
                setError(e.message)
            }
        }
    }, [active, currentAccount, swingReady, params])

    return (
        <section
            className={cn({ hidden: !active })}
            aria-labelledby="rental-info-heading"
        >
            <div>
                {error && <p>{error}</p>}
                {quoteLoading && <p>Loading Quote...</p>}
                {transferState && <p>{transferState}</p>}
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
        </section>
    )
}

export default SwingSwapper
