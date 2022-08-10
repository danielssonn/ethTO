import { Link } from 'react-router-dom'

import useContract from '../hooks/use-contract'
import AuthRoute from '../components/AuthRoute'
import { Footer, Header } from '../components'
import { deltaDays } from '../utils/days'

export default function Arrivals() {
    const { listings } = useContract()

    return (
        <AuthRoute>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">
                            Arrivals
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the NFTs available to rent.
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
                                                Chain
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
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
                                                Maximum number of days
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
                                        {listings
                                            .filter(
                                                (element) =>
                                                    element.nft.name !==
                                                    'Dummy #0'
                                            )
                                            .map((listing, i) => (
                                                <tr key={`NFTListing ${i}`}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                        <Link
                                                            to={`/checkout/${listing.chainName.toLowerCase()}/${
                                                                listing.nftAddress
                                                            }/${
                                                                listing.tokenId
                                                            }`}
                                                        >
                                                            {listing.chainName}
                                                        </Link>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                        <div className="flex items-center">
                                                            <div className="h-16 w-16 flex-shrink-0">
                                                                <Link
                                                                    to={`/checkout/${listing.chainName.toLowerCase()}/${
                                                                        listing.nftAddress
                                                                    }/${
                                                                        listing.tokenId
                                                                    }`}
                                                                >
                                                                    <img
                                                                        className="h-16 w-16 rounded-lg"
                                                                        src={
                                                                            listing
                                                                                .nft
                                                                                .image
                                                                        }
                                                                        alt={
                                                                            listing
                                                                                .nft
                                                                                .name
                                                                        }
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="font-medium text-gray-900">
                                                                    <Link
                                                                        to={`/checkout/${listing.chainName.toLowerCase()}/${
                                                                            listing.nftAddress
                                                                        }/${
                                                                            listing.tokenId
                                                                        }`}
                                                                    >
                                                                        {
                                                                            listing
                                                                                .nft
                                                                                .name
                                                                        }
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <div className="text-gray-900 flex items-center">
                                                            <Link
                                                                to={`/checkout/${listing.chainName.toLowerCase()}/${
                                                                    listing.nftAddress
                                                                }/${
                                                                    listing.tokenId
                                                                }`}
                                                            >
                                                                <img
                                                                    src="https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"
                                                                    alt="Polygon"
                                                                    className="w-6 h-6 rounded-md object-center object-cover"
                                                                />
                                                            </Link>
                                                            <span className="ml-2">
                                                                <Link
                                                                    to={`/checkout/${listing.chainName.toLowerCase()}/${
                                                                        listing.nftAddress
                                                                    }/${
                                                                        listing.tokenId
                                                                    }`}
                                                                >
                                                                    {
                                                                        listing.pricePerDay
                                                                    }
                                                                    /day
                                                                </Link>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <Link
                                                            to={`/checkout/${listing.chainName.toLowerCase()}/${
                                                                listing.nftAddress
                                                            }/${
                                                                listing.tokenId
                                                            }`}
                                                        >
                                                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                                Active
                                                            </span>
                                                        </Link>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <Link
                                                            to={`/checkout/${listing.chainName.toLowerCase()}/${
                                                                listing.nftAddress
                                                            }/${
                                                                listing.tokenId
                                                            }`}
                                                        >
                                                            {deltaDays(
                                                                listing.maximumEndTime
                                                            )}
                                                        </Link>
                                                    </td>
                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                        <Link
                                                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                                            to={`/checkout/${listing.chainName.toLowerCase()}/${
                                                                listing.nftAddress
                                                            }/${
                                                                listing.tokenId
                                                            }`}
                                                        >
                                                            Rent
                                                            <span className="sr-only">
                                                                ,{' '}
                                                                {
                                                                    listing.nft
                                                                        .name
                                                                }
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
