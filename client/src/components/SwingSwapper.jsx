import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import cn from 'classnames'

import useSwing from '../hooks/use-swing'
import useWeb3 from '../hooks/use-web3'

const networkLogos = {
    avalanche: {
        imageSrc:
            'https://raw.githubusercontent.com/sushiswap/icons/master/network/avalanche.jpg',
        imageAlt: 'Avalanche',
    },
    ethereum: {
        imageSrc:
            'https://raw.githubusercontent.com/sushiswap/icons/master/network/mainnet.jpg',
        imageAlt: 'Ethereum',
    },
    polygon: {
        imageSrc:
            'https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg',
        imageAlt: 'Polygon',
    },
}
const tokenLogos = {
    avax: {
        imageSrc:
            'https://raw.githubusercontent.com/sushiswap/icons/master/token/avax.jpg',
        imageAlt: 'AVAX',
    },
    eth: {
        imageSrc:
            'https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg',
        imageAlt: 'ETH',
    },
    matic: {
        imageSrc:
            'https://raw.githubusercontent.com/sushiswap/icons/master/token/matic.jpg',
        imageAlt: 'MATIC',
    },
    weth: {
        imageSrc:
            'https://raw.githubusercontent.com/sushiswap/icons/master/token/weth.jpg',
        imageAlt: 'WETH',
    },
}

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
            {transferState && (
                <h2 className="text-lg font-medium text-gray-900 mt-6 hidden">
                    {transferState}
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
                                    networkLogos[
                                        quote.fromChain.name.toLowerCase()
                                    ].imageSrc
                                }
                                alt={
                                    networkLogos[
                                        quote.fromChain.name.toLowerCase()
                                    ].imageAlt
                                }
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
                            <div className="flex text-base font-medium flex items-center">
                                <img
                                    src={
                                        tokenLogos[
                                            quote.fromToken.name.toLowerCase()
                                        ].imageSrc
                                    }
                                    alt={
                                        tokenLogos[
                                            quote.fromToken.name.toLowerCase()
                                        ].imageAlt
                                    }
                                    className="w-8 h-8 rounded-md object-center object-cover"
                                />
                                <p className="ml-2">{params.amount}</p>
                            </div>
                        </li>
                        <li className="flex items-start py-6 space-x-4">
                            <img
                                src={
                                    networkLogos[
                                        quote.toChain.name.toLowerCase()
                                    ].imageSrc
                                }
                                alt={
                                    networkLogos[
                                        quote.toChain.name.toLowerCase()
                                    ].imageAlt
                                }
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
                            <div className="flex text-base font-medium flex items-center">
                                <img
                                    src={
                                        tokenLogos[
                                            quote.toToken.name.toLowerCase()
                                        ].imageSrc
                                    }
                                    alt={
                                        tokenLogos[
                                            quote.toToken.name.toLowerCase()
                                        ].imageAlt
                                    }
                                    className="w-8 h-8 rounded-md object-center object-cover"
                                />
                                <p className="ml-2">
                                    {ethers.utils.formatEther(
                                        quote.routes[0].quote.amount,
                                        quote.routes[0].quote.decimals
                                    )}
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
                            <dd className="text-base">
                                {ethers.utils.formatEther(
                                    quote.routes[0].quote.amount,
                                    quote.routes[0].quote.decimals
                                )}{' '}
                                {quote.toToken.symbol}
                            </dd>
                        </div>
                    </dl>
                </>
            )}
        </section>
    )
}

export default SwingSwapper
