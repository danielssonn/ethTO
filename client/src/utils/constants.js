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
            sender: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
            receiver: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
            nft: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
            weth: '0xA52B98042C34f8C1F02111593862610A63a4AF2E',
        },
    ],
    [
        2501,
        {
            name: 'Avalanche',
            rpc: 'http://localhost:8500/1',
            sender: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
            receiver: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
            nft: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
            weth: '0x5B0fB4d7E567ec45d8EE760e353c515321Ae53a6',
        },
    ],
])
