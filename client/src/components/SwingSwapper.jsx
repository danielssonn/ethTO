import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
    CheckIcon,
    ExclamationCircleIcon,
    SelectorIcon,
} from '@heroicons/react/solid'
import cn from 'classnames'
import { ethers } from 'ethers'

import useSwing from '../hooks/use-swing'
import useWeb3 from '../hooks/use-web3'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SwingSwapper = () => {
    const [form, setForm] = useState({
        fromChain: 'polygon',
        toChain: 'avalanche',
        fromToken: 'WETH',
        toToken: 'AVAX',
        amount: '1',
    })
    const [amountError, setAmountError] = useState(false)
    const [error, setError] = useState(null)
    const [quote, setQuote] = useState(null)
    const [quoteLoading, setQuoteLoading] = useState(null)
    const { chains, fetchQuote, sdk, swingReady } = useSwing()
    const { currentAccount } = useWeb3()
    const { transferState } = useSwing()

    const handleInputChange = (event) => {
        const input = {}

        input[event.target.name] = event.target.value

        setForm({
            ...form,
            ...input,
        })
    }

    const handleSubmit = async () => {
        setAmountError(false)
        setError(null)
        setQuote(null)
        setQuoteLoading(true)

        if (!swingReady) {
            setQuoteLoading(false)
            setError('Swing is not ready, please try again')

            return
        }

        if (form.amount < 0.01) {
            setQuoteLoading(false)
            setAmountError(true)

            return
        }

        try {
            const quote = await fetchQuote({
                fromChain: form.fromChain,
                toChain: form.toChain,
                fromToken: form.fromToken,
                toToken: form.toToken,
                amount: form.amount,
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
        if (swingReady) {
            setForm({
                ...form,
                ...{
                    fromToken: chains.find(
                        (element) => element.slug === form.fromChain
                    ).tokens[0].symbol,
                },
            })
        }
    }, [form.fromChain])

    useEffect(() => {
        if (swingReady) {
            setForm({
                ...form,
                ...{
                    toToken: chains.find(
                        (element) => element.slug === form.toChain
                    ).tokens[0].symbol,
                },
            })
        }
    }, [form.toChain])

    return (
        <>
            <section aria-labelledby="cross-chain-swap-heading">
                <h2
                    id="cross-chain-swap-heading"
                    className="text-lg font-medium text-gray-900"
                >
                    Cross chain swap
                </h2>
                {error && (
                    <h2 className="text-lg font-medium text-red-600 mt-6">
                        {error}
                    </h2>
                )}
                {quoteLoading && (
                    <h2 className="text-lg font-medium text-gray-900 mt-6">
                        Loading quote...
                    </h2>
                )}
                {swingReady ? (
                    <ul
                        role="list"
                        className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
                    >
                        <li className="flex items-start py-6 space-x-4">
                            <div className="flex-auto space-y-1">
                                <Listbox
                                    value={form.fromChain}
                                    onChange={(event) => {
                                        setForm({
                                            ...form,
                                            ...{ fromChain: event },
                                        })
                                    }}
                                >
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                                                Send
                                            </Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm">
                                                    <span className="flex items-center">
                                                        <img
                                                            src={
                                                                chains.find(
                                                                    (element) =>
                                                                        element.slug ===
                                                                        form.fromChain
                                                                ).logo
                                                            }
                                                            alt={
                                                                chains.find(
                                                                    (element) =>
                                                                        element.slug ===
                                                                        form.fromChain
                                                                ).name
                                                            }
                                                            className="flex-shrink-0 h-6 w-6 rounded-full"
                                                            onError={(event) =>
                                                                (event.target.style.display =
                                                                    'none')
                                                            }
                                                        />
                                                        <span className="ml-3 block truncate">
                                                            {
                                                                chains.find(
                                                                    (element) =>
                                                                        element.slug ===
                                                                        form.fromChain
                                                                ).name
                                                            }
                                                        </span>
                                                    </span>
                                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <SelectorIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Listbox.Button>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {chains.map((chain) => (
                                                            <Listbox.Option
                                                                key={chain.slug}
                                                                className={({
                                                                    active,
                                                                }) =>
                                                                    classNames(
                                                                        active
                                                                            ? 'text-white bg-green-600'
                                                                            : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={
                                                                    chain.slug
                                                                }
                                                            >
                                                                {({
                                                                    selected,
                                                                    active,
                                                                }) => (
                                                                    <>
                                                                        <div className="flex items-center">
                                                                            <img
                                                                                src={
                                                                                    chain.logo
                                                                                }
                                                                                alt={
                                                                                    chain.name
                                                                                }
                                                                                className="flex-shrink-0 h-6 w-6 rounded-full"
                                                                                onError={(
                                                                                    event
                                                                                ) =>
                                                                                    (event.target.style.display =
                                                                                        'none')
                                                                                }
                                                                            />
                                                                            <span
                                                                                className={classNames(
                                                                                    selected
                                                                                        ? 'font-semibold'
                                                                                        : 'font-normal',
                                                                                    'ml-3 block truncate'
                                                                                )}
                                                                            >
                                                                                {
                                                                                    chain.name
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active
                                                                                        ? 'text-white'
                                                                                        : 'text-green-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                )}
                                                                            >
                                                                                <CheckIcon
                                                                                    className="h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>
                            <div className="flex-auto space-y-1">
                                <label
                                    htmlFor="amount"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Amount
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        className={cn(
                                            amountError
                                                ? 'pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                                                : 'shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300',
                                            'block w-full sm:text-sm rounded-md'
                                        )}
                                        aria-invalid={amountError}
                                        aria-describedby="amount-error"
                                        onChange={handleInputChange}
                                        value={form.amount}
                                    />
                                    {amountError && (
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <ExclamationCircleIcon
                                                className="h-5 w-5 text-red-500"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    )}
                                </div>
                                {amountError && (
                                    <p
                                        className="mt-2 text-sm text-red-600"
                                        id="amount-error"
                                    >
                                        Your amount must be more than 0.01.
                                    </p>
                                )}
                            </div>
                            <div className="flex-auto space-y-1">
                                <Listbox
                                    value={form.fromToken}
                                    onChange={(event) => {
                                        setForm({
                                            ...form,
                                            ...{ fromToken: event },
                                        })
                                    }}
                                >
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                                                Token
                                            </Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm">
                                                    <span className="flex items-center">
                                                        <img
                                                            src={
                                                                sdk.tokens.find(
                                                                    (element) =>
                                                                        element.symbol ===
                                                                        form.fromToken
                                                                ).logoURI
                                                            }
                                                            alt={
                                                                sdk.tokens.find(
                                                                    (element) =>
                                                                        element.symbol ===
                                                                        form.fromToken
                                                                ).name
                                                            }
                                                            className="flex-shrink-0 h-6 w-6 rounded-full"
                                                            onError={(event) =>
                                                                (event.target.style.display =
                                                                    'none')
                                                            }
                                                        />
                                                        <span className="ml-3 block truncate">
                                                            {form.fromToken}
                                                        </span>
                                                    </span>
                                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <SelectorIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Listbox.Button>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {chains
                                                            .find(
                                                                (element) =>
                                                                    element.slug ===
                                                                    form.toChain
                                                            )
                                                            .tokens.map(
                                                                (token) => (
                                                                    <Listbox.Option
                                                                        key={
                                                                            token.symbol
                                                                        }
                                                                        className={({
                                                                            active,
                                                                        }) =>
                                                                            classNames(
                                                                                active
                                                                                    ? 'text-white bg-green-600'
                                                                                    : 'text-gray-900',
                                                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                            )
                                                                        }
                                                                        value={
                                                                            token.symbol
                                                                        }
                                                                    >
                                                                        {({
                                                                            selected,
                                                                            active,
                                                                        }) => (
                                                                            <>
                                                                                <div className="flex items-center">
                                                                                    <img
                                                                                        src={
                                                                                            sdk.tokens.find(
                                                                                                (
                                                                                                    element
                                                                                                ) =>
                                                                                                    element.symbol ===
                                                                                                    token.symbol
                                                                                            )
                                                                                                ?.logoURI
                                                                                        }
                                                                                        alt={
                                                                                            token.name
                                                                                        }
                                                                                        className="flex-shrink-0 h-6 w-6 rounded-full"
                                                                                        onError={(
                                                                                            event
                                                                                        ) =>
                                                                                            (event.target.style.display =
                                                                                                'none')
                                                                                        }
                                                                                    />
                                                                                    <span
                                                                                        className={classNames(
                                                                                            selected
                                                                                                ? 'font-semibold'
                                                                                                : 'font-normal',
                                                                                            'ml-3 block truncate'
                                                                                        )}
                                                                                    >
                                                                                        {
                                                                                            token.symbol
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                                {selected ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            active
                                                                                                ? 'text-white'
                                                                                                : 'text-green-600',
                                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                        )}
                                                                                    >
                                                                                        <CheckIcon
                                                                                            className="h-5 w-5"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </span>
                                                                                ) : null}
                                                                            </>
                                                                        )}
                                                                    </Listbox.Option>
                                                                )
                                                            )}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>
                        </li>
                        <li className="flex items-start py-6 space-x-4">
                            <div className="flex-auto space-y-1">
                                <Listbox
                                    value={form.toChain}
                                    onChange={(event) => {
                                        setForm({
                                            ...form,
                                            ...{ toChain: event },
                                        })
                                    }}
                                >
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                                                Receive
                                            </Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm">
                                                    <span className="flex items-center">
                                                        <img
                                                            src={
                                                                chains.find(
                                                                    (element) =>
                                                                        element.slug ===
                                                                        form.toChain
                                                                ).logo
                                                            }
                                                            alt={
                                                                chains.find(
                                                                    (element) =>
                                                                        element.slug ===
                                                                        form.toChain
                                                                ).name
                                                            }
                                                            className="flex-shrink-0 h-6 w-6 rounded-full"
                                                            onError={(event) =>
                                                                (event.target.style.display =
                                                                    'none')
                                                            }
                                                        />
                                                        <span className="ml-3 block truncate">
                                                            {
                                                                chains.find(
                                                                    (element) =>
                                                                        element.slug ===
                                                                        form.toChain
                                                                ).name
                                                            }
                                                        </span>
                                                    </span>
                                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <SelectorIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Listbox.Button>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {chains.map((chain) => (
                                                            <Listbox.Option
                                                                key={chain.slug}
                                                                className={({
                                                                    active,
                                                                }) =>
                                                                    classNames(
                                                                        active
                                                                            ? 'text-white bg-green-600'
                                                                            : 'text-gray-900',
                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                    )
                                                                }
                                                                value={
                                                                    chain.slug
                                                                }
                                                            >
                                                                {({
                                                                    selected,
                                                                    active,
                                                                }) => (
                                                                    <>
                                                                        <div className="flex items-center">
                                                                            <img
                                                                                src={
                                                                                    chain.logo
                                                                                }
                                                                                alt={
                                                                                    chain.name
                                                                                }
                                                                                className="flex-shrink-0 h-6 w-6 rounded-full"
                                                                                onError={(
                                                                                    event
                                                                                ) =>
                                                                                    (event.target.style.display =
                                                                                        'none')
                                                                                }
                                                                            />
                                                                            <span
                                                                                className={classNames(
                                                                                    selected
                                                                                        ? 'font-semibold'
                                                                                        : 'font-normal',
                                                                                    'ml-3 block truncate'
                                                                                )}
                                                                            >
                                                                                {
                                                                                    chain.name
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                        {selected ? (
                                                                            <span
                                                                                className={classNames(
                                                                                    active
                                                                                        ? 'text-white'
                                                                                        : 'text-green-600',
                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                )}
                                                                            >
                                                                                <CheckIcon
                                                                                    className="h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>
                            <div className="flex-auto space-y-1">
                                <Listbox
                                    value={form.toToken}
                                    onChange={(event) => {
                                        setForm({
                                            ...form,
                                            ...{ toToken: event },
                                        })
                                    }}
                                >
                                    {({ open }) => (
                                        <>
                                            <Listbox.Label className="block text-sm font-medium text-gray-700">
                                                Token
                                            </Listbox.Label>
                                            <div className="mt-1 relative">
                                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm">
                                                    <span className="flex items-center">
                                                        <img
                                                            src={
                                                                sdk.tokens.find(
                                                                    (element) =>
                                                                        element.symbol ===
                                                                        form.toToken
                                                                ).logoURI
                                                            }
                                                            alt={
                                                                sdk.tokens.find(
                                                                    (element) =>
                                                                        element.symbol ===
                                                                        form.toToken
                                                                ).name
                                                            }
                                                            className="flex-shrink-0 h-6 w-6 rounded-full"
                                                            onError={(event) =>
                                                                (event.target.style.display =
                                                                    'none')
                                                            }
                                                        />
                                                        <span className="ml-3 block truncate">
                                                            {form.toToken}
                                                        </span>
                                                    </span>
                                                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <SelectorIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Listbox.Button>
                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                        {chains
                                                            .find(
                                                                (element) =>
                                                                    element.slug ===
                                                                    form.toChain
                                                            )
                                                            .tokens.map(
                                                                (token) => (
                                                                    <Listbox.Option
                                                                        key={
                                                                            token.symbol
                                                                        }
                                                                        className={({
                                                                            active,
                                                                        }) =>
                                                                            classNames(
                                                                                active
                                                                                    ? 'text-white bg-green-600'
                                                                                    : 'text-gray-900',
                                                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                            )
                                                                        }
                                                                        value={
                                                                            token.symbol
                                                                        }
                                                                    >
                                                                        {({
                                                                            selected,
                                                                            active,
                                                                        }) => (
                                                                            <>
                                                                                <div className="flex items-center">
                                                                                    <img
                                                                                        src={
                                                                                            sdk.tokens.find(
                                                                                                (
                                                                                                    element
                                                                                                ) =>
                                                                                                    element.symbol ===
                                                                                                    token.symbol
                                                                                            )
                                                                                                ?.logoURI
                                                                                        }
                                                                                        alt={
                                                                                            token.name
                                                                                        }
                                                                                        className="flex-shrink-0 h-6 w-6 rounded-full"
                                                                                        onError={(
                                                                                            event
                                                                                        ) =>
                                                                                            (event.target.style.display =
                                                                                                'none')
                                                                                        }
                                                                                    />
                                                                                    <span
                                                                                        className={classNames(
                                                                                            selected
                                                                                                ? 'font-semibold'
                                                                                                : 'font-normal',
                                                                                            'ml-3 block truncate'
                                                                                        )}
                                                                                    >
                                                                                        {
                                                                                            token.symbol
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                                {selected ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            active
                                                                                                ? 'text-white'
                                                                                                : 'text-green-600',
                                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                        )}
                                                                                    >
                                                                                        <CheckIcon
                                                                                            className="h-5 w-5"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </span>
                                                                                ) : null}
                                                                            </>
                                                                        )}
                                                                    </Listbox.Option>
                                                                )
                                                            )}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>
                        </li>
                    </ul>
                ) : (
                    <h2 className="text-lg font-medium text-gray-900 mt-6">
                        Swing is not ready
                    </h2>
                )}
                {quote && (
                    <dl className="text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
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
                )}
            </section>
            <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500 sm:ml-6 sm:order-last sm:w-auto"
                    disabled={quoteLoading}
                >
                    {quoteLoading ? 'Getting quote, please wait' : 'Continue'}
                </button>
                <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                    {`${transferState[0].toUpperCase()}${transferState
                        .slice(1)
                        .toLowerCase()}`}
                </p>
            </div>
        </>
    )
}

export default SwingSwapper
