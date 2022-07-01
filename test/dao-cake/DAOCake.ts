import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { DAOCake } from "../../src/types/DAOCake";
import { Signers } from "../types";
import { shouldBehaveLikeDAOCake } from "./DAOCake.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("DAOCake", function () {
    beforeEach(async function () {
      const daoCakeArtifact: Artifact = await artifacts.readArtifact("DAOCake");
      this.daoCake = <DAOCake>await waffle.deployContract(this.signers.admin, daoCakeArtifact, []);
    });

    shouldBehaveLikeDAOCake();
  });
});
