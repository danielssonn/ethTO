import { useState } from 'react'
import { ethers } from 'ethers'

import Button from '../components/Button'
import useSwing from '../hooks/use-swing'
import useWeb3 from '../hooks/use-web3'

const SwingConverter = () => {
    const { fetchQuote, swingReady } = useSwing()
    const { currentAccount } = useWeb3()
    const [quote, setQuote] = useState(null)
    const [quoteLoading, setQuoteLoading] = useState(null)
    const [amount, setAmount] = useState('')

    const convert = async () => {
        if (amount === '') return
        setQuote(null)
        setQuoteLoading(true)
        const quote = await fetchQuote({
            fromChain: 'polygon',
            toChain: 'polygon',
            fromToken: 'ETH',
            toToken: 'MATIC',
            amount,
            fromUserAddress: currentAccount,
        })

        setQuoteLoading(false)
        setQuote(quote)
    }

    return (
        <div className="mt-4">
            <div className="flex items-stretch">
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    className="mr-2 border-2 border-gray rounded-md text-lg p-2"
                    placeholder="Convert Amount"
                />
                <Button disabled={!swingReady} onClick={convert}>
                    Test Swing.xyz fetchQuote
                </Button>
            </div>
            <div>
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
        </div>
    )
}

export default SwingConverter
