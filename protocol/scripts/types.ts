import { BigNumber } from 'ethers'

export type Payment = {
  paymentToken: string
  pricePerDay: BigNumber
}

export type Rental = {
  renter: string
  expiryTime: BigNumber
}

export type Collateral = {
  collateralToken: string
  collateralAmount: BigNumber
}

export type nftListing = {
  lender: string
  maximumEndTime: BigNumber
  createTime: BigNumber
  rental: Rental
  payment: Payment
  collateral: Collateral
}
