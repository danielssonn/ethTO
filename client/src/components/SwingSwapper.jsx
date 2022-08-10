import { useEffect, useState } from 'react'
import cn from 'classnames'
import { ethers } from 'ethers'

import useSwing from '../hooks/use-swing'
import useWeb3 from '../hooks/use-web3'

const SwingSwapper = ({ active, onComplete, params }) => {
    const { chains, fetchQuote, sdk, swingReady } = useSwing()
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
        setError(null)
        setQuote(null)
        setQuoteLoading(true)

        if (!swingReady) {
            setQuoteLoading(false)
            setError('Swing is not ready, please try again')

            return
        }

        try {
            const quote = await fetchQuote({
                fromChain,
                toChain,
                fromToken,
                toToken,
                amount: amount.toString(),
                fromUserAddress: currentAccount,
            })

            if (quote.routes.length) {
                setQuote(quote)
                setQuoteLoading(false)
            } else {
                setQuoteLoading(false)
                setError('No routes')
            }
        } catch (error) {
            setQuoteLoading(false)
            setError(error.message)
        }
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
            aria-labelledby="cross-chain-swap-heading"
            className={cn({ hidden: !active })}
        >
            <h2
                id="cross-chain-swap-heading"
                className="text-lg font-medium text-gray-900"
            >
                Cross chain swap
            </h2>
            {error && (
                <h2 className="text-lg font-medium text-gray-900 mt-6">
                    {error}
                </h2>
            )}
            {quoteLoading && (
                <h2 className="text-lg font-medium text-gray-900 mt-6">
                    Loading quote...
                </h2>
            )}
            {quote && (
                <>
                    <ul
                        role="list"
                        className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
                    >
                        <li className="flex items-start py-6 space-x-4">
                            <img
                                src={
                                    chains.find(
                                        (element) =>
                                            element.slug ===
                                            quote.fromChain.slug
                                    ).logo
                                }
                                alt={quote.fromChain.name}
                                className="flex-none w-20 h-20 rounded-md object-center object-cover"
                            />
                            <div className="flex-auto space-y-1">
                                <h3>From</h3>
                                <p className="text-gray-500">
                                    {quote.fromChain.name}
                                </p>
                                <p className="text-gray-500">
                                    {quote.fromToken.symbol}
                                </p>
                            </div>
                            <div className="flex text-base font-medium items-center">
                                <img
                                    src={
                                        sdk.tokens.find(
                                            (element) =>
                                                element.symbol ===
                                                quote.fromToken.symbol
                                        ).logoURI
                                    }
                                    alt={quote.fromToken.name}
                                    className="w-8 h-8 rounded-md object-center object-cover"
                                />
                                <span className="ml-2">{params.amount}</span>
                            </div>
                        </li>
                        <li className="flex items-start py-6 space-x-4">
                            <img
                                src={
                                    chains.find(
                                        (element) =>
                                            element.slug === quote.toChain.slug
                                    ).logo
                                }
                                alt={quote.toChain.name}
                                className="flex-none w-20 h-20 rounded-md object-center object-cover"
                            />
                            <div className="flex-auto space-y-1">
                                <h3>To</h3>
                                <p className="text-gray-500">
                                    {quote.toChain.name}
                                </p>
                                <p className="text-gray-500">
                                    {quote.toToken.symbol}
                                </p>
                            </div>
                        </li>
                    </ul>
                    <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
                        <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Gas</dt>
                            <dd>{quote.routes[0].gas}</dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                            <dt className="text-base">Amount received</dt>
                            <dd className="text-base flex items-center">
                                <img
                                    src={
                                        sdk.tokens.find(
                                            (element) =>
                                                element.symbol ===
                                                quote.toToken.symbol
                                        ).logoURI
                                    }
                                    alt={quote.toToken.name}
                                    className="w-8 h-8 rounded-md object-center object-cover"
                                />
                                <span className="ml-2">
                                    {ethers.utils.formatEther(
                                        quote.routes[0].quote.amount,
                                        quote.routes[0].quote.decimals
                                    )}
                                </span>
                            </dd>
                        </div>
                    </dl>
                </>
            )}
        </section>
    )
}

export default SwingSwapper
