/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../common'

export interface IOracleClientInterface extends utils.Interface {
  functions: {
    'requestAMLCheck(address)': FunctionFragment
    'requestEligibilityOffChain(address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic: 'requestAMLCheck' | 'requestEligibilityOffChain'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'requestAMLCheck',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'requestEligibilityOffChain',
    values: [PromiseOrValue<string>]
  ): string

  decodeFunctionResult(
    functionFragment: 'requestAMLCheck',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'requestEligibilityOffChain',
    data: BytesLike
  ): Result

  events: {}
}

export interface IOracleClient extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: IOracleClientInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    requestAMLCheck(
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    requestEligibilityOffChain(
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  requestAMLCheck(
    winner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  requestEligibilityOffChain(
    winner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    requestAMLCheck(
      winner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>

    requestEligibilityOffChain(
      winner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>
  }

  filters: {}

  estimateGas: {
    requestAMLCheck(
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    requestEligibilityOffChain(
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    requestAMLCheck(
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    requestEligibilityOffChain(
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
