/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import * as Contracts from ".";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";
import { ethers } from "ethers";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "DAOCake_Rep_Members",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAOCake_Rep_Members__factory>;
    getContractFactory(
      name: "DAOCake_Rep_Orgs",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAOCake_Rep_Orgs__factory>;
    getContractFactory(
      name: "DAOCake_Rep_Proposals",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAOCake_Rep_Proposals__factory>;
    getContractFactory(
      name: "DAOCake_Rep_Votes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAOCake_Rep_Votes__factory>;
    getContractFactory(
      name: "DAOCake",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAOCake__factory>;
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: "HitchensUnorderedKeySet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HitchensUnorderedKeySet__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;

    getContractAt(
      name: "DAOCake_Rep_Members",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DAOCake_Rep_Members>;
    getContractAt(
      name: "DAOCake_Rep_Orgs",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DAOCake_Rep_Orgs>;
    getContractAt(
      name: "DAOCake_Rep_Proposals",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DAOCake_Rep_Proposals>;
    getContractAt(
      name: "DAOCake_Rep_Votes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DAOCake_Rep_Votes>;
    getContractAt(
      name: "DAOCake",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DAOCake>;
    getContractAt(
      name: "Greeter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Greeter>;
    getContractAt(
      name: "HitchensUnorderedKeySet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HitchensUnorderedKeySet>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
