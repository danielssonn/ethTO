export const CHAIN_MAP = new Map([
    [133, { name: 'polygon' }],
    // Add Avalanche
    [1, { name: 'ethereum' }],
    // Local
    [
        2500,
        {
            name: 'Polygon',
            rpc: 'http://localhost:8500/0',
            market: '0x08F7254B0ff232531b8a29B63b3D3DDF5D41f42F',
            nft: '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
            wmatic: '0x1A3de3A4d24f63604a8efF9A8e8BDf639F9cECF8',
        },
    ],
    [
        2501,
        {
            name: 'Avalanche',
            rpc: 'http://localhost:8500/1',
            market: '0x1Eb966b012Ecdb0ec0EfB30A127f4cF36e4faF8B',
            nft: '0x9C7010Dd10a684e8E20005c995891d0f21DDb198',
            wmatic: '0x2eD5b6eD872d3D9b76b08c9FB15F249864eA50E3',
        },
    ],
])
