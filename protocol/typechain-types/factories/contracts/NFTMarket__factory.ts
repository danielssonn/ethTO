/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NFTMarket, NFTMarketInterface } from "../../contracts/NFTMarket";

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
        components: [
          {
            internalType: "address",
            name: "renter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryTime",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Rental",
        name: "rental",
        type: "tuple",
      },
    ],
    name: "NFTLent",
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
        internalType: "uint256",
        name: "maximumEndTime",
        type: "uint256",
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
        components: [
          {
            internalType: "address",
            name: "renter",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiryTime",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Rental",
        name: "rental",
        type: "tuple",
      },
    ],
    name: "NFTRented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
            internalType: "uint256",
            name: "maximumEndTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createTime",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "renter",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "expiryTime",
                type: "uint256",
              },
            ],
            internalType: "struct Rental",
            name: "rental",
            type: "tuple",
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
        internalType: "uint16",
        name: "daysToRent",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "isNativeChain",
        type: "bool",
      },
    ],
    name: "lend",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "uint256",
        name: "maximumEndTime",
        type: "uint256",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
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
        internalType: "uint16",
        name: "daysToRent",
        type: "uint16",
      },
    ],
    name: "rent",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5062000032620000266200003f60201b60201c565b6200004760201b60201c565b600180819055506200010b565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b612f51806200011b6000396000f3fe6080604052600436106100c25760003560e01c8063b9be04471161007f578063e800af0e11610059578063e800af0e14610272578063ed5cb476146102a3578063f23a6e61146102cc578063f2fde38b14610309576100c2565b8063b9be0447146101e9578063bc197c8114610219578063db8d5cc114610256576100c2565b806301ffc9a7146100c7578063150b7a021461010457806341b0291214610141578063715018a61461016a57806388700d1c146101815780638da5cb5b146101be575b600080fd5b3480156100d357600080fd5b506100ee60048036038101906100e99190611b90565b610332565b6040516100fb9190611bd8565b60405180910390f35b34801561011057600080fd5b5061012b60048036038101906101269190611dcd565b6103ac565b6040516101389190611e5f565b60405180910390f35b34801561014d57600080fd5b5061016860048036038101906101639190611e7a565b6103c0565b005b34801561017657600080fd5b5061017f6103d6565b005b34801561018d57600080fd5b506101a860048036038101906101a39190611e7a565b6103ea565b6040516101b59190611fe1565b60405180910390f35b3480156101ca57600080fd5b506101d361061b565b6040516101e0919061200c565b60405180910390f35b61020360048036038101906101fe9190611e7a565b610644565b6040516102109190612036565b60405180910390f35b34801561022557600080fd5b50610240600480360381019061023b9190612119565b61064c565b60405161024d9190611e5f565b60405180910390f35b610270600480360381019061026b919061224e565b610661565b005b61028c600480360381019061028791906122b5565b61087a565b60405161029a929190612390565b60405180910390f35b3480156102af57600080fd5b506102ca60048036038101906102c59190612465565b611302565b005b3480156102d857600080fd5b506102f360048036038101906102ee91906124e0565b611590565b6040516103009190611e5f565b60405180910390f35b34801561031557600080fd5b50610330600480360381019061032b9190612577565b6115a5565b005b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103a557506103a482611629565b5b9050919050565b600063150b7a0260e01b9050949350505050565b6103d26103cb611693565b838361169b565b5050565b6103de6118ec565b6103e8600061196a565b565b6103f2611a36565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600582016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600782016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152505081525050905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600092915050565b600063bc197c8160e01b905095945050505050565b600260015414156106a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069e906125f0565b60405180910390fd5b6002600181905550600042620151808461ffff166106c5919061264e565b62ffffff166106d4919061268b565b9050600060405180604001604052806106eb611693565b73ffffffffffffffffffffffffffffffffffffffff168152602001838152509050826107ba5780600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600087815260200190815260200160002060030160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050505b8573ffffffffffffffffffffffffffffffffffffffff166342842e0e306107df611693565b886040518463ffffffff1660e01b81526004016107fe939291906126e1565b600060405180830381600087803b15801561081857600080fd5b505af115801561082c573d6000803e3d6000fd5b505050507fdcb8497c593bb786792fcd024fb45d43bd411e75ccc242350b97d31b6c42f04286868360405161086393929190612747565b60405180910390a150506001808190555050505050565b60606000600260015414156108c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bb906125f0565b60405180910390fd5b60026001819055506000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600582016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600782016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050815250509050600042620151808661ffff16610b07919061264e565b62ffffff16610b16919061268b565b9050600082604001511415610b60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b57906127ca565b60405180910390fd5b60008561ffff1611610ba7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9e9061285c565b60405180910390fd5b8160200151811115610bee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be5906128c8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1682606001516000015173ffffffffffffffffffffffffffffffffffffffff16148015610c3a57506000826060015160200151145b610c79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7090612934565b60405180910390fd5b6000826080015160000151905060008360a0015160000151905060008460800151602001518861ffff16610cad9190612954565b9050808373ffffffffffffffffffffffffffffffffffffffff166370a08231610cd4611693565b6040518263ffffffff1660e01b8152600401610cf0919061200c565b60206040518083038186803b158015610d0857600080fd5b505afa158015610d1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4091906129c3565b1015610d81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7890612a3c565b60405180910390fd5b8460a00151602001518273ffffffffffffffffffffffffffffffffffffffff166370a08231610dae611693565b6040518263ffffffff1660e01b8152600401610dca919061200c565b60206040518083038186803b158015610de257600080fd5b505afa158015610df6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1a91906129c3565b1015610e5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5290612aa8565b60405180910390fd5b8460a001516000015173ffffffffffffffffffffffffffffffffffffffff1685608001516000015173ffffffffffffffffffffffffffffffffffffffff161415610f8b5760008560a001516020015182610eb5919061268b565b9050808473ffffffffffffffffffffffffffffffffffffffff166370a08231610edc611693565b6040518263ffffffff1660e01b8152600401610ef8919061200c565b60206040518083038186803b158015610f1057600080fd5b505afa158015610f24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4891906129c3565b1015610f89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8090612b14565b60405180910390fd5b505b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd610faf611693565b308860a00151602001516040518463ffffffff1660e01b8152600401610fd7939291906126e1565b602060405180830381600087803b158015610ff157600080fd5b505af1158015611005573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110299190612b49565b50604051806040016040528061103d611693565b73ffffffffffffffffffffffffffffffffffffffff16815260200185815250856060018190525084600260008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008b815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155505060808201518160050160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155505060a08201518160070160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015550509050507fd5f86e4b4526d796a88ce410e7a72c3b2599bab2c0f9d0acef0ddf0cd44ca6a18a8a876060015160405161125e93929190612747565b60405180910390a18273ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156112ac57600080fd5b505afa1580156112c0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906112e99190612c17565b8196509650505050505060018081905550935093915050565b60026001541415611348576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133f906125f0565b60405180910390fd5b600260018190555061136261135b611693565b868661169b565b600061136c611693565b90506000600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000209050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550848160010181905550428160020181905550838160050160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050828160070160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050508673ffffffffffffffffffffffffffffffffffffffff166342842e0e8330896040518463ffffffff1660e01b8152600401611506939291906126e1565b600060405180830381600087803b15801561152057600080fd5b505af1158015611534573d6000803e3d6000fd5b505050507f33375d78bcb09790857a4583927d3ac93d1f98336fa490a47304999668620f0d611561611693565b888888888860405161157896959493929190612cbe565b60405180910390a15050600180819055505050505050565b600063f23a6e6160e01b905095945050505050565b6115ad6118ec565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561161d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161490612d92565b60405180910390fd5b6116268161196a565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b60008273ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004016116d69190612036565b60206040518083038186803b1580156116ee57600080fd5b505afa158015611702573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117269190612dc7565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061181557508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1663081812fc846040518263ffffffff1660e01b81526004016117ad9190612036565b60206040518083038186803b1580156117c557600080fd5b505afa1580156117d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117fd9190612dc7565b73ffffffffffffffffffffffffffffffffffffffff16145b806118a757508273ffffffffffffffffffffffffffffffffffffffff1663e985e9c582866040518363ffffffff1660e01b8152600401611856929190612df4565b60206040518083038186803b15801561186e57600080fd5b505afa158015611882573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118a69190612b49565b5b6118e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118dd90612e8f565b60405180910390fd5b50505050565b6118f4611a2e565b73ffffffffffffffffffffffffffffffffffffffff1661191261061b565b73ffffffffffffffffffffffffffffffffffffffff1614611968576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195f90612efb565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001611a74611a94565b8152602001611a81611ac4565b8152602001611a8e611af4565b81525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611b6d81611b38565b8114611b7857600080fd5b50565b600081359050611b8a81611b64565b92915050565b600060208284031215611ba657611ba5611b2e565b5b6000611bb484828501611b7b565b91505092915050565b60008115159050919050565b611bd281611bbd565b82525050565b6000602082019050611bed6000830184611bc9565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c1e82611bf3565b9050919050565b611c2e81611c13565b8114611c3957600080fd5b50565b600081359050611c4b81611c25565b92915050565b6000819050919050565b611c6481611c51565b8114611c6f57600080fd5b50565b600081359050611c8181611c5b565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611cda82611c91565b810181811067ffffffffffffffff82111715611cf957611cf8611ca2565b5b80604052505050565b6000611d0c611b24565b9050611d188282611cd1565b919050565b600067ffffffffffffffff821115611d3857611d37611ca2565b5b611d4182611c91565b9050602081019050919050565b82818337600083830152505050565b6000611d70611d6b84611d1d565b611d02565b905082815260208101848484011115611d8c57611d8b611c8c565b5b611d97848285611d4e565b509392505050565b600082601f830112611db457611db3611c87565b5b8135611dc4848260208601611d5d565b91505092915050565b60008060008060808587031215611de757611de6611b2e565b5b6000611df587828801611c3c565b9450506020611e0687828801611c3c565b9350506040611e1787828801611c72565b925050606085013567ffffffffffffffff811115611e3857611e37611b33565b5b611e4487828801611d9f565b91505092959194509250565b611e5981611b38565b82525050565b6000602082019050611e746000830184611e50565b92915050565b60008060408385031215611e9157611e90611b2e565b5b6000611e9f85828601611c3c565b9250506020611eb085828601611c72565b9150509250929050565b611ec381611c13565b82525050565b611ed281611c51565b82525050565b604082016000820151611eee6000850182611eba565b506020820151611f016020850182611ec9565b50505050565b604082016000820151611f1d6000850182611eba565b506020820151611f306020850182611ec9565b50505050565b604082016000820151611f4c6000850182611eba565b506020820151611f5f6020850182611ec9565b50505050565b61012082016000820151611f7c6000850182611eba565b506020820151611f8f6020850182611ec9565b506040820151611fa26040850182611ec9565b506060820151611fb56060850182611ed8565b506080820151611fc860a0850182611f07565b5060a0820151611fdb60e0850182611f36565b50505050565b600061012082019050611ff76000830184611f65565b92915050565b61200681611c13565b82525050565b60006020820190506120216000830184611ffd565b92915050565b61203081611c51565b82525050565b600060208201905061204b6000830184612027565b92915050565b600067ffffffffffffffff82111561206c5761206b611ca2565b5b602082029050602081019050919050565b600080fd5b600061209561209084612051565b611d02565b905080838252602082019050602084028301858111156120b8576120b761207d565b5b835b818110156120e157806120cd8882611c72565b8452602084019350506020810190506120ba565b5050509392505050565b600082601f830112612100576120ff611c87565b5b8135612110848260208601612082565b91505092915050565b600080600080600060a0868803121561213557612134611b2e565b5b600061214388828901611c3c565b955050602061215488828901611c3c565b945050604086013567ffffffffffffffff81111561217557612174611b33565b5b612181888289016120eb565b935050606086013567ffffffffffffffff8111156121a2576121a1611b33565b5b6121ae888289016120eb565b925050608086013567ffffffffffffffff8111156121cf576121ce611b33565b5b6121db88828901611d9f565b9150509295509295909350565b600061ffff82169050919050565b6121ff816121e8565b811461220a57600080fd5b50565b60008135905061221c816121f6565b92915050565b61222b81611bbd565b811461223657600080fd5b50565b60008135905061224881612222565b92915050565b6000806000806080858703121561226857612267611b2e565b5b600061227687828801611c3c565b945050602061228787828801611c72565b93505060406122988782880161220d565b92505060606122a987828801612239565b91505092959194509250565b6000806000606084860312156122ce576122cd611b2e565b5b60006122dc86828701611c3c565b93505060206122ed86828701611c72565b92505060406122fe8682870161220d565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015612342578082015181840152602081019050612327565b83811115612351576000848401525b50505050565b600061236282612308565b61236c8185612313565b935061237c818560208601612324565b61238581611c91565b840191505092915050565b600060408201905081810360008301526123aa8185612357565b90506123b96020830184612027565b9392505050565b600080fd5b6000604082840312156123db576123da6123c0565b5b6123e56040611d02565b905060006123f584828501611c3c565b600083015250602061240984828501611c72565b60208301525092915050565b60006040828403121561242b5761242a6123c0565b5b6124356040611d02565b9050600061244584828501611c3c565b600083015250602061245984828501611c72565b60208301525092915050565b600080600080600060e0868803121561248157612480611b2e565b5b600061248f88828901611c3c565b95505060206124a088828901611c72565b94505060406124b188828901611c72565b93505060606124c2888289016123c5565b92505060a06124d388828901612415565b9150509295509295909350565b600080600080600060a086880312156124fc576124fb611b2e565b5b600061250a88828901611c3c565b955050602061251b88828901611c3c565b945050604061252c88828901611c72565b935050606061253d88828901611c72565b925050608086013567ffffffffffffffff81111561255e5761255d611b33565b5b61256a88828901611d9f565b9150509295509295909350565b60006020828403121561258d5761258c611b2e565b5b600061259b84828501611c3c565b91505092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b60006125da601f83612313565b91506125e5826125a4565b602082019050919050565b60006020820190508181036000830152612609816125cd565b9050919050565b600062ffffff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061265982612610565b915061266483612610565b92508162ffffff04831182151516156126805761267f61261f565b5b828202905092915050565b600061269682611c51565b91506126a183611c51565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156126d6576126d561261f565b5b828201905092915050565b60006060820190506126f66000830186611ffd565b6127036020830185611ffd565b6127106040830184612027565b949350505050565b60408201600082015161272e6000850182611eba565b5060208201516127416020850182611ec9565b50505050565b600060808201905061275c6000830186611ffd565b6127696020830185612027565b6127766040830184612718565b949350505050565b7f54686973206c697374696e6720646f6573206e6f742065786973740000000000600082015250565b60006127b4601b83612313565b91506127bf8261277e565b602082019050919050565b600060208201905081810360008301526127e3816127a7565b9050919050565b7f5468652072656e74616c20706572696f64206d7573742062652067726561746560008201527f72207468616e2030206461797300000000000000000000000000000000000000602082015250565b6000612846602d83612313565b9150612851826127ea565b604082019050919050565b6000602082019050818103600083015261287581612839565b9050919050565b7f52656e74616c2074696d656672616d6520746f6f206c6f6e672e000000000000600082015250565b60006128b2601a83612313565b91506128bd8261287c565b602082019050919050565b600060208201905081810360008301526128e1816128a5565b9050919050565b7f54686973206974656d20697320616c72656164792072656e7465642e00000000600082015250565b600061291e601c83612313565b9150612929826128e8565b602082019050919050565b6000602082019050818103600083015261294d81612911565b9050919050565b600061295f82611c51565b915061296a83611c51565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156129a3576129a261261f565b5b828202905092915050565b6000815190506129bd81611c5b565b92915050565b6000602082840312156129d9576129d8611b2e565b5b60006129e7848285016129ae565b91505092915050565b7f496e73756666696369656e74207061796d656e742066756e6473000000000000600082015250565b6000612a26601a83612313565b9150612a31826129f0565b602082019050919050565b60006020820190508181036000830152612a5581612a19565b9050919050565b7f496e73756666696369656e7420636f6c6c61746572616c2066756e6473000000600082015250565b6000612a92601d83612313565b9150612a9d82612a5c565b602082019050919050565b60006020820190508181036000830152612ac181612a85565b9050919050565b7f496e73756666696369656e7420636f6d62696e65642066756e64730000000000600082015250565b6000612afe601b83612313565b9150612b0982612ac8565b602082019050919050565b60006020820190508181036000830152612b2d81612af1565b9050919050565b600081519050612b4381612222565b92915050565b600060208284031215612b5f57612b5e611b2e565b5b6000612b6d84828501612b34565b91505092915050565b600067ffffffffffffffff821115612b9157612b90611ca2565b5b612b9a82611c91565b9050602081019050919050565b6000612bba612bb584612b76565b611d02565b905082815260208101848484011115612bd657612bd5611c8c565b5b612be1848285612324565b509392505050565b600082601f830112612bfe57612bfd611c87565b5b8151612c0e848260208601612ba7565b91505092915050565b600060208284031215612c2d57612c2c611b2e565b5b600082015167ffffffffffffffff811115612c4b57612c4a611b33565b5b612c5784828501612be9565b91505092915050565b604082016000820151612c766000850182611eba565b506020820151612c896020850182611ec9565b50505050565b604082016000820151612ca56000850182611eba565b506020820151612cb86020850182611ec9565b50505050565b600061010082019050612cd46000830189611ffd565b612ce16020830188611ffd565b612cee6040830187612027565b612cfb6060830186612027565b612d086080830185612c60565b612d1560c0830184612c8f565b979650505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612d7c602683612313565b9150612d8782612d20565b604082019050919050565b60006020820190508181036000830152612dab81612d6f565b9050919050565b600081519050612dc181611c25565b92915050565b600060208284031215612ddd57612ddc611b2e565b5b6000612deb84828501612db2565b91505092915050565b6000604082019050612e096000830185611ffd565b612e166020830184611ffd565b9392505050565b7f596f75206d75737420626520746865206f776e6572206f7220617070726f766560008201527f6420746f20646f2074686973202e2e2e00000000000000000000000000000000602082015250565b6000612e79603083612313565b9150612e8482612e1d565b604082019050919050565b60006020820190508181036000830152612ea881612e6c565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612ee5602083612313565b9150612ef082612eaf565b602082019050919050565b60006020820190508181036000830152612f1481612ed8565b905091905056fea2646970667358221220777595d1fc688eceaa8c7fe778483d1e80f7cb7c43bdde5c386006abddf9af5664736f6c63430008090033";

type NFTMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTMarket__factory extends ContractFactory {
  constructor(...args: NFTMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTMarket> {
    return super.deploy(overrides || {}) as Promise<NFTMarket>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTMarket {
    return super.attach(address) as NFTMarket;
  }
  override connect(signer: Signer): NFTMarket__factory {
    return super.connect(signer) as NFTMarket__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTMarketInterface {
    return new utils.Interface(_abi) as NFTMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarket {
    return new Contract(address, _abi, signerOrProvider) as NFTMarket;
  }
}
