import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/solid'

import useContract from '../hooks/use-contract'
import useSwing from '../hooks/use-swing'
import AuthRoute from '../components/AuthRoute'
import IMAGES from '../../images'
import RentDaysPicker from '../components/RentDaysPicker'
import SwingSwapper from '../components/SwingSwapper'

export default function Checkout() {
    const [steps, setSteps] = useState([
        { name: 'Select NFT', href: '/arrivals', status: 'complete' },
        { name: 'Rental Information', href: '#', status: 'current' },
        { name: 'Cross Chain Swap', href: '#', status: 'upcoming' },
        { name: 'Confirmation', href: '#', status: 'upcoming' },
    ])
    const [listing, setListing] = useState()
    const { listings } = useContract()
    const { address, chainName, tokenId } = useParams()
    const [daysToRent, setDaysToRent] = useState(2)
    const [step, setStep] = useState(1)
    const { transferState } = useSwing()

    const [rentCost, setRentCost] = useState()
    const [btnLabel] = useState('Continue')

    const handleSwapComplete = () => {
        setStep(step + 1)
    }

    const handleContinue = (event) => {
        event.preventDefault()

        const updatedSteps = [...steps]
        updatedSteps[step].status = 'complete'
        updatedSteps[step + 1].status = 'current'

        setSteps(updatedSteps)
        setStep(step + 1)
    }

    useEffect(() => {
        if (listing) {
            setRentCost(listing.pricePerDay * daysToRent)
        }
    }, [listing, daysToRent])

    useEffect(() => {
        if (listings.length) {
            const listing = listings.find(
                (l) =>
                    l.nftAddress === address &&
                    l.chainName.toLowerCase() === chainName &&
                    l.tokenId.toString() === tokenId
            )

            setListing(listing)
        }
    }, [listings, address, chainName, tokenId])

    if (listing === undefined) {
        return <h2>Loading...</h2>
    }

    return (
        <AuthRoute>
            <div className="bg-white">
                {/* Background color split screen for large screens */}
                <div
                    className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white"
                    aria-hidden="true"
                />
                <div
                    className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50"
                    aria-hidden="true"
                />
                <header className="relative bg-white border-b border-gray-200 text-sm font-medium text-gray-700">
                    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <div className="relative flex justify-end sm:justify-center">
                            <Link
                                to="/"
                                className="absolute left-0 top-1/2 -mt-4"
                            >
                                <span className="sr-only">Conveyr</span>
                                <img
                                    src={IMAGES.logo}
                                    alt="Conveyr logo"
                                    className="h-8 w-auto"
                                />
                            </Link>
                            <nav
                                aria-label="Progress"
                                className="hidden sm:block"
                            >
                                <ol role="list" className="flex space-x-4">
                                    {steps.map((step, stepIdx) => (
                                        <li
                                            key={step.name}
                                            className="flex items-center"
                                        >
                                            {step.status === 'current' ? (
                                                <Link
                                                    to={step.href}
                                                    aria-current="page"
                                                    className="text-green-600"
                                                >
                                                    {step.name}
                                                </Link>
                                            ) : (
                                                <Link to={step.href}>
                                                    {step.name}
                                                </Link>
                                            )}
                                            {stepIdx !== steps.length - 1 ? (
                                                <ChevronRightIcon
                                                    className="w-5 h-5 text-gray-300 ml-4"
                                                    aria-hidden="true"
                                                />
                                            ) : null}
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                            <p className="sm:hidden">Step 2 of 4</p>
                        </div>
                    </div>
                </header>
                <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
                    <h1 className="sr-only">Rental information</h1>
                    <section
                        aria-labelledby="item-heading"
                        className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
                    >
                        <div className="max-w-lg mx-auto lg:max-w-none">
                            <h2
                                id="item-heading"
                                className="text-lg font-medium text-gray-900"
                            >
                                Item
                            </h2>
                            <ul
                                role="list"
                                className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
                            >
                                <li
                                    key={listing.nft.tokenId}
                                    className="flex items-start py-6 space-x-4"
                                >
                                    <img
                                        src={listing.nft.image}
                                        alt={listing.nft.name}
                                        className="flex-none w-40 h-40 rounded-md object-center object-cover"
                                    />
                                    <div className="flex-auto space-y-1">
                                        <h3>{listing.nft.name}</h3>
                                    </div>
                                </li>
                            </ul>
                            <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
                                <div className="flex items-center justify-between">
                                    <dt className="text-gray-600">
                                        Collateral amount
                                    </dt>
                                    <dd className="flex items-center">
                                        <img
                                            src="https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"
                                            alt="Polygon"
                                            className="w-6 h-6 rounded-md object-center object-cover"
                                        />
                                        <span className="ml-2">
                                            {listing.collateralAmount}
                                        </span>
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <dt className="text-base">Rental cost</dt>
                                    <dd className="text-base flex items-center">
                                        <img
                                            src="https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"
                                            alt="Polygon"
                                            className="w-6 h-6 rounded-md object-center object-cover"
                                        />
                                        <span className="ml-2">{rentCost}</span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </section>
                    <form className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
                        <div className="max-w-lg mx-auto lg:max-w-none">
                            <RentDaysPicker
                                active={step === 1}
                                listing={listing}
                                selectedDay={daysToRent}
                                setSelectedDays={setDaysToRent}
                            />
                            <SwingSwapper
                                active={step === 2}
                                onComplete={handleSwapComplete}
                                params={{
                                    amount: rentCost,
                                    // TODO: get this data from the listing
                                    fromChain: 'avalanche',
                                    fromToken: 'AVAX',
                                    toChain: 'polygon',
                                    toToken: 'MATIC',
                                }}
                            />
                            {step === 3 && (
                                <section aria-labelledby="confirmation-heading">
                                    <h2
                                        id="confirmation-heading"
                                        className="text-lg font-medium text-gray-900"
                                    >
                                        Confirmation
                                    </h2>
                                </section>
                            )}
                            <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
                                <button
                                    type="submit"
                                    onClick={handleContinue}
                                    className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500 sm:ml-6 sm:order-last sm:w-auto"
                                >
                                    {btnLabel}
                                </button>
                                <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                                    {step === 2 && transferState
                                        ? `${transferState[0].toUpperCase()}${transferState
                                              .slice(1)
                                              .toLowerCase()}`
                                        : 'Lorem ipsum'}
                                </p>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </AuthRoute>
    )
}
