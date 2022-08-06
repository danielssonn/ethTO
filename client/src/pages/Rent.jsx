import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import {
    ChevronDownIcon,
    FilterIcon,
    MinusSmIcon,
    PlusSmIcon,
    ViewGridIcon,
} from '@heroicons/react/solid'

import { Footer, Header, NftCard, NftModal } from '../components'
import AuthRoute from '../components/AuthRoute'
import SwingConverter from '../components/SwingConverter'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const filters = [
    {
        id: 'chains',
        name: 'Chains',
        options: [
            { value: 'ethereum', label: 'Ethereum', checked: false },
            { value: 'moonbeam', label: 'Moonbeam', checked: false },
            { value: 'polygon', label: 'Polygon', checked: true },
        ],
    },
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '0', label: '$0 - $25', checked: false },
            { value: '25', label: '$25 - $50', checked: false },
            { value: '50', label: '$50 - $75', checked: false },
            { value: '75', label: '$75+', checked: false },
        ],
    },
]
const nfts = [
    {
        id: 1,
        name: 'Bored Ape Yacht Club',
        price: '50',
        token: '#3',
        imageSrc:
            'https://ipfs.io/ipfs/QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6',
        imageAlt: 'Bored Ape Yacht Club #3',
    },
    {
        id: 2,
        name: 'Bored Ape Yacht Club',
        price: '140',
        token: '#9',
        imageSrc:
            'https://ipfs.io/ipfs/QmUQgKka8EW7exiUHnMwZ4UoXA11wV7NFjHAogVAbasSYy',
        imageAlt: 'Bored Ape Yacht Club #9',
    },
    {
        id: 3,
        name: 'Bored Ape Yacht Club',
        price: '50',
        token: '#6',
        imageSrc:
            'https://ipfs.io/ipfs/QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV',
        imageAlt: 'Bored Ape Yacht Club #6',
    },
    {
        id: 4,
        name: 'Bored Ape Yacht Club',
        price: '140',
        token: '#1',
        imageSrc:
            'https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi',
        imageAlt: 'Bored Ape Yacht Club #1',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Rent() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [isNftModalOpen, setIsNftModalOpen] = useState(false)
    const [currentNft, setCurrentNft] = useState(null)

    const handleNftCardClick = (nft) => {
        setCurrentNft(nft)
        setIsNftModalOpen(true)
    }

    return (
        <AuthRoute>
            <Header />
            <div className="bg-white">
                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="relative z-40 lg:hidden"
                            onClose={setMobileFiltersOpen}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>
                            <div className="fixed inset-0 flex z-40">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                        <div className="px-4 flex items-center justify-between">
                                            <h2 className="text-lg font-medium text-gray-900">
                                                Filters
                                            </h2>
                                            <button
                                                type="button"
                                                className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                                onClick={() =>
                                                    setMobileFiltersOpen(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close menu
                                                </span>
                                                <XIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                        {/* Filters */}
                                        <form className="mt-4">
                                            {filters.map((section) => (
                                                <Disclosure
                                                    as="div"
                                                    key={section.id}
                                                    className="border-t border-gray-200 px-4 py-6"
                                                >
                                                    {({ open }) => (
                                                        <>
                                                            <h3 className="-mx-2 -my-3 flow-root">
                                                                <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                                    <span className="font-medium text-gray-900">
                                                                        {
                                                                            section.name
                                                                        }
                                                                    </span>
                                                                    <span className="ml-6 flex items-center">
                                                                        {open ? (
                                                                            <MinusSmIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        ) : (
                                                                            <PlusSmIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        )}
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </h3>
                                                            <Disclosure.Panel className="pt-6">
                                                                <div className="space-y-6">
                                                                    {section.options.map(
                                                                        (
                                                                            option,
                                                                            optionIdx
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    option.value
                                                                                }
                                                                                className="flex items-center"
                                                                            >
                                                                                <input
                                                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                    name={`${section.id}[]`}
                                                                                    defaultValue={
                                                                                        option.value
                                                                                    }
                                                                                    type="checkbox"
                                                                                    defaultChecked={
                                                                                        option.checked
                                                                                    }
                                                                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                                />
                                                                                <label
                                                                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                                >
                                                                                    {
                                                                                        option.label
                                                                                    }
                                                                                </label>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            ))}
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>
                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                                Rent
                            </h1>
                            <div className="flex items-center">
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                >
                                    <div>
                                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                            Sort
                                            <ChevronDownIcon
                                                className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                {sortOptions.map((option) => (
                                                    <Menu.Item
                                                        key={option.name}
                                                    >
                                                        {({ active }) => (
                                                            <a
                                                                href={
                                                                    option.href
                                                                }
                                                                className={classNames(
                                                                    option.current
                                                                        ? 'font-medium text-gray-900'
                                                                        : 'text-gray-500',
                                                                    active
                                                                        ? 'bg-gray-100'
                                                                        : '',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                {option.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <button
                                    type="button"
                                    className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">View grid</span>
                                    <ViewGridIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                    />
                                </button>
                                <button
                                    type="button"
                                    className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">Filters</span>
                                    <FilterIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </div>
                        <section
                            aria-labelledby="products-heading"
                            className="pt-6 pb-24"
                        >
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                                {/* Filters */}
                                <form className="hidden lg:block">
                                    {filters.map((section) => (
                                        <Disclosure
                                            as="div"
                                            key={section.id}
                                            className="border-b border-gray-200 py-6"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">
                                                                {section.name}
                                                            </span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusSmIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusSmIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            {section.options.map(
                                                                (
                                                                    option,
                                                                    optionIdx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            option.value
                                                                        }
                                                                        className="flex items-center"
                                                                    >
                                                                        <input
                                                                            id={`filter-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={
                                                                                option.value
                                                                            }
                                                                            type="checkbox"
                                                                            defaultChecked={
                                                                                option.checked
                                                                            }
                                                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                            className="ml-3 text-sm text-gray-600"
                                                                        >
                                                                            {
                                                                                option.label
                                                                            }
                                                                        </label>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>
                                {/* Product grid */}
                                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8 lg:grid-cols-3">
                                    {nfts.map((nft) => (
                                        <NftCard
                                            key={nft.id}
                                            nft={nft}
                                            onClick={() =>
                                                handleNftCardClick(nft)
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                            <SwingConverter />
                        </section>
                    </main>
                </div>
            </div>
            <NftModal
                close={() => setIsNftModalOpen(false)}
                nft={currentNft}
                open={isNftModalOpen}
            />
            <Footer />
        </AuthRoute>
    )
}
