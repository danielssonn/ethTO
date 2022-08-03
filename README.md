
![Cross Chain UX Rocks](assets/cross-chain-ux-rocks.svg)
![Powered by Axelar](assets/powered-by-axelar.svg)
![Made with SwingXYZ](assets/made-with-swing.xyz.svg)


![Runs On Moonbeam](assets/runs-on-moonbeam.svg)
![Runs On Ethereum](assets/runs-on-ethereum.svg)
![Runs On Polygon](assets/runs-on-polygon.svg)






# The future is multi-chain, but where is your wallet?

## Creating a seamless cross chain NFT renting experience
<br><br>

<p>

  <a href="https://amplication.com" target="_blank">
    <img alt="amplication-logo" height="70" alt="Amplication Logo" src="https://amplication.com/images/amplication-logo-purple.svg"/>
  </a>
</p>


![Dashboard](assets/dashboard-main.png)

:point_right: [Our Glorious Deployment URL](https://here.xyz) :point_left:

---

Contents
===

 * [Why we built it](#why-we-built-it)
 * [What we built](#What-we-built)
 * [How we built it](#How-we-built)



 ### Why we built it

+ There are many blockchains out there, each with great assets and communities
+ The future is definitely multi-chain!   
+ However, the User eXperience of interacting with multiple chains is cumbersome
    + Multiple wallets need to be created and navigated by the user
    + Tokens need to be swapped around, also by the user
    + It is so easy to make a mistake, lose out on an opportunity, or simply get discouraged

 ### What we built
 + Cross-chain NFT renting experience
 + With simple and straightforward UX
 + No matter what chain and which wallet or tokens you have 
 + You can list and rent NFTs on multiple chains, without the multi chain hassle

 
 ### How we built it
 + We have created NFT renting contracts for lenders and renters
 + We have deployed the contracts on Polygon and Moonbeam
    - [Mumbai Polygonscan](https://mumbai.polygonscan.com/address/0x8c787c95e9f1bbc6153336571b7ab58cd57ad98c) 
    - [Moonbase Alpha](https://moonbase.moonscan.io/token/0xec19ebb094269b2782fbab3b5ce6e3cb4dea86a2)
    
 + Mixed in some Axelar magic to make the contracts **cross-chain BFF!**
    - [Axelar dashboard](https://axelar.network/)
    
 + Sprinkled SwingXYX to automate token conversion for payments and collateral between ETH and GLMR
 + Designed UI where Lenders and Renters do not need to worry about blockchain details
    - [Our Glorious Deployment URL](https://here.xyz)

#### Details
 ```json
    "@alch/alchemy-web3": "^1.2.3",
    "@openzeppelin/contracts": "^4.7.0",
    "@openzeppelin/contracts-ethereum-package": "^3.0.0",
    "@openzeppelin/upgrades": "^2.8.0",
    "bignumber": "^1.1.0",
    "hardhat-abi-exporter": "^2.10.0"
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

# ethTO

Cross-chain NFT renting marketplace.

## Table of Contents

- [Scaffolding](#scaffolding)
- [Contributing](#contributing)
  - [Types](#types)
  - [Branches](#branches)
  - [Commits](#commits)
  - [Pull Requests](#pull-requests)
  - [Merging Into Main](#merging-into-main)

## Scaffolding

### Scaffolding the client with Vite and Tailwind

```shell
cd /client
npm install,
npm run dev
```

### Scaffolding the protocol with Hardhat

```shell
cd /protocol,
npm install
```

### Scaffolding the oracles

```shell
cd /oracles,
npm install
```

## Contributing

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
