import { CheckIcon, ChevronRightIcon } from '@heroicons/react/solid'

const steps = [
    { name: 'Select NFT', href: '/rent', status: 'complete' },
    { name: 'Rental Information', href: '#', status: 'complete' },
    { name: 'Cross Chain Swap', href: '#', status: 'current' },
    { name: 'Confirmation', href: '#', status: 'upcoming' },
]
const transfer = ''
const swingSteps = [
    {
        name: 'Pending',
        description: `Creating a transaction for the ${transfer.step} step`,
        status: 'complete',
    },
    {
        name: 'Chain switch required',
        description: '',
        status: 'current',
    },
    {
        name: 'Action required',
        description:
            'Please complete the required action within your connected wallet',
        status: 'upcoming',
    },
    {
        name: 'Confirming',
        description: `Waiting for the transaction from the ${transfer.step} step to complete`,
        status: 'upcoming',
    },
    {
        name: 'Success',
        description: `Transfer has completed the ${transfer.step} step`,
        status: 'upcoming',
    },
]
const tokens = [
    {
        id: 1,
        name: 'Ethereum',
        price: '70',
        imageSrc:
            'https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg',
        imageAlt: 'Ethereum',
    },
    {
        id: 2,
        name: 'Polygon',
        price: '70',
        imageSrc:
            'https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg',
        imageAlt: 'Polygon',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Temp() {
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
                <h1 className="sr-only">Cross chain swap</h1>
                <section
                    aria-labelledby="transfer-status-heading"
                    className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
                >
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <h2
                            id="transfer-status-heading"
                            className="text-lg font-medium text-gray-900"
                        >
                            Transfer status
                        </h2>
                        <nav aria-label="Progress" className="pt-6">
                            <ol role="list" className="overflow-hidden">
                                {swingSteps.map((step, stepIdx) => (
                                    <li
                                        key={step.name}
                                        className={classNames(
                                            stepIdx !== swingSteps.length - 1
                                                ? 'pb-10'
                                                : '',
                                            'relative'
                                        )}
                                    >
                                        {step.status === 'complete' ? (
                                            <>
                                                {stepIdx !==
                                                swingSteps.length - 1 ? (
                                                    <div
                                                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-green-600"
                                                        aria-hidden="true"
                                                    />
                                                ) : null}
                                                <div className="relative flex items-start group">
                                                    <span className="h-9 flex items-center">
                                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-green-600 rounded-full group-hover:bg-green-800">
                                                            <CheckIcon
                                                                className="w-5 h-5 text-white"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </span>
                                                    <span className="ml-4 min-w-0 flex flex-col">
                                                        <span className="text-xs font-semibold tracking-wide uppercase">
                                                            {step.name}
                                                        </span>
                                                        <span className="text-sm text-gray-500">
                                                            {step.description}
                                                        </span>
                                                    </span>
                                                </div>
                                            </>
                                        ) : step.status === 'current' ? (
                                            <>
                                                {stepIdx !==
                                                swingSteps.length - 1 ? (
                                                    <div
                                                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                                        aria-hidden="true"
                                                    />
                                                ) : null}
                                                <div
                                                    className="relative flex items-start group"
                                                    aria-current="step"
                                                >
                                                    <span
                                                        className="h-9 flex items-center"
                                                        aria-hidden="true"
                                                    >
                                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green-600 rounded-full">
                                                            <span className="h-2.5 w-2.5 bg-green-600 rounded-full" />
                                                        </span>
                                                    </span>
                                                    <span className="ml-4 min-w-0 flex flex-col">
                                                        <span className="text-xs font-semibold tracking-wide uppercase text-green-600">
                                                            {step.name}
                                                        </span>
                                                        <span className="text-sm text-gray-500">
                                                            {step.description}
                                                        </span>
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {stepIdx !==
                                                swingSteps.length - 1 ? (
                                                    <div
                                                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                                        aria-hidden="true"
                                                    />
                                                ) : null}
                                                <div className="relative flex items-start group">
                                                    <span
                                                        className="h-9 flex items-center"
                                                        aria-hidden="true"
                                                    >
                                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                                            <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                                                        </span>
                                                    </span>
                                                    <span className="ml-4 min-w-0 flex flex-col">
                                                        <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                                                            {step.name}
                                                        </span>
                                                        <span className="text-sm text-gray-500">
                                                            {step.description}
                                                        </span>
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                </section>
                <form className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
                    <div className="max-w-lg mx-auto lg:max-w-none">
                        <section aria-labelledby="cross-chain-swap-heading">
                            <h2
                                id="cross-chain-swap-heading"
                                className="text-lg font-medium text-gray-900"
                            >
                                Cross chain swap
                            </h2>
                            <ul
                                role="list"
                                className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
                            >
                                {tokens.map((token, tokenIdx) => (
                                    <li
                                        key={token?.id}
                                        className={classNames(
                                            tokenIdx !== tokens.length - 1
                                                ? 'py-6'
                                                : 'pt-6',
                                            'flex items-start space-x-4'
                                        )}
                                    >
                                        <img
                                            src={token?.imageSrc}
                                            alt={token?.imageAlt}
                                            className="flex-none w-20 h-20 rounded-md object-center object-cover"
                                        />
                                        <div className="flex-auto space-y-1">
                                            <h3>
                                                {tokenIdx !== tokens.length - 1
                                                    ? 'Send'
                                                    : 'Receive'}
                                            </h3>
                                            <p className="text-gray-500">
                                                {token?.name}
                                            </p>
                                        </div>
                                        <div className="flex text-base font-medium flex items-center">
                                            <img
                                                src="https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"
                                                className="w-8 h-8 rounded-md object-center object-cover"
                                            />
                                            <p className="ml-2">
                                                {token?.price}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
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
