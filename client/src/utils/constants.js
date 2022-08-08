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
            sender: '0x08F7254B0ff232531b8a29B63b3D3DDF5D41f42F',
            receiver: '0x3EEc5E941c318ba3Fe7Dd2E1Cbf27E6e0532486f',
            nft: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
            weth: '0xA52B98042C34f8C1F02111593862610A63a4AF2E',
        },
    ],
    [
        2501,
        {
            name: 'Avalanche',
            rpc: 'http://localhost:8500/1',
            sender: '0x1Eb966b012Ecdb0ec0EfB30A127f4cF36e4faF8B',
            receiver: '0x9C7010Dd10a684e8E20005c995891d0f21DDb198',
            nft: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
            weth: '0x5B0fB4d7E567ec45d8EE760e353c515321Ae53a6',
        },
    ],
])
