/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type {
  ChainlinkClient,
  ChainlinkClientInterface,
} from '../../../../../@chainlink/contracts/src/v0.8/ChainlinkClient'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'ChainlinkCancelled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'ChainlinkFulfilled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'ChainlinkRequested',
    type: 'event',
  },
]

export class ChainlinkClient__factory {
  static readonly abi = _abi
  static createInterface(): ChainlinkClientInterface {
    return new utils.Interface(_abi) as ChainlinkClientInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkClient {
    return new Contract(address, _abi, signerOrProvider) as ChainlinkClient
  }
}
