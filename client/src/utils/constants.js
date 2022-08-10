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
            market: '0x205a725d4b0E46436B6B8ABE5b024B5302b91593',
            nft: '0xc5F1743Cf48B2877f8955dCe802eE4b9062b247E',
            wmatic: '0x322c2A44Ab092c982e539d086BA25a8b5f8F5FfC',
        },
    ],
])
