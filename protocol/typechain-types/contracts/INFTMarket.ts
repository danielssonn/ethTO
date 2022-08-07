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

export type RentalStruct = {
  renter: PromiseOrValue<string>;
  expiryTime: PromiseOrValue<BigNumberish>;
};

export type RentalStructOutput = [string, BigNumber] & {
  renter: string;
  expiryTime: BigNumber;
};

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

export type NFTListingStruct = {
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
  BigNumber,
  RentalStructOutput,
  PaymentStructOutput,
  CollateralStructOutput
] & {
  lender: string;
  maximumEndTime: BigNumber;
  createTime: BigNumber;
  rental: RentalStructOutput;
  payment: PaymentStructOutput;
  collateral: CollateralStructOutput;
};

export interface INFTMarketInterface extends utils.Interface {
  functions: {
    "cancelNFTListing(address,uint256)": FunctionFragment;
    "getListing(address,uint256)": FunctionFragment;
    "lend(address,uint256,uint16,bool)": FunctionFragment;
    "listNFT(address,uint256,uint256,(address,uint256),(address,uint256))": FunctionFragment;
    "rent(address,uint256,uint16,(address,uint256,uint256,(address,uint256),(address,uint256),(address,uint256)))": FunctionFragment;
    "returnRentedNFT(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelNFTListing"
      | "getListing"
      | "lend"
      | "listNFT"
      | "rent"
      | "returnRentedNFT"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelNFTListing",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getListing",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lend",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
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
  encodeFunctionData(
    functionFragment: "rent",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      NFTListingStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "returnRentedNFT",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelNFTListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "returnRentedNFT",
    data: BytesLike
  ): Result;

  events: {
    "CancelNFTListing(address,address,uint256)": EventFragment;
    "NFTLent(address,uint256,tuple)": EventFragment;
    "NFTListed(address,address,uint256,uint256,tuple,tuple)": EventFragment;
    "NFTRented(address,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelNFTListing"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTLent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTListed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTRented"): EventFragment;
}

export interface CancelNFTListingEventObject {
  lender: string;
  nftAddress: string;
  tokenId: BigNumber;
}
export type CancelNFTListingEvent = TypedEvent<
  [string, string, BigNumber],
  CancelNFTListingEventObject
>;

export type CancelNFTListingEventFilter =
  TypedEventFilter<CancelNFTListingEvent>;

export interface NFTLentEventObject {
  nftAddress: string;
  tokenId: BigNumber;
  rental: RentalStructOutput;
}
export type NFTLentEvent = TypedEvent<
  [string, BigNumber, RentalStructOutput],
  NFTLentEventObject
>;

export type NFTLentEventFilter = TypedEventFilter<NFTLentEvent>;

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

export interface INFTMarket extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INFTMarketInterface;

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

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[NFTListingStructOutput]>;

    lend(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      isNativeChain: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    listNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      maximumEndTime: PromiseOrValue<BigNumberish>,
      payment: PaymentStruct,
      collateral: CollateralStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rent(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      listing: NFTListingStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnRentedNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancelNFTListing(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getListing(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<NFTListingStructOutput>;

  lend(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    daysToRent: PromiseOrValue<BigNumberish>,
    isNativeChain: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  listNFT(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    maximumEndTime: PromiseOrValue<BigNumberish>,
    payment: PaymentStruct,
    collateral: CollateralStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rent(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    daysToRent: PromiseOrValue<BigNumberish>,
    listing: NFTListingStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnRentedNFT(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelNFTListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<NFTListingStructOutput>;

    lend(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      isNativeChain: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    listNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      maximumEndTime: PromiseOrValue<BigNumberish>,
      payment: PaymentStruct,
      collateral: CollateralStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    rent(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      listing: NFTListingStruct,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    returnRentedNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "CancelNFTListing(address,address,uint256)"(
      lender?: null,
      nftAddress?: null,
      tokenId?: null
    ): CancelNFTListingEventFilter;
    CancelNFTListing(
      lender?: null,
      nftAddress?: null,
      tokenId?: null
    ): CancelNFTListingEventFilter;

    "NFTLent(address,uint256,tuple)"(
      nftAddress?: null,
      tokenId?: null,
      rental?: null
    ): NFTLentEventFilter;
    NFTLent(
      nftAddress?: null,
      tokenId?: null,
      rental?: null
    ): NFTLentEventFilter;

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
  };

  estimateGas: {
    cancelNFTListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lend(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      isNativeChain: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    listNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      maximumEndTime: PromiseOrValue<BigNumberish>,
      payment: PaymentStruct,
      collateral: CollateralStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rent(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      listing: NFTListingStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnRentedNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelNFTListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lend(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      isNativeChain: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    listNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      maximumEndTime: PromiseOrValue<BigNumberish>,
      payment: PaymentStruct,
      collateral: CollateralStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rent(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      daysToRent: PromiseOrValue<BigNumberish>,
      listing: NFTListingStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnRentedNFT(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
