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
    name: "rentNFT",
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
  "0x60806040523480156200001157600080fd5b5062000032620000266200003f60201b60201c565b6200004760201b60201c565b600180819055506200010b565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b612cfb806200011b6000396000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b146101d4578063b9be0447146101ff578063bc197c811461022f578063ed5cb4761461026c578063f23a6e6114610295578063f2fde38b146102d2576100a7565b806301ffc9a7146100ac578063150b7a02146100e957806341b02912146101265780636b93a54e1461014f578063715018a61461018057806388700d1c14610197575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce91906119b6565b6102fb565b6040516100e091906119fe565b60405180910390f35b3480156100f557600080fd5b50610110600480360381019061010b9190611bf3565b610375565b60405161011d9190611c85565b60405180910390f35b34801561013257600080fd5b5061014d60048036038101906101489190611ca0565b610389565b005b61016960048036038101906101649190611d1a565b61039f565b604051610177929190611e04565b60405180910390f35b34801561018c57600080fd5b50610195610e9d565b005b3480156101a357600080fd5b506101be60048036038101906101b99190611ca0565b610eb1565b6040516101cb9190611f5b565b60405180910390f35b3480156101e057600080fd5b506101e96110e2565b6040516101f69190611f86565b60405180910390f35b61021960048036038101906102149190611ca0565b61110b565b6040516102269190611fa1565b60405180910390f35b34801561023b57600080fd5b5061025660048036038101906102519190612084565b611113565b6040516102639190611c85565b60405180910390f35b34801561027857600080fd5b50610293600480360381019061028e91906121f8565b611128565b005b3480156102a157600080fd5b506102bc60048036038101906102b79190612273565b6113b6565b6040516102c99190611c85565b60405180910390f35b3480156102de57600080fd5b506102f960048036038101906102f4919061230a565b6113cb565b005b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061036e575061036d8261144f565b5b9050919050565b600063150b7a0260e01b9050949350505050565b61039b6103946114b9565b83836114c1565b5050565b60606000600260015414156103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e090612383565b60405180910390fd5b60026001819055506000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600582016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600782016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050815250509050600042620151808661ffff1661062c91906123e1565b62ffffff1661063b919061241e565b9050600082604001511415610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c906124c0565b60405180910390fd5b60008561ffff16116106cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c390612552565b60405180910390fd5b8160200151811115610713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070a906125be565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1682606001516000015173ffffffffffffffffffffffffffffffffffffffff1614801561075f57506000826060015160200151145b61079e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107959061262a565b60405180910390fd5b6000826080015160000151905060008360a0015160000151905060008460800151602001518861ffff166107d2919061264a565b9050808373ffffffffffffffffffffffffffffffffffffffff166370a082316107f96114b9565b6040518263ffffffff1660e01b81526004016108159190611f86565b60206040518083038186803b15801561082d57600080fd5b505afa158015610841573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086591906126b9565b10156108a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089d90612732565b60405180910390fd5b8460a00151602001518273ffffffffffffffffffffffffffffffffffffffff166370a082316108d36114b9565b6040518263ffffffff1660e01b81526004016108ef9190611f86565b60206040518083038186803b15801561090757600080fd5b505afa15801561091b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093f91906126b9565b1015610980576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109779061279e565b60405180910390fd5b8460a001516000015173ffffffffffffffffffffffffffffffffffffffff1685608001516000015173ffffffffffffffffffffffffffffffffffffffff161415610ab05760008560a0015160200151826109da919061241e565b9050808473ffffffffffffffffffffffffffffffffffffffff166370a08231610a016114b9565b6040518263ffffffff1660e01b8152600401610a1d9190611f86565b60206040518083038186803b158015610a3557600080fd5b505afa158015610a49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6d91906126b9565b1015610aae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa59061280a565b60405180910390fd5b505b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd610ad46114b9565b308860a00151602001516040518463ffffffff1660e01b8152600401610afc9392919061282a565b602060405180830381600087803b158015610b1657600080fd5b505af1158015610b2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4e919061288d565b508973ffffffffffffffffffffffffffffffffffffffff166342842e0e30610b746114b9565b8c6040518463ffffffff1660e01b8152600401610b939392919061282a565b600060405180830381600087803b158015610bad57600080fd5b505af1158015610bc1573d6000803e3d6000fd5b505050506040518060400160405280610bd86114b9565b73ffffffffffffffffffffffffffffffffffffffff16815260200185815250856060018190525084600260008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008b815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155505060808201518160050160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155505060a08201518160070160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015550509050507fd5f86e4b4526d796a88ce410e7a72c3b2599bab2c0f9d0acef0ddf0cd44ca6a18a8a8760600151604051610df9939291906128e9565b60405180910390a18273ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015610e4757600080fd5b505afa158015610e5b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610e8491906129c1565b8196509650505050505060018081905550935093915050565b610ea5611712565b610eaf6000611790565b565b610eb961185c565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600582016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600782016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152505081525050905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600092915050565b600063bc197c8160e01b905095945050505050565b6002600154141561116e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116590612383565b60405180910390fd5b60026001819055506111886111816114b9565b86866114c1565b60006111926114b9565b90506000600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000209050818160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550848160010181905550428160020181905550838160050160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050828160070160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050508673ffffffffffffffffffffffffffffffffffffffff166342842e0e8330896040518463ffffffff1660e01b815260040161132c9392919061282a565b600060405180830381600087803b15801561134657600080fd5b505af115801561135a573d6000803e3d6000fd5b505050507f33375d78bcb09790857a4583927d3ac93d1f98336fa490a47304999668620f0d6113876114b9565b888888888860405161139e96959493929190612a68565b60405180910390a15050600180819055505050505050565b600063f23a6e6160e01b905095945050505050565b6113d3611712565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611443576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143a90612b3c565b60405180910390fd5b61144c81611790565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b60008273ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004016114fc9190611fa1565b60206040518083038186803b15801561151457600080fd5b505afa158015611528573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061154c9190612b71565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061163b57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1663081812fc846040518263ffffffff1660e01b81526004016115d39190611fa1565b60206040518083038186803b1580156115eb57600080fd5b505afa1580156115ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116239190612b71565b73ffffffffffffffffffffffffffffffffffffffff16145b806116cd57508273ffffffffffffffffffffffffffffffffffffffff1663e985e9c582866040518363ffffffff1660e01b815260040161167c929190612b9e565b60206040518083038186803b15801561169457600080fd5b505afa1580156116a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116cc919061288d565b5b61170c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170390612c39565b60405180910390fd5b50505050565b61171a611854565b73ffffffffffffffffffffffffffffffffffffffff166117386110e2565b73ffffffffffffffffffffffffffffffffffffffff161461178e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178590612ca5565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200161189a6118ba565b81526020016118a76118ea565b81526020016118b461191a565b81525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6119938161195e565b811461199e57600080fd5b50565b6000813590506119b08161198a565b92915050565b6000602082840312156119cc576119cb611954565b5b60006119da848285016119a1565b91505092915050565b60008115159050919050565b6119f8816119e3565b82525050565b6000602082019050611a1360008301846119ef565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a4482611a19565b9050919050565b611a5481611a39565b8114611a5f57600080fd5b50565b600081359050611a7181611a4b565b92915050565b6000819050919050565b611a8a81611a77565b8114611a9557600080fd5b50565b600081359050611aa781611a81565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611b0082611ab7565b810181811067ffffffffffffffff82111715611b1f57611b1e611ac8565b5b80604052505050565b6000611b3261194a565b9050611b3e8282611af7565b919050565b600067ffffffffffffffff821115611b5e57611b5d611ac8565b5b611b6782611ab7565b9050602081019050919050565b82818337600083830152505050565b6000611b96611b9184611b43565b611b28565b905082815260208101848484011115611bb257611bb1611ab2565b5b611bbd848285611b74565b509392505050565b600082601f830112611bda57611bd9611aad565b5b8135611bea848260208601611b83565b91505092915050565b60008060008060808587031215611c0d57611c0c611954565b5b6000611c1b87828801611a62565b9450506020611c2c87828801611a62565b9350506040611c3d87828801611a98565b925050606085013567ffffffffffffffff811115611c5e57611c5d611959565b5b611c6a87828801611bc5565b91505092959194509250565b611c7f8161195e565b82525050565b6000602082019050611c9a6000830184611c76565b92915050565b60008060408385031215611cb757611cb6611954565b5b6000611cc585828601611a62565b9250506020611cd685828601611a98565b9150509250929050565b600061ffff82169050919050565b611cf781611ce0565b8114611d0257600080fd5b50565b600081359050611d1481611cee565b92915050565b600080600060608486031215611d3357611d32611954565b5b6000611d4186828701611a62565b9350506020611d5286828701611a98565b9250506040611d6386828701611d05565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611da7578082015181840152602081019050611d8c565b83811115611db6576000848401525b50505050565b6000611dc782611d6d565b611dd18185611d78565b9350611de1818560208601611d89565b611dea81611ab7565b840191505092915050565b611dfe81611a77565b82525050565b60006040820190508181036000830152611e1e8185611dbc565b9050611e2d6020830184611df5565b9392505050565b611e3d81611a39565b82525050565b611e4c81611a77565b82525050565b604082016000820151611e686000850182611e34565b506020820151611e7b6020850182611e43565b50505050565b604082016000820151611e976000850182611e34565b506020820151611eaa6020850182611e43565b50505050565b604082016000820151611ec66000850182611e34565b506020820151611ed96020850182611e43565b50505050565b61012082016000820151611ef66000850182611e34565b506020820151611f096020850182611e43565b506040820151611f1c6040850182611e43565b506060820151611f2f6060850182611e52565b506080820151611f4260a0850182611e81565b5060a0820151611f5560e0850182611eb0565b50505050565b600061012082019050611f716000830184611edf565b92915050565b611f8081611a39565b82525050565b6000602082019050611f9b6000830184611f77565b92915050565b6000602082019050611fb66000830184611df5565b92915050565b600067ffffffffffffffff821115611fd757611fd6611ac8565b5b602082029050602081019050919050565b600080fd5b6000612000611ffb84611fbc565b611b28565b9050808382526020820190506020840283018581111561202357612022611fe8565b5b835b8181101561204c57806120388882611a98565b845260208401935050602081019050612025565b5050509392505050565b600082601f83011261206b5761206a611aad565b5b813561207b848260208601611fed565b91505092915050565b600080600080600060a086880312156120a05761209f611954565b5b60006120ae88828901611a62565b95505060206120bf88828901611a62565b945050604086013567ffffffffffffffff8111156120e0576120df611959565b5b6120ec88828901612056565b935050606086013567ffffffffffffffff81111561210d5761210c611959565b5b61211988828901612056565b925050608086013567ffffffffffffffff81111561213a57612139611959565b5b61214688828901611bc5565b9150509295509295909350565b600080fd5b60006040828403121561216e5761216d612153565b5b6121786040611b28565b9050600061218884828501611a62565b600083015250602061219c84828501611a98565b60208301525092915050565b6000604082840312156121be576121bd612153565b5b6121c86040611b28565b905060006121d884828501611a62565b60008301525060206121ec84828501611a98565b60208301525092915050565b600080600080600060e0868803121561221457612213611954565b5b600061222288828901611a62565b955050602061223388828901611a98565b945050604061224488828901611a98565b935050606061225588828901612158565b92505060a0612266888289016121a8565b9150509295509295909350565b600080600080600060a0868803121561228f5761228e611954565b5b600061229d88828901611a62565b95505060206122ae88828901611a62565b94505060406122bf88828901611a98565b93505060606122d088828901611a98565b925050608086013567ffffffffffffffff8111156122f1576122f0611959565b5b6122fd88828901611bc5565b9150509295509295909350565b6000602082840312156123205761231f611954565b5b600061232e84828501611a62565b91505092915050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b600061236d601f83611d78565b915061237882612337565b602082019050919050565b6000602082019050818103600083015261239c81612360565b9050919050565b600062ffffff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006123ec826123a3565b91506123f7836123a3565b92508162ffffff0483118215151615612413576124126123b2565b5b828202905092915050565b600061242982611a77565b915061243483611a77565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612469576124686123b2565b5b828201905092915050565b7f54686973206c697374696e6720646f6573206e6f742065786973740000000000600082015250565b60006124aa601b83611d78565b91506124b582612474565b602082019050919050565b600060208201905081810360008301526124d98161249d565b9050919050565b7f5468652072656e74616c20706572696f64206d7573742062652067726561746560008201527f72207468616e2030206461797300000000000000000000000000000000000000602082015250565b600061253c602d83611d78565b9150612547826124e0565b604082019050919050565b6000602082019050818103600083015261256b8161252f565b9050919050565b7f52656e74616c2074696d656672616d6520746f6f206c6f6e672e000000000000600082015250565b60006125a8601a83611d78565b91506125b382612572565b602082019050919050565b600060208201905081810360008301526125d78161259b565b9050919050565b7f54686973206974656d20697320616c72656164792072656e7465642e00000000600082015250565b6000612614601c83611d78565b915061261f826125de565b602082019050919050565b6000602082019050818103600083015261264381612607565b9050919050565b600061265582611a77565b915061266083611a77565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612699576126986123b2565b5b828202905092915050565b6000815190506126b381611a81565b92915050565b6000602082840312156126cf576126ce611954565b5b60006126dd848285016126a4565b91505092915050565b7f496e73756666696369656e74207061796d656e742066756e6473000000000000600082015250565b600061271c601a83611d78565b9150612727826126e6565b602082019050919050565b6000602082019050818103600083015261274b8161270f565b9050919050565b7f496e73756666696369656e7420636f6c6c61746572616c2066756e6473000000600082015250565b6000612788601d83611d78565b915061279382612752565b602082019050919050565b600060208201905081810360008301526127b78161277b565b9050919050565b7f496e73756666696369656e7420636f6d62696e65642066756e64730000000000600082015250565b60006127f4601b83611d78565b91506127ff826127be565b602082019050919050565b60006020820190508181036000830152612823816127e7565b9050919050565b600060608201905061283f6000830186611f77565b61284c6020830185611f77565b6128596040830184611df5565b949350505050565b61286a816119e3565b811461287557600080fd5b50565b60008151905061288781612861565b92915050565b6000602082840312156128a3576128a2611954565b5b60006128b184828501612878565b91505092915050565b6040820160008201516128d06000850182611e34565b5060208201516128e36020850182611e43565b50505050565b60006080820190506128fe6000830186611f77565b61290b6020830185611df5565b61291860408301846128ba565b949350505050565b600067ffffffffffffffff82111561293b5761293a611ac8565b5b61294482611ab7565b9050602081019050919050565b600061296461295f84612920565b611b28565b9050828152602081018484840111156129805761297f611ab2565b5b61298b848285611d89565b509392505050565b600082601f8301126129a8576129a7611aad565b5b81516129b8848260208601612951565b91505092915050565b6000602082840312156129d7576129d6611954565b5b600082015167ffffffffffffffff8111156129f5576129f4611959565b5b612a0184828501612993565b91505092915050565b604082016000820151612a206000850182611e34565b506020820151612a336020850182611e43565b50505050565b604082016000820151612a4f6000850182611e34565b506020820151612a626020850182611e43565b50505050565b600061010082019050612a7e6000830189611f77565b612a8b6020830188611f77565b612a986040830187611df5565b612aa56060830186611df5565b612ab26080830185612a0a565b612abf60c0830184612a39565b979650505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612b26602683611d78565b9150612b3182612aca565b604082019050919050565b60006020820190508181036000830152612b5581612b19565b9050919050565b600081519050612b6b81611a4b565b92915050565b600060208284031215612b8757612b86611954565b5b6000612b9584828501612b5c565b91505092915050565b6000604082019050612bb36000830185611f77565b612bc06020830184611f77565b9392505050565b7f596f75206d75737420626520746865206f776e6572206f7220617070726f766560008201527f6420746f20646f2074686973202e2e2e00000000000000000000000000000000602082015250565b6000612c23603083611d78565b9150612c2e82612bc7565b604082019050919050565b60006020820190508181036000830152612c5281612c16565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612c8f602083611d78565b9150612c9a82612c59565b602082019050919050565b60006020820190508181036000830152612cbe81612c82565b905091905056fea26469706673582212207fa4198a50aa918c4614af18691857ee9b6ec852da5d61c83ee9e7c4aa70306a64736f6c63430008090033";

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
