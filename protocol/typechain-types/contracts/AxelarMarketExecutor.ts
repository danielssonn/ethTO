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
} from 'ethers'
import type {
    FunctionFragment,
    Result,
    EventFragment,
} from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
    TypedEventFilter,
    TypedEvent,
    TypedListener,
    OnEvent,
    PromiseOrValue,
} from '../common'

export type RentalStruct = {
    renter: PromiseOrValue<string>
    expiryTime: PromiseOrValue<BigNumberish>
}

export type RentalStructOutput = [string, BigNumber] & {
    renter: string
    expiryTime: BigNumber
}

export type PaymentStruct = {
    paymentToken: PromiseOrValue<string>
    pricePerDay: PromiseOrValue<BigNumberish>
}

export type PaymentStructOutput = [string, BigNumber] & {
    paymentToken: string
    pricePerDay: BigNumber
}

export type CollateralStruct = {
    collateralToken: PromiseOrValue<string>
    collateralAmount: PromiseOrValue<BigNumberish>
}

export type CollateralStructOutput = [string, BigNumber] & {
    collateralToken: string
    collateralAmount: BigNumber
}

export type NFTListingStruct = {
    lender: PromiseOrValue<string>
    maximumEndTime: PromiseOrValue<BigNumberish>
    createTime: PromiseOrValue<BigNumberish>
    rental: RentalStruct
    payment: PaymentStruct
    collateral: CollateralStruct
}

export type NFTListingStructOutput = [
    string,
    BigNumber,
    BigNumber,
    RentalStructOutput,
    PaymentStructOutput,
    CollateralStructOutput
] & {
    lender: string
    maximumEndTime: BigNumber
    createTime: BigNumber
    rental: RentalStructOutput
    payment: PaymentStructOutput
    collateral: CollateralStructOutput
}

export interface AxelarMarketExecutorInterface extends utils.Interface {
    functions: {
        'cancelNFTListing(address,uint256)': FunctionFragment
        'chainName()': FunctionFragment
        'execute(bytes32,string,string,bytes)': FunctionFragment
        'executeRent(string,address,uint256,uint16,(address,uint256,uint256,(address,uint256),(address,uint256),(address,uint256)))': FunctionFragment
        'executeWithToken(bytes32,string,string,bytes,string,uint256)': FunctionFragment
        'gasReceiver()': FunctionFragment
        'gateway()': FunctionFragment
        'getListing(address,uint256)': FunctionFragment
        'init(string,address,address)': FunctionFragment
        'lend(address,uint256,uint16,bool)': FunctionFragment
        'listNFT(address,uint256,uint256,(address,uint256),(address,uint256))': FunctionFragment
        'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)': FunctionFragment
        'onERC1155Received(address,address,uint256,uint256,bytes)': FunctionFragment
        'onERC721Received(address,address,uint256,bytes)': FunctionFragment
        'owner()': FunctionFragment
        'renounceOwnership()': FunctionFragment
        'rent(address,uint256,uint16,(address,uint256,uint256,(address,uint256),(address,uint256),(address,uint256)))': FunctionFragment
        'returnRentedNFT(address,uint256)': FunctionFragment
        'supportsInterface(bytes4)': FunctionFragment
        'transferOwnership(address)': FunctionFragment
    }

    getFunction(
        nameOrSignatureOrTopic:
            | 'cancelNFTListing'
            | 'chainName'
            | 'execute'
            | 'executeRent'
            | 'executeWithToken'
            | 'gasReceiver'
            | 'gateway'
            | 'getListing'
            | 'init'
            | 'lend'
            | 'listNFT'
            | 'onERC1155BatchReceived'
            | 'onERC1155Received'
            | 'onERC721Received'
            | 'owner'
            | 'renounceOwnership'
            | 'rent'
            | 'returnRentedNFT'
            | 'supportsInterface'
            | 'transferOwnership'
    ): FunctionFragment

    encodeFunctionData(
        functionFragment: 'cancelNFTListing',
        values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string
    encodeFunctionData(
        functionFragment: 'chainName',
        values?: undefined
    ): string
    encodeFunctionData(
        functionFragment: 'execute',
        values: [
            PromiseOrValue<BytesLike>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<BytesLike>
        ]
    ): string
    encodeFunctionData(
        functionFragment: 'executeRent',
        values: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            NFTListingStruct
        ]
    ): string
    encodeFunctionData(
        functionFragment: 'executeWithToken',
        values: [
            PromiseOrValue<BytesLike>,
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<BytesLike>,
            PromiseOrValue<string>,
            PromiseOrValue<BigNumberish>
        ]
    ): string
    encodeFunctionData(
        functionFragment: 'gasReceiver',
        values?: undefined
    ): string
    encodeFunctionData(functionFragment: 'gateway', values?: undefined): string
    encodeFunctionData(
        functionFragment: 'getListing',
        values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string
    encodeFunctionData(
        functionFragment: 'init',
        values: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<string>
        ]
    ): string
    encodeFunctionData(
        functionFragment: 'lend',
        values: [
            PromiseOrValue<string>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<boolean>
        ]
    ): string
    encodeFunctionData(
        functionFragment: 'listNFT',
        values: [
            PromiseOrValue<string>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PaymentStruct,
            CollateralStruct
        ]
    ): string
    encodeFunctionData(
        functionFragment: 'onERC1155BatchReceived',
        values: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<BigNumberish>[],
            PromiseOrValue<BigNumberish>[],
            PromiseOrValue<BytesLike>
        ]
    ): string
    encodeFunctionData(
        functionFragment: 'onERC1155Received',
        values: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BytesLike>
        ]
    ): string
    encodeFunctionData(
        functionFragment: 'onERC721Received',
        values: [
            PromiseOrValue<string>,
            PromiseOrValue<string>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BytesLike>
        ]
    ): string
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string
    encodeFunctionData(
        functionFragment: 'renounceOwnership',
        values?: undefined
    ): string
    encodeFunctionData(
        functionFragment: 'rent',
        values: [
            PromiseOrValue<string>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            NFTListingStruct
        ]
    ): string
    encodeFunctionData(
        functionFragment: 'returnRentedNFT',
        values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string
    encodeFunctionData(
        functionFragment: 'supportsInterface',
        values: [PromiseOrValue<BytesLike>]
    ): string
    encodeFunctionData(
        functionFragment: 'transferOwnership',
        values: [PromiseOrValue<string>]
    ): string

    decodeFunctionResult(
        functionFragment: 'cancelNFTListing',
        data: BytesLike
    ): Result
    decodeFunctionResult(functionFragment: 'chainName', data: BytesLike): Result
    decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result
    decodeFunctionResult(
        functionFragment: 'executeRent',
        data: BytesLike
    ): Result
    decodeFunctionResult(
        functionFragment: 'executeWithToken',
        data: BytesLike
    ): Result
    decodeFunctionResult(
        functionFragment: 'gasReceiver',
        data: BytesLike
    ): Result
    decodeFunctionResult(functionFragment: 'gateway', data: BytesLike): Result
    decodeFunctionResult(
        functionFragment: 'getListing',
        data: BytesLike
    ): Result
    decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result
    decodeFunctionResult(functionFragment: 'lend', data: BytesLike): Result
    decodeFunctionResult(functionFragment: 'listNFT', data: BytesLike): Result
    decodeFunctionResult(
        functionFragment: 'onERC1155BatchReceived',
        data: BytesLike
    ): Result
    decodeFunctionResult(
        functionFragment: 'onERC1155Received',
        data: BytesLike
    ): Result
    decodeFunctionResult(
        functionFragment: 'onERC721Received',
        data: BytesLike
    ): Result
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
    decodeFunctionResult(
        functionFragment: 'renounceOwnership',
        data: BytesLike
    ): Result
    decodeFunctionResult(functionFragment: 'rent', data: BytesLike): Result
    decodeFunctionResult(
        functionFragment: 'returnRentedNFT',
        data: BytesLike
    ): Result
    decodeFunctionResult(
        functionFragment: 'supportsInterface',
        data: BytesLike
    ): Result
    decodeFunctionResult(
        functionFragment: 'transferOwnership',
        data: BytesLike
    ): Result

    events: {
        'CancelNFTListing(address,address,uint256)': EventFragment
        'NFTLent(address,uint256,tuple)': EventFragment
        'NFTListed(address,address,uint256,uint256,tuple,tuple)': EventFragment
        'NFTRented(address,uint256,tuple)': EventFragment
        'OwnershipTransferred(address,address)': EventFragment
    }

    getEvent(nameOrSignatureOrTopic: 'CancelNFTListing'): EventFragment
    getEvent(nameOrSignatureOrTopic: 'NFTLent'): EventFragment
    getEvent(nameOrSignatureOrTopic: 'NFTListed'): EventFragment
    getEvent(nameOrSignatureOrTopic: 'NFTRented'): EventFragment
    getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
}

export interface CancelNFTListingEventObject {
    lender: string
    nftAddress: string
    tokenId: BigNumber
}
export type CancelNFTListingEvent = TypedEvent<
    [string, string, BigNumber],
    CancelNFTListingEventObject
>

export type CancelNFTListingEventFilter =
    TypedEventFilter<CancelNFTListingEvent>

export interface NFTLentEventObject {
    nftAddress: string
    tokenId: BigNumber
    rental: RentalStructOutput
}
export type NFTLentEvent = TypedEvent<
    [string, BigNumber, RentalStructOutput],
    NFTLentEventObject
>

export type NFTLentEventFilter = TypedEventFilter<NFTLentEvent>

export interface NFTListedEventObject {
    lender: string
    nftAddress: string
    tokenId: BigNumber
    maximumEndTime: BigNumber
    payment: PaymentStructOutput
    collateral: CollateralStructOutput
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
>

export type NFTListedEventFilter = TypedEventFilter<NFTListedEvent>

export interface NFTRentedEventObject {
    nftAddress: string
    tokenId: BigNumber
    rental: RentalStructOutput
}
export type NFTRentedEvent = TypedEvent<
    [string, BigNumber, RentalStructOutput],
    NFTRentedEventObject
>

export type NFTRentedEventFilter = TypedEventFilter<NFTRentedEvent>

export interface OwnershipTransferredEventObject {
    previousOwner: string
    newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<
    [string, string],
    OwnershipTransferredEventObject
>

export type OwnershipTransferredEventFilter =
    TypedEventFilter<OwnershipTransferredEvent>

export interface AxelarMarketExecutor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this
    attach(addressOrName: string): this
    deployed(): Promise<this>

    interface: AxelarMarketExecutorInterface

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
        cancelNFTListing(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        chainName(overrides?: CallOverrides): Promise<[string]>

        execute(
            commandId: PromiseOrValue<BytesLike>,
            sourceChain: PromiseOrValue<string>,
            sourceAddress: PromiseOrValue<string>,
            payload: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        executeRent(
            destinationChain: PromiseOrValue<string>,
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            listing: NFTListingStruct,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        executeWithToken(
            commandId: PromiseOrValue<BytesLike>,
            sourceChain: PromiseOrValue<string>,
            sourceAddress: PromiseOrValue<string>,
            payload: PromiseOrValue<BytesLike>,
            tokenSymbol: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        gasReceiver(overrides?: CallOverrides): Promise<[string]>

        gateway(overrides?: CallOverrides): Promise<[string]>

        getListing(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<[NFTListingStructOutput]>

        init(
            _chainName: PromiseOrValue<string>,
            _gateway: PromiseOrValue<string>,
            _gasReceiver: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        lend(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            isNativeChain: PromiseOrValue<boolean>,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        listNFT(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            maximumEndTime: PromiseOrValue<BigNumberish>,
            payment: PaymentStruct,
            collateral: CollateralStruct,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        onERC1155BatchReceived(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>[],
            arg3: PromiseOrValue<BigNumberish>[],
            arg4: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        onERC1155Received(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>,
            arg3: PromiseOrValue<BigNumberish>,
            arg4: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        onERC721Received(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>,
            arg3: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        owner(overrides?: CallOverrides): Promise<[string]>

        renounceOwnership(
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        rent(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            listing: NFTListingStruct,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        returnRentedNFT(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>

        supportsInterface(
            interfaceId: PromiseOrValue<BytesLike>,
            overrides?: CallOverrides
        ): Promise<[boolean]>

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>
    }

    cancelNFTListing(
        nftAddress: PromiseOrValue<string>,
        tokenId: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    chainName(overrides?: CallOverrides): Promise<string>

    execute(
        commandId: PromiseOrValue<BytesLike>,
        sourceChain: PromiseOrValue<string>,
        sourceAddress: PromiseOrValue<string>,
        payload: PromiseOrValue<BytesLike>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    executeRent(
        destinationChain: PromiseOrValue<string>,
        nftAddress: PromiseOrValue<string>,
        tokenId: PromiseOrValue<BigNumberish>,
        daysToRent: PromiseOrValue<BigNumberish>,
        listing: NFTListingStruct,
        overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    executeWithToken(
        commandId: PromiseOrValue<BytesLike>,
        sourceChain: PromiseOrValue<string>,
        sourceAddress: PromiseOrValue<string>,
        payload: PromiseOrValue<BytesLike>,
        tokenSymbol: PromiseOrValue<string>,
        amount: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    gasReceiver(overrides?: CallOverrides): Promise<string>

    gateway(overrides?: CallOverrides): Promise<string>

    getListing(
        nftAddress: PromiseOrValue<string>,
        tokenId: PromiseOrValue<BigNumberish>,
        overrides?: CallOverrides
    ): Promise<NFTListingStructOutput>

    init(
        _chainName: PromiseOrValue<string>,
        _gateway: PromiseOrValue<string>,
        _gasReceiver: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    lend(
        nftAddress: PromiseOrValue<string>,
        tokenId: PromiseOrValue<BigNumberish>,
        daysToRent: PromiseOrValue<BigNumberish>,
        isNativeChain: PromiseOrValue<boolean>,
        overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    listNFT(
        nftAddress: PromiseOrValue<string>,
        tokenId: PromiseOrValue<BigNumberish>,
        maximumEndTime: PromiseOrValue<BigNumberish>,
        payment: PaymentStruct,
        collateral: CollateralStruct,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    onERC1155BatchReceived(
        arg0: PromiseOrValue<string>,
        arg1: PromiseOrValue<string>,
        arg2: PromiseOrValue<BigNumberish>[],
        arg3: PromiseOrValue<BigNumberish>[],
        arg4: PromiseOrValue<BytesLike>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    onERC1155Received(
        arg0: PromiseOrValue<string>,
        arg1: PromiseOrValue<string>,
        arg2: PromiseOrValue<BigNumberish>,
        arg3: PromiseOrValue<BigNumberish>,
        arg4: PromiseOrValue<BytesLike>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    onERC721Received(
        arg0: PromiseOrValue<string>,
        arg1: PromiseOrValue<string>,
        arg2: PromiseOrValue<BigNumberish>,
        arg3: PromiseOrValue<BytesLike>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    rent(
        nftAddress: PromiseOrValue<string>,
        tokenId: PromiseOrValue<BigNumberish>,
        daysToRent: PromiseOrValue<BigNumberish>,
        listing: NFTListingStruct,
        overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    returnRentedNFT(
        nftAddress: PromiseOrValue<string>,
        tokenId: PromiseOrValue<BigNumberish>,
        overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    supportsInterface(
        interfaceId: PromiseOrValue<BytesLike>,
        overrides?: CallOverrides
    ): Promise<boolean>

    transferOwnership(
        newOwner: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    callStatic: {
        cancelNFTListing(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<void>

        chainName(overrides?: CallOverrides): Promise<string>

        execute(
            commandId: PromiseOrValue<BytesLike>,
            sourceChain: PromiseOrValue<string>,
            sourceAddress: PromiseOrValue<string>,
            payload: PromiseOrValue<BytesLike>,
            overrides?: CallOverrides
        ): Promise<void>

        executeRent(
            destinationChain: PromiseOrValue<string>,
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            listing: NFTListingStruct,
            overrides?: CallOverrides
        ): Promise<void>

        executeWithToken(
            commandId: PromiseOrValue<BytesLike>,
            sourceChain: PromiseOrValue<string>,
            sourceAddress: PromiseOrValue<string>,
            payload: PromiseOrValue<BytesLike>,
            tokenSymbol: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<void>

        gasReceiver(overrides?: CallOverrides): Promise<string>

        gateway(overrides?: CallOverrides): Promise<string>

        getListing(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<NFTListingStructOutput>

        init(
            _chainName: PromiseOrValue<string>,
            _gateway: PromiseOrValue<string>,
            _gasReceiver: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<void>

        lend(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            isNativeChain: PromiseOrValue<boolean>,
            overrides?: CallOverrides
        ): Promise<void>

        listNFT(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            maximumEndTime: PromiseOrValue<BigNumberish>,
            payment: PaymentStruct,
            collateral: CollateralStruct,
            overrides?: CallOverrides
        ): Promise<void>

        onERC1155BatchReceived(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>[],
            arg3: PromiseOrValue<BigNumberish>[],
            arg4: PromiseOrValue<BytesLike>,
            overrides?: CallOverrides
        ): Promise<string>

        onERC1155Received(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>,
            arg3: PromiseOrValue<BigNumberish>,
            arg4: PromiseOrValue<BytesLike>,
            overrides?: CallOverrides
        ): Promise<string>

        onERC721Received(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>,
            arg3: PromiseOrValue<BytesLike>,
            overrides?: CallOverrides
        ): Promise<string>

        owner(overrides?: CallOverrides): Promise<string>

        renounceOwnership(overrides?: CallOverrides): Promise<void>

        rent(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            listing: NFTListingStruct,
            overrides?: CallOverrides
        ): Promise<[string, BigNumber]>

        returnRentedNFT(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<BigNumber>

        supportsInterface(
            interfaceId: PromiseOrValue<BytesLike>,
            overrides?: CallOverrides
        ): Promise<boolean>

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<void>
    }

    filters: {
        'CancelNFTListing(address,address,uint256)'(
            lender?: null,
            nftAddress?: null,
            tokenId?: null
        ): CancelNFTListingEventFilter
        CancelNFTListing(
            lender?: null,
            nftAddress?: null,
            tokenId?: null
        ): CancelNFTListingEventFilter

        'NFTLent(address,uint256,tuple)'(
            nftAddress?: null,
            tokenId?: null,
            rental?: null
        ): NFTLentEventFilter
        NFTLent(
            nftAddress?: null,
            tokenId?: null,
            rental?: null
        ): NFTLentEventFilter

        'NFTListed(address,address,uint256,uint256,tuple,tuple)'(
            lender?: null,
            nftAddress?: null,
            tokenId?: null,
            maximumEndTime?: null,
            payment?: null,
            collateral?: null
        ): NFTListedEventFilter
        NFTListed(
            lender?: null,
            nftAddress?: null,
            tokenId?: null,
            maximumEndTime?: null,
            payment?: null,
            collateral?: null
        ): NFTListedEventFilter

        'NFTRented(address,uint256,tuple)'(
            nftAddress?: null,
            tokenId?: null,
            rental?: null
        ): NFTRentedEventFilter
        NFTRented(
            nftAddress?: null,
            tokenId?: null,
            rental?: null
        ): NFTRentedEventFilter

        'OwnershipTransferred(address,address)'(
            previousOwner?: PromiseOrValue<string> | null,
            newOwner?: PromiseOrValue<string> | null
        ): OwnershipTransferredEventFilter
        OwnershipTransferred(
            previousOwner?: PromiseOrValue<string> | null,
            newOwner?: PromiseOrValue<string> | null
        ): OwnershipTransferredEventFilter
    }

    estimateGas: {
        cancelNFTListing(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        chainName(overrides?: CallOverrides): Promise<BigNumber>

        execute(
            commandId: PromiseOrValue<BytesLike>,
            sourceChain: PromiseOrValue<string>,
            sourceAddress: PromiseOrValue<string>,
            payload: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        executeRent(
            destinationChain: PromiseOrValue<string>,
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            listing: NFTListingStruct,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        executeWithToken(
            commandId: PromiseOrValue<BytesLike>,
            sourceChain: PromiseOrValue<string>,
            sourceAddress: PromiseOrValue<string>,
            payload: PromiseOrValue<BytesLike>,
            tokenSymbol: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        gasReceiver(overrides?: CallOverrides): Promise<BigNumber>

        gateway(overrides?: CallOverrides): Promise<BigNumber>

        getListing(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<BigNumber>

        init(
            _chainName: PromiseOrValue<string>,
            _gateway: PromiseOrValue<string>,
            _gasReceiver: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        lend(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            isNativeChain: PromiseOrValue<boolean>,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        listNFT(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            maximumEndTime: PromiseOrValue<BigNumberish>,
            payment: PaymentStruct,
            collateral: CollateralStruct,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        onERC1155BatchReceived(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>[],
            arg3: PromiseOrValue<BigNumberish>[],
            arg4: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        onERC1155Received(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>,
            arg3: PromiseOrValue<BigNumberish>,
            arg4: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        onERC721Received(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>,
            arg3: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        owner(overrides?: CallOverrides): Promise<BigNumber>

        renounceOwnership(
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        rent(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            listing: NFTListingStruct,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        returnRentedNFT(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>

        supportsInterface(
            interfaceId: PromiseOrValue<BytesLike>,
            overrides?: CallOverrides
        ): Promise<BigNumber>

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>
    }

    populateTransaction: {
        cancelNFTListing(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        chainName(overrides?: CallOverrides): Promise<PopulatedTransaction>

        execute(
            commandId: PromiseOrValue<BytesLike>,
            sourceChain: PromiseOrValue<string>,
            sourceAddress: PromiseOrValue<string>,
            payload: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        executeRent(
            destinationChain: PromiseOrValue<string>,
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            listing: NFTListingStruct,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        executeWithToken(
            commandId: PromiseOrValue<BytesLike>,
            sourceChain: PromiseOrValue<string>,
            sourceAddress: PromiseOrValue<string>,
            payload: PromiseOrValue<BytesLike>,
            tokenSymbol: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        gasReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>

        gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

        getListing(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>

        init(
            _chainName: PromiseOrValue<string>,
            _gateway: PromiseOrValue<string>,
            _gasReceiver: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        lend(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            isNativeChain: PromiseOrValue<boolean>,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        listNFT(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            maximumEndTime: PromiseOrValue<BigNumberish>,
            payment: PaymentStruct,
            collateral: CollateralStruct,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        onERC1155BatchReceived(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>[],
            arg3: PromiseOrValue<BigNumberish>[],
            arg4: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        onERC1155Received(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>,
            arg3: PromiseOrValue<BigNumberish>,
            arg4: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        onERC721Received(
            arg0: PromiseOrValue<string>,
            arg1: PromiseOrValue<string>,
            arg2: PromiseOrValue<BigNumberish>,
            arg3: PromiseOrValue<BytesLike>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

        renounceOwnership(
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        rent(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            daysToRent: PromiseOrValue<BigNumberish>,
            listing: NFTListingStruct,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        returnRentedNFT(
            nftAddress: PromiseOrValue<string>,
            tokenId: PromiseOrValue<BigNumberish>,
            overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>

        supportsInterface(
            interfaceId: PromiseOrValue<BytesLike>,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>
    }
}
