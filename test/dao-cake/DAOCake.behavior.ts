import { expect } from "chai";

export function shouldBehaveLikeDAOCake(): void {
  const org = "0x017d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aac";

  it("should return the new org once it's created", async function () {
    //expect(await this.daoCake.connect(this.signers.admin).getOrg(org)).to.equal("");

    await this.daoCake.createOrg(org, "Org1", "Ref1", "Fred1");
    const res = await this.daoCake.connect(this.signers.admin).getOrg(org);
    console.log(res);
    expect(res).to.not.equal("");
  });
}
