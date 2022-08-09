export default function NftCard({ listing, onClick }) {
    const { nft } = listing
    return (
        <button
            className="group text-sm text-left"
            onClick={() => onClick(listing)}
        >
            <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                    src={nft?.image}
                    alt={nft?.name}
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{nft?.name}</h3>
            <p className="text-gray-500">#{listing?.tokenId}</p>
            <div className="mt-2 font-medium text-gray-900 flex items-center">
                <img
                    src="https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"
                    alt=""
                    className="w-8 h-8 rounded-md object-center object-cover"
                />
                <p className="ml-2">Price/Day: {listing.pricePerDay}</p>
            </div>
        </button>
    )
}
