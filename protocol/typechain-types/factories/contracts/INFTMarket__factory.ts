/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INFTMarket,
  INFTMarketInterface,
} from "../../contracts/INFTMarket";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "CancelNFTListing",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "lender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "minimumDuration",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "maximumEndTime",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "pricePerDay",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Payment",
        name: "payment",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "collateralToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "collateralAmount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Collateral",
        name: "collateral",
        type: "tuple",
      },
    ],
    name: "NFTListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "renter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "maximumEndTime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "minimumDuration",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "pricePerDay",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Payment",
        name: "payment",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "collateralToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "collateralAmount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Collateral",
        name: "collateral",
        type: "tuple",
      },
    ],
    name: "NFTRented",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "cancelNFTListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getListing",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "lender",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "maximumEndTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "minimumDuration",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "createTime",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "renter",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "paymentToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "pricePerDay",
                type: "uint256",
              },
            ],
            internalType: "struct Payment",
            name: "payment",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "collateralToken",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "collateralAmount",
                type: "uint256",
              },
            ],
            internalType: "struct Collateral",
            name: "collateral",
            type: "tuple",
          },
        ],
        internalType: "struct NFTListing",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "minimumDuration",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "maximumEndTime",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "pricePerDay",
            type: "uint256",
          },
        ],
        internalType: "struct Payment",
        name: "payment",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "collateralToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "collateralAmount",
            type: "uint256",
          },
        ],
        internalType: "struct Collateral",
        name: "collateral",
        type: "tuple",
      },
    ],
    name: "listNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "maximumEndTime",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "minimumDuration",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "pricePerDay",
            type: "uint256",
          },
        ],
        internalType: "struct Payment",
        name: "payment",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "collateralToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "collateralAmount",
            type: "uint256",
          },
        ],
        internalType: "struct Collateral",
        name: "collateral",
        type: "tuple",
      },
    ],
    name: "rentNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "renter",
        type: "address",
      },
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "returnRentedNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "txId",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class INFTMarket__factory {
  static readonly abi = _abi;
  static createInterface(): INFTMarketInterface {
    return new utils.Interface(_abi) as INFTMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INFTMarket {
    return new Contract(address, _abi, signerOrProvider) as INFTMarket;
  }
}
