import { Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import cn from 'classnames'

import useWeb3 from '../hooks/use-web3'
import IMAGES from '../../images'
import { SwingModal2 } from '../components'

export default function Header() {
    const [isSwingModalOpen, setIsSwingModalOpen] = useState(false)
    const { pathname } = useLocation()
    const { currentAccount } = useWeb3()

    // const handleSwapTokensClick = () => {
    //     setIsSwingModalOpen(true)
    // }

    return (
        <>
            <Popover className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <span className="sr-only">Conveyr</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src={IMAGES.logo}
                                    alt="Conveyr logo"
                                />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>
                        <Popover.Group
                            as="nav"
                            className="hidden md:flex space-x-10"
                        >
                            <Link
                                className={cn(
                                    'text-base font-medium text-gray-500 hover:text-gray-900',
                                    pathname === '/arrivals' && 'underline'
                                )}
                                to="/arrivals"
                            >
                                Arrivals
                            </Link>
                            <Link
                                className={cn(
                                    'text-base font-medium text-gray-500 hover:text-gray-900',
                                    pathname === '/departures' && 'underline'
                                )}
                                to="/departures"
                            >
                                Departures
                            </Link>
                        </Popover.Group>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            {/* <button
                                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                onClick={handleSwapTokensClick}
                            >
                                Swap tokens
                            </button> */}
                            {/* <button
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                                disabled
                            >
                                0xEA9B...880D
                            </button> */}
                            <div className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                {`${currentAccount.slice(
                                    0,
                                    6
                                )}...${currentAccount.slice(-4)}`}
                            </div>
                        </div>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src={IMAGES.logo}
                                                alt="Conveyr logo"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                                <span className="sr-only">
                                                    Close menu
                                                </span>
                                                <XIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Link
                                            href="/arrivals"
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            Arrivals
                                        </Link>
                                        <Link
                                            href="/departures"
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            Departures
                                        </Link>
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                                            disabled
                                        >
                                            0xEA9B...880D
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </div>
            </Popover>
            <SwingModal2
                close={() => setIsSwingModalOpen(false)}
                open={isSwingModalOpen}
            />
        </>
    )
}
