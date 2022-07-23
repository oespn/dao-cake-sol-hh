import { expect } from "chai";

export function shouldBehaveLikeDAOCake(): void {
  const org = "0x017d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aac";

  const bob = "0x011d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aa1";
  //const carol = "0x011d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aa2";

  const voteDB = "0x013d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aa0";

  it("should return the new org once it's created", async function () {
    //expect(await this.daoCake.connect(this.signers.admin).getOrg(org)).to.equal("");

    await this.daoCake.createOrg(org, "Org1", "Ref1", "Fred1"); // as admin
    const res = await this.daoCake.connect(this.signers.admin).getOrg(org);
    console.log(res);
    expect(res).to.not.equal("");

    // Member apply, proposal and vote

    await this.daoCake.simpleAddMember(org, bob, "Bob");
    const resMembers = await this.daoCake.connect(this.signers.admin).getMembersOfOrg(org);
    console.log("getMembersOfOrg", resMembers);
    expect(resMembers).contains(bob);

    // Bob won't be approved yet

    const resMembers2 = await this.daoCake.connect(this.signers.admin).getApprovedMembersOfOrg(org);
    console.log("getApprovedMembersOfOrg", resMembers2);
    expect(resMembers2).not.contains(bob);

    // show the data of proposals

    const resProposal1 = await this.daoCake.connect(this.signers.admin).getProposalData(bob);
    console.log("getProposalData:" + bob, resProposal1);

    // const resProposals1 = await this.daoCake.connect(this.signers.admin).getProposalsOfOrgData(org);
    // console.log(resProposals1);
    // //expect(resProposals1).not.contains(bob);

    const proposalBob = bob;
    console.log("cast vote as:", this.signers.admin.address);
    await this.daoCake.castVote(org, voteDB, proposalBob, true); // as admin vote for bob

    const resVotes1 = await this.daoCake.connect(this.signers.admin).getVotesOfProposal(proposalBob);
    console.log("getProposalVotes", resVotes1);
    // list of members who have voted
    //expect(resVotes1).contains(bob);

    const resVotesData = await this.daoCake.connect(this.signers.admin).getVotesOfProposalData(proposalBob);
    console.log("getVotesOfProposalData", resVotesData);

    const resMembers3 = await this.daoCake.connect(this.signers.admin).getApprovedMembersOfOrg(org);
    console.log("getApprovedMembersOfOrg after vote", resMembers3);
    expect(resMembers3).contains(bob);

    // const resVote = await this.daoCake.connect(this.signers.admin).getProposalsOfOrgData(org);
    // console.log(resVote);
  });
}
