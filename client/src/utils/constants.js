export const CHAIN_MAP = new Map([
    [133, { name: 'polygon' }],
    // Add Avalanche
    [1, { name: 'ethereum' }],
    // Local
    [31337, { name: 'ethereum', contract: CONTRACT_ETHEREUM_DEV }], // eslint-disable-line
])
