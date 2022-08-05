export default function NftCard({ nft, onClick }) {
    return (
        <button
            key={nft?.id}
            href={nft?.href}
            className="group text-sm text-left"
            onClick={onClick}
        >
            <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                    src={nft?.imageSrc}
                    alt={nft?.imageAlt}
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{nft?.name}</h3>
            <p className="text-gray-500">{nft?.token}</p>
            <p className="mt-2 font-medium text-gray-900">{nft?.price}</p>
        </button>
    )
}
