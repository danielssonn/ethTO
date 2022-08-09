import { Link } from 'react-router-dom'

import AuthRoute from '../components/AuthRoute'
import { Footer, Header } from '../components'

const nfts = [
    {
        id: 1,
        name: 'Bored Ape Yacht Club',
        price: '50',
        token: '#3',
        imageSrc:
            'https://ipfs.io/ipfs/QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6',
        imageAlt: 'Bored Ape Yacht Club #3',
        daysAvailable: 28,
        isCurrent: false,
    },
    {
        id: 2,
        name: 'Bored Ape Yacht Club',
        price: '140',
        token: '#9',
        imageSrc:
            'https://ipfs.io/ipfs/QmUQgKka8EW7exiUHnMwZ4UoXA11wV7NFjHAogVAbasSYy',
        imageAlt: 'Bored Ape Yacht Club #9',
        daysAvailable: 28,
        isCurrent: true,
    },
    {
        id: 3,
        name: 'Bored Ape Yacht Club',
        price: '50',
        token: '#6',
        imageSrc:
            'https://ipfs.io/ipfs/QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV',
        imageAlt: 'Bored Ape Yacht Club #6',
        daysAvailable: 28,
        isCurrent: true,
    },
    {
        id: 4,
        name: 'Bored Ape Yacht Club',
        price: '140',
        token: '#1',
        imageSrc:
            'https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi',
        imageAlt: 'Bored Ape Yacht Club #1',
        daysAvailable: 28,
        isCurrent: true,
    },
]

export default function Departures() {
    return (
        <AuthRoute>
            <Header />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">
                            Departures
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the NFTs you rented.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Days available
                                            </th>
                                            <th
                                                scope="col"
                                                className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                                            >
                                                <span className="sr-only">
                                                    Rent
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {nfts.map((nft) => (
                                            <tr key={nft?.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                    <div className="flex items-center">
                                                        <div className="h-40 w-40 flex-shrink-0">
                                                            <Link
                                                                disabled={
                                                                    nft?.isCurrent
                                                                }
                                                                to="/checkout/ethereum/0x123b30e25973fecd8354dd5f41cc45a3065ef88c/1"
                                                            >
                                                                <img
                                                                    className="h-40 w-40 rounded-lg"
                                                                    src={
                                                                        nft?.imageSrc
                                                                    }
                                                                    alt={
                                                                        nft?.imageAlt
                                                                    }
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="font-medium text-gray-900">
                                                                <Link
                                                                    disabled={
                                                                        nft?.isCurrent
                                                                    }
                                                                    to="/checkout/ethereum/0x123b30e25973fecd8354dd5f41cc45a3065ef88c/1"
                                                                >
                                                                    {nft?.name}
                                                                </Link>
                                                            </div>
                                                            <div className="text-gray-500">
                                                                <Link
                                                                    disabled={
                                                                        nft?.isCurrent
                                                                    }
                                                                    to="/checkout/ethereum/0x123b30e25973fecd8354dd5f41cc45a3065ef88c/1"
                                                                >
                                                                    {nft?.token}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <div className="text-gray-900 flex items-center">
                                                        <img
                                                            src="https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"
                                                            alt="Polygon"
                                                            className="w-8 h-8 rounded-md object-center object-cover"
                                                        />
                                                        <p className="ml-2">
                                                            {nft?.price}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        {nft?.isCurrent
                                                            ? 'Active'
                                                            : 'Rented'}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {nft?.daysAvailable}
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <Link
                                                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                                        disabled={
                                                            nft?.isCurrent
                                                        }
                                                        to="/checkout/ethereum/0x123b30e25973fecd8354dd5f41cc45a3065ef88c/1"
                                                    >
                                                        Rent
                                                        <span className="sr-only">
                                                            , {nft?.name}
                                                        </span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </AuthRoute>
    )
}
