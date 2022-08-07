// import { Network } from '@axelar-network/axelar-local-dev/dist/Network'
// import { assert, expect } from 'chai'
// import { BigNumber, Contract, Wallet } from 'ethers'
// import { describe } from 'mocha'
// import { setupNetworks } from '../../scripts/deploy'
// import { rent } from '../../scripts/rent'
// import { ethers } from 'hardhat'
// import { Payment, Collateral, nftListing } from '../../scripts/types'

// describe('Rent script integration', async function () {
//   // NFT setup and rental parameters
//   let nftAddress: string | undefined
//   let tokenId: BigNumber | undefined
//   const daysToRent = 10
//   let listing: nftListing | undefined
//   let payment: Payment | undefined
//   let collateral: Collateral | undefined

//   // network setup
//   let avalanche: Network | undefined
//   let ethereum: Network | undefined

//   // axelar contracts
//   let ethereumMarketPlace: Contract | undefined
//   let avalancheMarketPlace: Contract | undefined

//   // actors
//   let renter: Wallet | undefined
//   let lender: Wallet | undefined

//   // erc20 tokens contracts
//   let ether: Contract | undefined
//   let avax: Contract | undefined

//   before(async () => {
//     const deployments = await setupNetworks()

//     // setup ethereum marketplace on ethereum network
//     const ethereumDeployment = deployments.find(
//       (deployment) => deployment.chain.name === 'Ethereum'
//     )
//     ethereum =  ethereumDeployment!.chain
//     ethereumMarketPlace = ethereumDeployment!.contract
//     lender = ethereum.userWallets[1]
//     ether = await ethereum.deployToken(
//       'wrapped Ether',
//       'wETH',
//       6,
//       BigInt(100_000_000e6)
//     )
//     await ethereum.giveToken(lender.address, 'wETH', BigInt(100e6))

//     // setup avalanche marketplace on avalanche network
//     const avalancheDeployment = deployments.find(
//       (deployment) => deployment.chain.name === 'Avalanche'
//     )
//     avalanche = avalancheDeployment!.chain
//     avalancheMarketPlace = avalancheDeployment!.contract
//     renter = avalanche.userWallets[1]
//     avax = await avalanche.deployToken(
//       'wrapped AVAX',
//       'wAVAX',
//       6,
//       BigInt(100_000_000e6)
//     )
//     await avalanche.giveToken(renter.address, 'wETH', BigInt(100e6))

//     // deploy NFT on ethereum
//     const NFTDummy = await ethers.getContractFactory(
//       'NFTDummy',
//       ethereum.userWallets[0]
//     )
//     const nftDummy = await NFTDummy.deploy({ args: 'https://www.example.com' })
//     await nftDummy.deployed()
//     tokenId = await (await nftDummy.connect(lender).mint()).wait()

//     // list nft on ethereum
//     payment = {
//       paymentToken: ether!.address,
//       pricePerDay: ethers.utils.parseEther('1000'),
//     }
//     collateral = {
//       collateralToken: ether!.address,
//       collateralAmount: ethers.utils.parseEther('1000'),
//     }
//     const maxEndTime = BigInt(8640000)
//     await (
//       await ethereumMarketPlace!
//         .connect(lender)
//         .listNFT(nftAddress, tokenId, maxEndTime, payment!, collateral!)
//     ).wait()
//   })
//   // describe('failure scenario for rent', async function() {
//   //     it('should fail when providing invalid chain name', async () => {
//   //         try {
//   //             await rent(
//   //                 'NON EXISTING CHAIN',
//   //                 'NON EXISTING CHAIN',
//   //                 nftAddress!,
//   //                 tokenId!,
//   //                 daysToRent,
//   //                 listing!,
//   //             )
//   //         } catch (error) {
//   //             expect(error).to.be.instanceOf(Error);
//   //             expect(error.message).to.be.equal('Invalid Chain Name Provided');
//   //         }
//   //     })
//   // })
//   describe('success scenario for rent', async function () {
//     this.beforeEach(async () => {
//       await rent(
//         'Ethereum',
//         'Avalanche',
//         nftAddress!,
//         tokenId!,
//         daysToRent,
//         listing!
//       )
//     })
//     it('should lock in the collateral', async () => {
//       const collateralDeposited = await avax!.balanceOf(
//         avalancheMarketPlace!.address
//       )
//       assert.equal(
//         collateralDeposited,
//         collateral?.collateralAmount,
//         'Failure in depositing collateral'
//       )
//     })
//     it('should transfer tokens to the lender', async () => {
//       const lenderPayment = await ether!.balanceOf(lender!.address)
//       const paymentAmount = payment!.pricePerDay.mul(daysToRent)
//       assert.equal(
//         lenderPayment,
//         paymentAmount,
//         'Failure in sending the payment'
//       )
//     })
//     it('should decrease renter balance', async () => {
//       // TODO: update as soon as we know Axelar transfer fees and swing xyz fees
//       assert(false)
//     })
//     describe('should mark the NFT as rented', async function () {
//       before('retrieving the listing', async function () {
//         listing = await ethereumMarketPlace!.getListing(nftAddress, tokenId)
//       })
//       it('should set the listing payment', async () => {
//         assert.equal(listing!.payment, payment, 'listing payment inconsistent')
//       })
//       it('should set the listing collateral', async () => {
//         assert.equal(
//           listing!.collateral,
//           collateral,
//           'listing collateral inconsistent'
//         )
//       })
//       it('should set the listing rental period', async () => {
//         const rental = {
//           renter: renter!.address,
//           expiryTime: BigNumber.from(daysToRent).mul(86400), // blocks in a day
//         }
//         assert.equal(listing!.rental, rental, 'listing collateral inconsistent')
//       })
//     })
//   })
// })
