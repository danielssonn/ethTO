## 💻 Get started with Conveyr _locally_ in 5 minutes

To run the dev environment you'll need to start the local blockchains in the `./protocol` directory in a separate terminal.

`cd ./protocol && npx hardhat run ./scripts/dev.ts`

The script will output details about each supported chain. You'll need to add the local chain networks to your Metamask. Take note of the `rpc` and `chainId` values that print out for each chain. They look like this:

```js
{
  name: 'Polygon',
  chainId: 2500,
  gateway: '0x186038359000c32da660ecA49C3d494001A30Ffe',
  gasReceiver: '0xe90560ba227BA579eb4D883abe73E85a9123a615',
  constAddressDeployer: '0x69aeB7Dc4f2A86873Dae8D753DE89326Cf90a77a',
  tokens: {},
  rpc: 'http://localhost:8500/0',
  tokenName: 'Matic',
  tokenSymbol: 'MATIC'
}
```

Open the settings in Metamask and choose "Networks", click "Add Network". For each local chain choose a name and enter the `chainId`, `rpc`, and the `tokenSymbol` values and click "Save".

Next, you'll need to add a wallet to these new networks. In the output of the local blockchains you'll see a list of ten wallet keys with the balance. Copy the `privateKey` of the first wallet. In Metamask, click the avatar in the top right and choose "Import Account". In the dropdown, choose "Private Key" and paste the `privateKey` from the local blockchain output. Repeat this step for each local blockchain.

```js
;[
    {
        address: '0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB',
        balance: '999999999999.978545215973228486',
        privateKey:
            '0x7d8ec2ecb35763d264acda56859719bd7f222a0d3cc0f18d5716ccb25138b691',
    },
    'etc...',
]
```

Now that you have the local blockchains set up and your Metamask is configured to interact with them, you can start the dApp's local server. Change directories to the `./client` directory in a new terminal window and start the server with `npm run dev`. Make sure that your Metamask in on one of the local blockchain networks.
