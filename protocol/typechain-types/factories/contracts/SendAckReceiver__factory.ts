/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SendAckReceiver,
  SendAckReceiverInterface,
} from "../../contracts/SendAckReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "gateway_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotApprovedByGateway",
    type: "error",
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
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "executeWithToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gateway",
    outputs: [
      {
        internalType: "contract IAxelarGateway",
        name: "",
        type: "address",
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
    ],
    name: "getListing",
    outputs: [
      {
        components: [
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
  "0x60a06040523480156200001157600080fd5b506040516200319d3803806200319d8339818101604052810190620000379190620001cf565b620000576200004b6200009960201b60201c565b620000a160201b60201c565b600180819055508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505062000201565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000197826200016a565b9050919050565b620001a9816200018a565b8114620001b557600080fd5b50565b600081519050620001c9816200019e565b92915050565b600060208284031215620001e857620001e762000165565b5b6000620001f884828501620001b8565b91505092915050565b608051612f806200021d60003960006103fb0152612f806000f3fe6080604052600436106100dd5760003560e01c806388700d1c1161007f578063bc197c8111610059578063bc197c81146102b1578063ed5cb476146102ee578063f23a6e6114610317578063f2fde38b14610354576100dd565b806388700d1c146102195780638da5cb5b14610256578063b9be044714610281576100dd565b80631a98b2e0116100bb5780631a98b2e01461018757806341b02912146101b057806349160658146101d9578063715018a614610202576100dd565b806301ffc9a7146100e2578063116191b61461011f578063150b7a021461014a575b600080fd5b3480156100ee57600080fd5b5061010960048036038101906101049190611790565b61037d565b60405161011691906117d8565b60405180910390f35b34801561012b57600080fd5b506101346103f7565b6040516101419190611872565b60405180910390f35b34801561015657600080fd5b50610171600480360381019061016c9190611a47565b61041f565b60405161017e9190611ad9565b60405180910390f35b34801561019357600080fd5b506101ae60048036038101906101a99190611be0565b610433565b005b3480156101bc57600080fd5b506101d760048036038101906101d29190611cf0565b610545565b005b3480156101e557600080fd5b5061020060048036038101906101fb9190611d30565b61055b565b005b34801561020e57600080fd5b506102176106a7565b005b34801561022557600080fd5b50610240600480360381019061023b9190611cf0565b6106bb565b60405161024d9190611f47565b60405180910390f35b34801561026257600080fd5b5061026b61094d565b6040516102789190611f72565b60405180910390f35b61029b60048036038101906102969190611cf0565b610976565b6040516102a89190611f9c565b60405180910390f35b3480156102bd57600080fd5b506102d860048036038101906102d3919061207a565b61097e565b6040516102e59190611ad9565b60405180910390f35b3480156102fa57600080fd5b50610315600480360381019061031091906121ee565b610993565b005b34801561032357600080fd5b5061033e60048036038101906103399190612269565b610c21565b60405161034b9190611ad9565b60405180910390f35b34801561036057600080fd5b5061037b60048036038101906103769190612300565b610c36565b005b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103f057506103ef82610cba565b5b9050919050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600063150b7a0260e01b9050949350505050565b6000858560405161044592919061235d565b604051809103902090506104576103f7565b73ffffffffffffffffffffffffffffffffffffffff16631876eed98c8c8c8c8c878b8b8b6040518a63ffffffff1660e01b815260040161049f999897969594939291906123c3565b602060405180830381600087803b1580156104b957600080fd5b505af11580156104cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f1919061246b565b610527576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105388a8a8a8a8a8a8a8a8a610d24565b5050505050505050505050565b610557610550610d2f565b8383610d37565b5050565b602a84849050146105a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610598906124e4565b60405180910390fd5b600082826040516105b392919061235d565b604051809103902090506105c56103f7565b73ffffffffffffffffffffffffffffffffffffffff16635f6970c38989898989876040518763ffffffff1660e01b815260040161060796959493929190612504565b602060405180830381600087803b15801561062157600080fd5b505af1158015610635573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610659919061246b565b61068f576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61069d878787878787610f88565b5050505050505050565b6106af611066565b6106b960006110e4565b565b6106c3611611565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600782016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001600982016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152505081525050905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600092915050565b600063bc197c8160e01b905095945050505050565b600260015414156109d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d0906125a7565b60405180910390fd5b60026001819055506109f36109ec610d2f565b8686610d37565b60006109fd610d2f565b90506000600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000209050818160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550848160030181905550428160040181905550838160070160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050828160090160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050508673ffffffffffffffffffffffffffffffffffffffff166342842e0e8330896040518463ffffffff1660e01b8152600401610b97939291906125c7565b600060405180830381600087803b158015610bb157600080fd5b505af1158015610bc5573d6000803e3d6000fd5b505050507f33375d78bcb09790857a4583927d3ac93d1f98336fa490a47304999668620f0d610bf2610d2f565b8888888888604051610c099695949392919061265c565b60405180910390a15050600180819055505050505050565b600063f23a6e6160e01b905095945050505050565b610c3e611066565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca590612730565b60405180910390fd5b610cb7816110e4565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b505050505050505050565b600033905090565b60008273ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b8152600401610d729190611f9c565b60206040518083038186803b158015610d8a57600080fd5b505afa158015610d9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc29190612765565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610eb157508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1663081812fc846040518263ffffffff1660e01b8152600401610e499190611f9c565b60206040518083038186803b158015610e6157600080fd5b505afa158015610e75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e999190612765565b73ffffffffffffffffffffffffffffffffffffffff16145b80610f4357508273ffffffffffffffffffffffffffffffffffffffff1663e985e9c582866040518363ffffffff1660e01b8152600401610ef2929190612792565b60206040518083038186803b158015610f0a57600080fd5b505afa158015610f1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f42919061246b565b5b610f82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f799061282d565b60405180910390fd5b50505050565b6000808383810190610f9a919061284d565b9150915060008060008084806020019051810190610fb891906129d6565b9650509550955095505050600080610fd2838686896111a8565b91509150610fde6103f7565b73ffffffffffffffffffffffffffffffffffffffff1663b54170848f8f8f8f8f8f89896040518963ffffffff1660e01b8152600401611024989796959493929190612b2f565b600060405180830381600087803b15801561103e57600080fd5b505af1158015611052573d6000803e3d6000fd5b505050505050505050505050505050505050565b61106e611609565b73ffffffffffffffffffffffffffffffffffffffff1661108c61094d565b73ffffffffffffffffffffffffffffffffffffffff16146110e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d990612bf0565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60606000600260015414156111f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e9906125a7565b60405180910390fd5b60026001819055506000856000015190508073ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561124957600080fd5b505afa15801561125d573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906112869190612cb1565b925060008560000151905086602001518561ffff166112a59190612d29565b9250856000015173ffffffffffffffffffffffffffffffffffffffff16876000015173ffffffffffffffffffffffffffffffffffffffff1614156113c85760008660200151846112f59190612d83565b9050808373ffffffffffffffffffffffffffffffffffffffff166370a082318b6040518263ffffffff1660e01b81526004016113319190611f72565b60206040518083038186803b15801561134957600080fd5b505afa15801561135d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113819190612dd9565b10156113c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b990612e52565b60405180910390fd5b50611563565b828273ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b81526004016114029190611f72565b60206040518083038186803b15801561141a57600080fd5b505afa15801561142e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114529190612dd9565b1015611493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148a90612ebe565b60405180910390fd5b85602001518173ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b81526004016114d19190611f72565b60206040518083038186803b1580156114e957600080fd5b505afa1580156114fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115219190612dd9565b1015611562576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155990612f2a565b60405180910390fd5b5b8073ffffffffffffffffffffffffffffffffffffffff166323b872dd893089602001516040518463ffffffff1660e01b81526004016115a4939291906125c7565b602060405180830381600087803b1580156115be57600080fd5b505af11580156115d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f6919061246b565b5050506001808190555094509492505050565b600033905090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001611674611694565b81526020016116816116c4565b815260200161168e6116f4565b81525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61176d81611738565b811461177857600080fd5b50565b60008135905061178a81611764565b92915050565b6000602082840312156117a6576117a561172e565b5b60006117b48482850161177b565b91505092915050565b60008115159050919050565b6117d2816117bd565b82525050565b60006020820190506117ed60008301846117c9565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061183861183361182e846117f3565b611813565b6117f3565b9050919050565b600061184a8261181d565b9050919050565b600061185c8261183f565b9050919050565b61186c81611851565b82525050565b60006020820190506118876000830184611863565b92915050565b6000611898826117f3565b9050919050565b6118a88161188d565b81146118b357600080fd5b50565b6000813590506118c58161189f565b92915050565b6000819050919050565b6118de816118cb565b81146118e957600080fd5b50565b6000813590506118fb816118d5565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119548261190b565b810181811067ffffffffffffffff821117156119735761197261191c565b5b80604052505050565b6000611986611724565b9050611992828261194b565b919050565b600067ffffffffffffffff8211156119b2576119b161191c565b5b6119bb8261190b565b9050602081019050919050565b82818337600083830152505050565b60006119ea6119e584611997565b61197c565b905082815260208101848484011115611a0657611a05611906565b5b611a118482856119c8565b509392505050565b600082601f830112611a2e57611a2d611901565b5b8135611a3e8482602086016119d7565b91505092915050565b60008060008060808587031215611a6157611a6061172e565b5b6000611a6f878288016118b6565b9450506020611a80878288016118b6565b9350506040611a91878288016118ec565b925050606085013567ffffffffffffffff811115611ab257611ab1611733565b5b611abe87828801611a19565b91505092959194509250565b611ad381611738565b82525050565b6000602082019050611aee6000830184611aca565b92915050565b6000819050919050565b611b0781611af4565b8114611b1257600080fd5b50565b600081359050611b2481611afe565b92915050565b600080fd5b600080fd5b60008083601f840112611b4a57611b49611901565b5b8235905067ffffffffffffffff811115611b6757611b66611b2a565b5b602083019150836001820283011115611b8357611b82611b2f565b5b9250929050565b60008083601f840112611ba057611b9f611901565b5b8235905067ffffffffffffffff811115611bbd57611bbc611b2a565b5b602083019150836001820283011115611bd957611bd8611b2f565b5b9250929050565b60008060008060008060008060008060c08b8d031215611c0357611c0261172e565b5b6000611c118d828e01611b15565b9a505060208b013567ffffffffffffffff811115611c3257611c31611733565b5b611c3e8d828e01611b34565b995099505060408b013567ffffffffffffffff811115611c6157611c60611733565b5b611c6d8d828e01611b34565b975097505060608b013567ffffffffffffffff811115611c9057611c8f611733565b5b611c9c8d828e01611b8a565b955095505060808b013567ffffffffffffffff811115611cbf57611cbe611733565b5b611ccb8d828e01611b34565b935093505060a0611cde8d828e016118ec565b9150509295989b9194979a5092959850565b60008060408385031215611d0757611d0661172e565b5b6000611d15858286016118b6565b9250506020611d26858286016118ec565b9150509250929050565b60008060008060008060006080888a031215611d4f57611d4e61172e565b5b6000611d5d8a828b01611b15565b975050602088013567ffffffffffffffff811115611d7e57611d7d611733565b5b611d8a8a828b01611b34565b9650965050604088013567ffffffffffffffff811115611dad57611dac611733565b5b611db98a828b01611b34565b9450945050606088013567ffffffffffffffff811115611ddc57611ddb611733565b5b611de88a828b01611b8a565b925092505092959891949750929550565b611e028161188d565b82525050565b611e11816118cb565b82525050565b604082016000820151611e2d6000850182611df9565b506020820151611e406020850182611e08565b50505050565b604082016000820151611e5c6000850182611df9565b506020820151611e6f6020850182611e08565b50505050565b604082016000820151611e8b6000850182611df9565b506020820151611e9e6020850182611e08565b50505050565b61016082016000820151611ebb6000850182611df9565b506020820151611ece6020850182611e08565b506040820151611ee16040850182611df9565b506060820151611ef46060850182611e08565b506080820151611f076080850182611e08565b5060a0820151611f1a60a0850182611e17565b5060c0820151611f2d60e0850182611e46565b5060e0820151611f41610120850182611e75565b50505050565b600061016082019050611f5d6000830184611ea4565b92915050565b611f6c8161188d565b82525050565b6000602082019050611f876000830184611f63565b92915050565b611f96816118cb565b82525050565b6000602082019050611fb16000830184611f8d565b92915050565b600067ffffffffffffffff821115611fd257611fd161191c565b5b602082029050602081019050919050565b6000611ff6611ff184611fb7565b61197c565b9050808382526020820190506020840283018581111561201957612018611b2f565b5b835b81811015612042578061202e88826118ec565b84526020840193505060208101905061201b565b5050509392505050565b600082601f83011261206157612060611901565b5b8135612071848260208601611fe3565b91505092915050565b600080600080600060a086880312156120965761209561172e565b5b60006120a4888289016118b6565b95505060206120b5888289016118b6565b945050604086013567ffffffffffffffff8111156120d6576120d5611733565b5b6120e28882890161204c565b935050606086013567ffffffffffffffff81111561210357612102611733565b5b61210f8882890161204c565b925050608086013567ffffffffffffffff8111156121305761212f611733565b5b61213c88828901611a19565b9150509295509295909350565b600080fd5b60006040828403121561216457612163612149565b5b61216e604061197c565b9050600061217e848285016118b6565b6000830152506020612192848285016118ec565b60208301525092915050565b6000604082840312156121b4576121b3612149565b5b6121be604061197c565b905060006121ce848285016118b6565b60008301525060206121e2848285016118ec565b60208301525092915050565b600080600080600060e0868803121561220a5761220961172e565b5b6000612218888289016118b6565b9550506020612229888289016118ec565b945050604061223a888289016118ec565b935050606061224b8882890161214e565b92505060a061225c8882890161219e565b9150509295509295909350565b600080600080600060a086880312156122855761228461172e565b5b6000612293888289016118b6565b95505060206122a4888289016118b6565b94505060406122b5888289016118ec565b93505060606122c6888289016118ec565b925050608086013567ffffffffffffffff8111156122e7576122e6611733565b5b6122f388828901611a19565b9150509295509295909350565b6000602082840312156123165761231561172e565b5b6000612324848285016118b6565b91505092915050565b600081905092915050565b6000612344838561232d565b93506123518385846119c8565b82840190509392505050565b600061236a828486612338565b91508190509392505050565b61237f81611af4565b82525050565b600082825260208201905092915050565b60006123a28385612385565b93506123af8385846119c8565b6123b88361190b565b840190509392505050565b600060c0820190506123d8600083018c612376565b81810360208301526123eb818a8c612396565b9050818103604083015261240081888a612396565b905061240f6060830187612376565b8181036080830152612422818587612396565b905061243160a0830184611f8d565b9a9950505050505050505050565b612448816117bd565b811461245357600080fd5b50565b6000815190506124658161243f565b92915050565b6000602082840312156124815761248061172e565b5b600061248f84828501612456565b91505092915050565b7f7374617274000000000000000000000000000000000000000000000000000000600082015250565b60006124ce600583612385565b91506124d982612498565b602082019050919050565b600060208201905081810360008301526124fd816124c1565b9050919050565b60006080820190506125196000830189612376565b818103602083015261252c818789612396565b90508181036040830152612541818587612396565b90506125506060830184612376565b979650505050505050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b6000612591601f83612385565b915061259c8261255b565b602082019050919050565b600060208201905081810360008301526125c081612584565b9050919050565b60006060820190506125dc6000830186611f63565b6125e96020830185611f63565b6125f66040830184611f8d565b949350505050565b6040820160008201516126146000850182611df9565b5060208201516126276020850182611e08565b50505050565b6040820160008201516126436000850182611df9565b5060208201516126566020850182611e08565b50505050565b6000610100820190506126726000830189611f63565b61267f6020830188611f63565b61268c6040830187611f8d565b6126996060830186611f8d565b6126a660808301856125fe565b6126b360c083018461262d565b979650505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061271a602683612385565b9150612725826126be565b604082019050919050565b600060208201905081810360008301526127498161270d565b9050919050565b60008151905061275f8161189f565b92915050565b60006020828403121561277b5761277a61172e565b5b600061278984828501612750565b91505092915050565b60006040820190506127a76000830185611f63565b6127b46020830184611f63565b9392505050565b7f596f75206d75737420626520746865206f776e6572206f7220617070726f766560008201527f6420746f20646f2074686973202e2e2e00000000000000000000000000000000602082015250565b6000612817603083612385565b9150612822826127bb565b604082019050919050565b600060208201905081810360008301526128468161280a565b9050919050565b600080604083850312156128645761286361172e565b5b6000612872858286016118ec565b925050602083013567ffffffffffffffff81111561289357612892611733565b5b61289f85828601611a19565b9150509250929050565b60006128b4826117f3565b9050919050565b6128c4816128a9565b81146128cf57600080fd5b50565b6000815190506128e1816128bb565b92915050565b6000815190506128f6816118d5565b92915050565b600061ffff82169050919050565b612913816128fc565b811461291e57600080fd5b50565b6000815190506129308161290a565b92915050565b60006040828403121561294c5761294b612149565b5b612956604061197c565b9050600061296684828501612750565b600083015250602061297a848285016128e7565b60208301525092915050565b60006040828403121561299c5761299b612149565b5b6129a6604061197c565b905060006129b684828501612750565b60008301525060206129ca848285016128e7565b60208301525092915050565b6000806000806000806000610120888a0312156129f6576129f561172e565b5b6000612a048a828b016128d2565b9750506020612a158a828b016128e7565b9650506040612a268a828b01612921565b9550506060612a378a828b01612936565b94505060a0612a488a828b01612986565b93505060e0612a598a828b016128d2565b925050610100612a6b8a828b016128d2565b91505092959891949750929550565b600082825260208201905092915050565b6000612a978385612a7a565b9350612aa48385846119c8565b612aad8361190b565b840190509392505050565b600081519050919050565b60005b83811015612ae1578082015181840152602081019050612ac6565b83811115612af0576000848401525b50505050565b6000612b0182612ab8565b612b0b8185612385565b9350612b1b818560208601612ac3565b612b248161190b565b840191505092915050565b600060a0820190508181036000830152612b4a818a8c612396565b90508181036020830152612b5f81888a612396565b90508181036040830152612b74818688612a8b565b90508181036060830152612b888185612af6565b9050612b976080830184611f8d565b9998505050505050505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612bda602083612385565b9150612be582612ba4565b602082019050919050565b60006020820190508181036000830152612c0981612bcd565b9050919050565b600067ffffffffffffffff821115612c2b57612c2a61191c565b5b612c348261190b565b9050602081019050919050565b6000612c54612c4f84612c10565b61197c565b905082815260208101848484011115612c7057612c6f611906565b5b612c7b848285612ac3565b509392505050565b600082601f830112612c9857612c97611901565b5b8151612ca8848260208601612c41565b91505092915050565b600060208284031215612cc757612cc661172e565b5b600082015167ffffffffffffffff811115612ce557612ce4611733565b5b612cf184828501612c83565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612d34826118cb565b9150612d3f836118cb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612d7857612d77612cfa565b5b828202905092915050565b6000612d8e826118cb565b9150612d99836118cb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612dce57612dcd612cfa565b5b828201905092915050565b600060208284031215612def57612dee61172e565b5b6000612dfd848285016128e7565b91505092915050565b7f496e73756666696369656e7420636f6d62696e65642066756e64730000000000600082015250565b6000612e3c601b83612385565b9150612e4782612e06565b602082019050919050565b60006020820190508181036000830152612e6b81612e2f565b9050919050565b7f496e73756666696369656e74207061796d656e742066756e6473000000000000600082015250565b6000612ea8601a83612385565b9150612eb382612e72565b602082019050919050565b60006020820190508181036000830152612ed781612e9b565b9050919050565b7f496e73756666696369656e7420636f6c6c61746572616c2066756e6473000000600082015250565b6000612f14601d83612385565b9150612f1f82612ede565b602082019050919050565b60006020820190508181036000830152612f4381612f07565b905091905056fea2646970667358221220ee325cee8e224377e2ce00ca54c385d6d914777580973055f5084dc19e8cb2e664736f6c63430008090033";

type SendAckReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SendAckReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SendAckReceiver__factory extends ContractFactory {
  constructor(...args: SendAckReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    gateway_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SendAckReceiver> {
    return super.deploy(gateway_, overrides || {}) as Promise<SendAckReceiver>;
  }
  override getDeployTransaction(
    gateway_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(gateway_, overrides || {});
  }
  override attach(address: string): SendAckReceiver {
    return super.attach(address) as SendAckReceiver;
  }
  override connect(signer: Signer): SendAckReceiver__factory {
    return super.connect(signer) as SendAckReceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SendAckReceiverInterface {
    return new utils.Interface(_abi) as SendAckReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SendAckReceiver {
    return new Contract(address, _abi, signerOrProvider) as SendAckReceiver;
  }
}