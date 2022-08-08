require('dotenv').config()

export const chains: Array<Object> = [
    {
        name: 'Polygon',
        chainId: 80001,
        gateway: '0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B',
        rpc: 'https://polygon-mumbai.g.alchemy.com/v2/Ksd4J1QVWaOJAJJNbr_nzTcJBJU-6uP3',
        gasReceiver: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6',
        tokenName: 'Matic',
        tokenSymbol: 'MATIC',
        executableSample: '0x49Bd72FD6f59B57418DA42521628EfFD7df9DB1B',
        constAddressDeployer: '0xd5bf7311032fe5dde956de6f2916f135a140e7dd',
        crossChainToken: '0xb5ADB662B1DebDCc96c4d7c406aDF20F310aEe0B',
    },
    {
        name: 'Moonbeam',
        chainId: 1287,
        gateway: '0x5769D84DD62a6fD969856c75c7D321b84d455929',
        rpc: 'https://moonbeam-alpha.api.onfinality.io/public',
        gasReceiver: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6',
        tokenName: 'DEV',
        tokenSymbol: 'DEV',
        executableSample: '0x2120A291a99746726CFa3bCcd3C388da75f7e718',
        constAddressDeployer: '0xd5bf7311032fe5dde956de6f2916f135a140e7dd',
        crossChainToken: '0xb5ADB662B1DebDCc96c4d7c406aDF20F310aEe0B',
    },
]
