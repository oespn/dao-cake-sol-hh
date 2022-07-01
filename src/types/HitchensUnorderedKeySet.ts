/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface HitchensUnorderedKeySetInterface extends utils.Interface {
  functions: {
    "count()": FunctionFragment;
    "exists(bytes32)": FunctionFragment;
    "insert(bytes32)": FunctionFragment;
    "keyAtIndex(uint256)": FunctionFragment;
    "remove(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "count"
      | "exists"
      | "insert"
      | "keyAtIndex"
      | "remove"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exists",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "insert",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "keyAtIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "insert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keyAtIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;

  events: {
    "LogUpdate(address,string,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogUpdate"): EventFragment;
}

export interface LogUpdateEventObject {
  sender: string;
  action: string;
  key: string;
}
export type LogUpdateEvent = TypedEvent<
  [string, string, string],
  LogUpdateEventObject
>;

export type LogUpdateEventFilter = TypedEventFilter<LogUpdateEvent>;

export interface HitchensUnorderedKeySet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HitchensUnorderedKeySetInterface;

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
    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    insert(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    keyAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    remove(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  count(overrides?: CallOverrides): Promise<BigNumber>;

  exists(
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  insert(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  keyAtIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  remove(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    insert(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    keyAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    remove(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogUpdate(address,string,bytes32)"(
      sender?: null,
      action?: null,
      key?: null
    ): LogUpdateEventFilter;
    LogUpdate(sender?: null, action?: null, key?: null): LogUpdateEventFilter;
  };

  estimateGas: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    insert(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    keyAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remove(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exists(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    insert(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    keyAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
