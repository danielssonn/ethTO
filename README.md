<p align="center">
  <a href="https://conveyr.xyz/">
    <img alt="Conveyr" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" width="60" />
  </a>
</p>

<h1 align="center">
  Conveyr: Cross-Chain NFT Renting
</h1>

<p align="center">
  ⚔️ ⛓️ 🤑
</p>

<p align="center">
  <strong>
    Cross. Chain. NFT Renting.
  </strong>
</p>

<p align="center">
  The future is multi-chain, but where is your wallet?<br>Creating a seamless cross chain NFT renting experience.
</p>

<p align="center">
<a>[<img src="assets/cross-chain-ux-rocks.svg" alt="Cross Chain UX Rocks">](https://conveyr.xyz/)</a>
<a>![Powered by Axelar](assets/powered-by-axelar.svg)</a>
<a>![Made with SwingXYZ](assets/made-with-swing.xyz.svg)</a>
<a>![Runs On Moonbeam](assets/runs-on-moonbeam.svg)</a>
<a>![Runs On Ethereum](assets/runs-on-ethereum.svg)</a>
<a>![Runs On Polygon](assets/runs-on-polygon.svg)</a>
</p>

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Contributing](#contributing)
  - [Types](#types)
  - [Branches](#branches)
  - [Commits](#commits)
  - [Pull Requests](#pull-requests)
  - [Merging Into Main](#merging-into-main)
- [License](#license)

Story goes here Story goes here Story goes here Story goes here Story goes here Story goes here Story goes here Story goes here Story goes here

- **Rent NFTs From Anywhere.** Conveyr pulls NFTs from any chain, whether it’s Ethereum, a Layer-2 scaling sidechain solution like Polygon, or Moonbeam.
- **Some Feature.** Some description.
- **Some Feature.** Some description.
- **Some Feature.** Some description.
- **Some Feature.** Some description.

[<img src="assets/dashboard-main.png" alt="Conveyr">](https://conveyr.xyz/)

[**👉 [Our Glorious Deployment URL](https://here.xyz) 👈**](https://www.gatsbyjs.com/docs/)

### Why we built it

- There are many blockchains out there, each with great assets and communities
- The future is definitely multi-chain!
- However, the User eXperience of interacting with multiple chains is cumbersome
  - Multiple wallets need to be created and navigated by the user
  - Tokens need to be swapped around, also by the user
  - It is so easy to make a mistake, lose out on an opportunity, or simply get discouraged

### What we built

- Cross-chain NFT renting experience
- With simple and straightforward UX
- No matter what chain and which wallet or tokens you have
- You can list and rent NFTs on multiple chains, without the multi chain hassle

### How we built it

- We have created NFT renting contracts for lenders and renters
- We have deployed the contracts on Polygon and Moonbeam
  - [Mumbai Polygonscan](https://mumbai.polygonscan.com/address/0x8c787c95e9f1bbc6153336571b7ab58cd57ad98c)
  - [Moonbase Alpha](https://moonbase.moonscan.io/token/0xec19ebb094269b2782fbab3b5ce6e3cb4dea86a2)
- Mixed in some Axelar magic to make the contracts **cross-chain BFF!**
  - [Axelar dashboard](https://axelar.network/)
- Sprinkled SwingXYX to automate token conversion for payments and collateral between ETH and GLMR
- Designed UI where Lenders and Renters do not need to worry about blockchain details
  - [Our Glorious Deployment URL](https://conveyr.xyz/)

## ✨ Features

- [Conventional Commits](https://www.conventionalcommits.org/)—as the specification for commit messages.
- [GitHub Actions](https://github.com/features/actions)—for CI/CD.
- [lint-staged](https://github.com/okonet/lint-staged)—for pre-commit code formatting and linting.
- [Prettier](https://prettier.io/)—for code formatting.

## 💻 Get Started with Conveyr _locally_ in 5 minutes

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
[
  {
    address: "0x716dE4a2cfa56eB3E682D6f418Ac4A52F9F535aB",
    balance: "999999999999.978545215973228486",
    privateKey:
      "0x7d8ec2ecb35763d264acda56859719bd7f222a0d3cc0f18d5716ccb25138b691",
  },
  "etc...",
];
```

Now that you have the local blockchains set up and your Metamask is configured to interact with them, you can start the dApp's local server. Change directories to the `./client` directory in a new terminal window and start the server with `npm run dev`. Make sure that your Metamask in on one of the local blockchain networks.

## 🤝 Contributing

Code changes can fall into the types from the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Types

Common types according to [commitlint-config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- **build**—changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).

- **chore**—other changes that don’t modify src or test files.

- **ci**—changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).

- **docs**—documentation only changes.

- **feat**—a new feature.

- **fix**—a bug fix.

- **perf**—a code change that improves performance.

- **refactor**—a code change that neither fixes a bug nor adds a feature.

- **revert**—reverts a previous commit.

- **style**—changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).

- **test**—adding missing tests or correcting existing tests.

### Branches

Branches are created from `main` and can follow the naming convention below. For common types, see [Types](#types).

Convention:

```shell
type/description
```

Example:

```shell
feat/add-xyz
```

### Commits

<s>Conventional Commits are enforced using [commitlint](https://commitlint.js.org/) in a [husky](https://github.com/typicode/husky) pre-commit hook.</s>

Convention:

```shell
type(scope?): description  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Example:

```shell
feat: add xyz
```

### Pull Requests

1.  **Title**

    Titles can follow the naming convention below and match the branch name. For common types, see [Types](#types).

    Convention:

    ```shell
    type: description
    ```

    Example:

    ```shell
    feat: add xyz
    ```

2.  **Body**

    When creating a new pull request, you will automatically see a template with a checklist in the body.

3.  **Reviewers**

    Add at least one reviewer.

4.  **Labels**

    Apply related labels.

### Merging Into Main

Always “Squash & merge” your commits into `main`.

## 🧐 License

Licensed under the [MIT License](./LICENSE).
