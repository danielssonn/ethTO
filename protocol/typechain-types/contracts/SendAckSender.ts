/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type PaymentStruct = {
  paymentToken: PromiseOrValue<string>;
  pricePerDay: PromiseOrValue<BigNumberish>;
};

export type PaymentStructOutput = [string, BigNumber] & {
  paymentToken: string;
  pricePerDay: BigNumber;
};

export type CollateralStruct = {
  collateralToken: PromiseOrValue<string>;
  collateralAmount: PromiseOrValue<BigNumberish>;
};

export type CollateralStructOutput = [string, BigNumber] & {
  collateralToken: string;
  collateralAmount: BigNumber;
};

export type RentalStruct = {
  renter: PromiseOrValue<string>;
  expiryTime: PromiseOrValue<BigNumberish>;
};

export type RentalStructOutput = [string, BigNumber] & {
  renter: string;
  expiryTime: BigNumber;
};

export type NFTListingStruct = {
  nftAddress: PromiseOrValue<string>;
  tokenId: PromiseOrValue<BigNumberish>;
  lender: PromiseOrValue<string>;
  maximumEndTime: PromiseOrValue<BigNumberish>;
  createTime: PromiseOrValue<BigNumberish>;
  rental: RentalStruct;
  payment: PaymentStruct;
  collateral: CollateralStruct;
};

export type NFTListingStructOutput = [
  string,
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  RentalStructOutput,
  PaymentStructOutput,
  CollateralStructOutput
] & {
  nftAddress: string;
  tokenId: BigNumber;
  lender: string;
  maximumEndTime: BigNumber;
  createTime: BigNumber;
  rental: RentalStructOutput;
  payment: PaymentStructOutput;
  collateral: CollateralStructOutput;
};

export interface SendAckSenderInterface extends utils.Interface {
  functions: {
    "cancelNFTListing(address,uint256)": FunctionFragment;
    "destination(uint256)": FunctionFragment;
    "execute(bytes32,string,string,bytes)": FunctionFragment;
    "executeWithToken(bytes32,string,string,bytes,string,uint256)": FunctionFragment;
    "executed(uint256)": FunctionFragment;
    "gasReceiver()": FunctionFragment;
    "gateway()": FunctionFragment;
    "getListing(address,uint256)": FunctionFragment;
    "listNFT(address,uint256,uint256,(address,uint256),(address,uint256))": FunctionFragment;
    "nonce()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rent(address,uint256,uint16,string,string,uint256)": FunctionFragment;
    "returnRentedNFT(address,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "thisChain()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelNFTListing"
      | "destination"
      | "execute"
      | "executeWithToken"
      | "executed"
      | "gasReceiver"
      | "gateway"
      | "getListing"
      | "listNFT"
      | "nonce"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "owner"
      | "renounceOwnership"
      | "rent"
      | "returnRentedNFT"
      | "supportsInterface"
      | "thisChain"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelNFTListing",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "destination",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeWithToken",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executed",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "gasReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getListing",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "listNFT",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PaymentStruct,
      CollateralStruct
    ]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rent",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "returnRentedNFT",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "thisChain", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelNFTListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeWithToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "executed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gasReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "returnRentedNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "thisChain", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ContractCallSent(string,string,bytes,uint256)": EventFragment;
    "FalseAcknowledgment(string,string,uint256)": EventFragment;
    "NFTListed(address,address,uint256,uint256,tuple,tuple)": EventFragment;
    "NFTRented(address,uint256,tuple)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractCallSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FalseAcknowledgment"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTListed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTRented"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ContractCallSentEventObject {
  destinationChain: string;
  contractAddress: string;
  payload: string;
  nonce: BigNumber;
}
export type ContractCallSentEvent = TypedEvent<
  [string, string, string, BigNumber],
  ContractCallSentEventObject
>;

export type ContractCallSentEventFilter =
  TypedEventFilter<ContractCallSentEvent>;

export interface FalseAcknowledgmentEventObject {
  destinationChain: string;
  contractAddress: string;
  nonce: BigNumber;
}
export type FalseAcknowledgmentEvent = TypedEvent<
  [string, string, BigNumber],
  FalseAcknowledgmentEventObject
>;

export type FalseAcknowledgmentEventFilter =
  TypedEventFilter<FalseAcknowledgmentEvent>;

export interface NFTListedEventObject {
  lender: string;
  nftAddress: string;
  tokenId: BigNumber;
  maximumEndTime: BigNumber;
  payment: PaymentStructOutput;
  collateral: CollateralStructOutput;
}
export type NFTListedEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    PaymentStructOutput,
    CollateralStructOutput
  ],
  NFTListedEventObject
>;

export type NFTListedEventFilter = TypedEventFilter<NFTListedEvent>;

export interface NFTRentedEventObject {
  nftAddress: string;
  tokenId: BigNumber;
  rental: RentalStructOutput;
}
export type NFTRentedEvent = TypedEvent<
  [string, BigNumber, RentalStructOutput],
  NFTRentedEventObject
>;

export type NFTRentedEventFilter = TypedEventFilter<NFTRentedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SendAckSender extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SendAckSenderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancelNFTListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    destination(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    execute(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeWithToken(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      tokenSymbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executed(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    gasReceiver(overrides?: CallOverrides): Promise<[string]>;

    gateway(overrides?: CallOverrides): Promise<[string]>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[NFTListingStructOutput]>;

    listNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      maximumEndTime: PromiseOrValue<BigNumberish>,
      payment: PaymentStruct,
      collateral: CollateralStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rent(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      destinationChain: PromiseOrValue<string>,
      contractAddress: PromiseOrValue<string>,
      gasForRemote: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnRentedNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    thisChain(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancelNFTListing(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  destination(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  execute(
    commandId: PromiseOrValue<BytesLike>,
    sourceChain: PromiseOrValue<string>,
    sourceAddress: PromiseOrValue<string>,
    payload: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeWithToken(
    commandId: PromiseOrValue<BytesLike>,
    sourceChain: PromiseOrValue<string>,
    sourceAddress: PromiseOrValue<string>,
    payload: PromiseOrValue<BytesLike>,
    tokenSymbol: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executed(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  gasReceiver(overrides?: CallOverrides): Promise<string>;

  gateway(overrides?: CallOverrides): Promise<string>;

  getListing(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<NFTListingStructOutput>;

  listNFT(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    maximumEndTime: PromiseOrValue<BigNumberish>,
    payment: PaymentStruct,
    collateral: CollateralStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rent(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    daysToRent: PromiseOrValue<BigNumberish>,
    destinationChain: PromiseOrValue<string>,
    contractAddress: PromiseOrValue<string>,
    gasForRemote: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnRentedNFT(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  thisChain(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelNFTListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    destination(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    execute(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeWithToken(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      tokenSymbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executed(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    gasReceiver(overrides?: CallOverrides): Promise<string>;

    gateway(overrides?: CallOverrides): Promise<string>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<NFTListingStructOutput>;

    listNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      maximumEndTime: PromiseOrValue<BigNumberish>,
      payment: PaymentStruct,
      collateral: CollateralStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rent(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      destinationChain: PromiseOrValue<string>,
      contractAddress: PromiseOrValue<string>,
      gasForRemote: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    returnRentedNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    thisChain(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ContractCallSent(string,string,bytes,uint256)"(
      destinationChain?: null,
      contractAddress?: null,
      payload?: null,
      nonce?: null
    ): ContractCallSentEventFilter;
    ContractCallSent(
      destinationChain?: null,
      contractAddress?: null,
      payload?: null,
      nonce?: null
    ): ContractCallSentEventFilter;

    "FalseAcknowledgment(string,string,uint256)"(
      destinationChain?: null,
      contractAddress?: null,
      nonce?: null
    ): FalseAcknowledgmentEventFilter;
    FalseAcknowledgment(
      destinationChain?: null,
      contractAddress?: null,
      nonce?: null
    ): FalseAcknowledgmentEventFilter;

    "NFTListed(address,address,uint256,uint256,tuple,tuple)"(
      lender?: null,
      nftAddress?: null,
      tokenId?: null,
      maximumEndTime?: null,
      payment?: null,
      collateral?: null
    ): NFTListedEventFilter;
    NFTListed(
      lender?: null,
      nftAddress?: null,
      tokenId?: null,
      maximumEndTime?: null,
      payment?: null,
      collateral?: null
    ): NFTListedEventFilter;

    "NFTRented(address,uint256,tuple)"(
      nftAddress?: null,
      tokenId?: null,
      rental?: null
    ): NFTRentedEventFilter;
    NFTRented(
      nftAddress?: null,
      tokenId?: null,
      rental?: null
    ): NFTRentedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    cancelNFTListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    destination(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    execute(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeWithToken(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      tokenSymbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executed(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gasReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    gateway(overrides?: CallOverrides): Promise<BigNumber>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      maximumEndTime: PromiseOrValue<BigNumberish>,
      payment: PaymentStruct,
      collateral: CollateralStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rent(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      destinationChain: PromiseOrValue<string>,
      contractAddress: PromiseOrValue<string>,
      gasForRemote: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnRentedNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    thisChain(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelNFTListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    destination(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    execute(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeWithToken(
      commandId: PromiseOrValue<BytesLike>,
      sourceChain: PromiseOrValue<string>,
      sourceAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      tokenSymbol: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executed(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gasReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      maximumEndTime: PromiseOrValue<BigNumberish>,
      payment: PaymentStruct,
      collateral: CollateralStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rent(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      destinationChain: PromiseOrValue<string>,
      contractAddress: PromiseOrValue<string>,
      gasForRemote: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnRentedNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    thisChain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}