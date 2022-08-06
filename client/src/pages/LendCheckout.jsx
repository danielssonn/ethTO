import { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'

const steps = [
    { name: 'Select NFT', href: '/lend', status: 'complete' },
    { name: 'Rental Information', href: '#', status: 'current' },
    { name: 'Confirmation', href: '#', status: 'upcoming' },
]
const nft = {
    id: 1,
    name: 'Bored Ape Yacht Club',
    price: '50',
    token: '#3',
    imageSrc:
        'https://ipfs.io/ipfs/QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6',
    imageAlt: 'Bored Ape Yacht Club #3',
}
const days = [
    { name: '1', available: true },
    { name: '2', available: true },
    { name: '3', available: true },
    { name: '5', available: true },
    { name: '7', available: true },
    { name: '14', available: true },
    { name: '21', available: true },
    { name: '28', available: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function LendCheckout() {
    const [selectedDay, setSelectedDay] = useState(days[2])

    return (
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
                        <a href="#" className="absolute left-0 top-1/2 -mt-4">
                            <span className="sr-only">Workflow</span>
                            <img
                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                alt=""
                                className="h-8 w-auto"
                            />
                        </a>
                        <nav aria-label="Progress" className="hidden sm:block">
                            <ol role="list" className="flex space-x-4">
                                {steps.map((step, stepIdx) => (
                                    <li
                                        key={step.name}
                                        className="flex items-center"
                                    >
                                        {step.status === 'current' ? (
                                            <a
                                                href={step.href}
                                                aria-current="page"
                                                className="text-green-600"
                                            >
                                                {step.name}
                                            </a>
                                        ) : (
                                            <a href={step.href}>{step.name}</a>
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
                    aria-labelledby="preview-heading"
                    className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
                >
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <h2
                            id="preview-heading"
                            className="text-lg font-medium text-gray-900"
                        >
                            Preview
                        </h2>
                        <ul
                            role="list"
                            className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
                        >
                            <li
                                key={nft?.id}
                                className="flex items-start py-6 space-x-4"
                            >
                                <img
                                    src={nft?.imageSrc}
                                    alt={nft?.imageAlt}
                                    className="flex-none w-40 h-40 rounded-md object-center object-cover"
                                />
                                <div className="flex-auto space-y-1">
                                    <h3>{nft?.name}</h3>
                                    <p className="text-gray-500">
                                        {nft?.token}
                                    </p>
                                </div>
                                <div className="flex text-base font-medium items-center">
                                    <img
                                        src="https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"
                                        className="w-8 h-8 rounded-md object-center object-cover"
                                    />
                                    <p className="ml-2">{nft?.price}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <form className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <section aria-labelledby="list-heading">
                            <h2
                                id="contact-info-heading"
                                className="text-lg font-medium text-gray-900"
                            >
                                List item for rent
                            </h2>
                            <div className="mt-6">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm text-gray-900 font-medium">
                                        Minimum days
                                    </h4>
                                </div>
                                <RadioGroup
                                    value={selectedDay}
                                    onChange={setSelectedDay}
                                    className="mt-4"
                                >
                                    <RadioGroup.Label className="sr-only">
                                        Choose a day
                                    </RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-4">
                                        {days.map((day) => (
                                            <RadioGroup.Option
                                                key={day.name}
                                                value={day}
                                                disabled={!day.available}
                                                className={({ active }) =>
                                                    classNames(
                                                        day.available
                                                            ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                            : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                        active
                                                            ? 'ring-2 ring-green-500'
                                                            : '',
                                                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <RadioGroup.Label as="span">
                                                            {day.name}
                                                        </RadioGroup.Label>
                                                        {day.available ? (
                                                            <span
                                                                className={classNames(
                                                                    active
                                                                        ? 'border'
                                                                        : 'border-2',
                                                                    checked
                                                                        ? 'border-green-500'
                                                                        : 'border-transparent',
                                                                    'absolute -inset-px rounded-md pointer-events-none'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <span
                                                                aria-hidden="true"
                                                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                                            >
                                                                <svg
                                                                    className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                                    viewBox="0 0 100 100"
                                                                    preserveAspectRatio="none"
                                                                    stroke="currentColor"
                                                                >
                                                                    <line
                                                                        x1={0}
                                                                        y1={100}
                                                                        x2={100}
                                                                        y2={0}
                                                                        vectorEffect="non-scaling-stroke"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm text-gray-900 font-medium">
                                        Maximum days
                                    </h4>
                                </div>
                                <RadioGroup
                                    value={selectedDay}
                                    onChange={setSelectedDay}
                                    className="mt-4"
                                >
                                    <RadioGroup.Label className="sr-only">
                                        Choose a day
                                    </RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-4">
                                        {days.map((day) => (
                                            <RadioGroup.Option
                                                key={day.name}
                                                value={day}
                                                disabled={!day.available}
                                                className={({ active }) =>
                                                    classNames(
                                                        day.available
                                                            ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                            : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                        active
                                                            ? 'ring-2 ring-green-500'
                                                            : '',
                                                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <RadioGroup.Label as="span">
                                                            {day.name}
                                                        </RadioGroup.Label>
                                                        {day.available ? (
                                                            <span
                                                                className={classNames(
                                                                    active
                                                                        ? 'border'
                                                                        : 'border-2',
                                                                    checked
                                                                        ? 'border-green-500'
                                                                        : 'border-transparent',
                                                                    'absolute -inset-px rounded-md pointer-events-none'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <span
                                                                aria-hidden="true"
                                                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                                            >
                                                                <svg
                                                                    className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                                    viewBox="0 0 100 100"
                                                                    preserveAspectRatio="none"
                                                                    stroke="currentColor"
                                                                >
                                                                    <line
                                                                        x1={0}
                                                                        y1={100}
                                                                        x2={100}
                                                                        y2={0}
                                                                        vectorEffect="non-scaling-stroke"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm text-gray-900 font-medium">
                                        Duration
                                    </h4>
                                </div>
                                <RadioGroup
                                    value={selectedDay}
                                    onChange={setSelectedDay}
                                    className="mt-4"
                                >
                                    <RadioGroup.Label className="sr-only">
                                        Choose a day
                                    </RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-4">
                                        {days.map((day) => (
                                            <RadioGroup.Option
                                                key={day.name}
                                                value={day}
                                                disabled={!day.available}
                                                className={({ active }) =>
                                                    classNames(
                                                        day.available
                                                            ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                            : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                        active
                                                            ? 'ring-2 ring-green-500'
                                                            : '',
                                                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <RadioGroup.Label as="span">
                                                            {day.name}
                                                        </RadioGroup.Label>
                                                        {day.available ? (
                                                            <span
                                                                className={classNames(
                                                                    active
                                                                        ? 'border'
                                                                        : 'border-2',
                                                                    checked
                                                                        ? 'border-green-500'
                                                                        : 'border-transparent',
                                                                    'absolute -inset-px rounded-md pointer-events-none'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <span
                                                                aria-hidden="true"
                                                                className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                                            >
                                                                <svg
                                                                    className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                                    viewBox="0 0 100 100"
                                                                    preserveAspectRatio="none"
                                                                    stroke="currentColor"
                                                                >
                                                                    <line
                                                                        x1={0}
                                                                        y1={100}
                                                                        x2={100}
                                                                        y2={0}
                                                                        vectorEffect="non-scaling-stroke"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Price
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="collateral-code"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Collateral
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            id="collateral-code"
                                            name="collateral-code"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
                            <button
                                type="submit"
                                className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500 sm:ml-6 sm:order-last sm:w-auto"
                            >
                                Continue
                            </button>
                            <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                                Lorem ipsum
                            </p>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}
