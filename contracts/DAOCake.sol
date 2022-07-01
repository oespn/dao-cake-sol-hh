// SPDX-License-Identifier
pragma solidity ^0.8.0;

import "./HitchensUnorderedKeySet.sol";
//import "./Ownable.sol";

import "./DAOCake_Entities.sol";
import "./DAOCake_Rep_Orgs.sol";
import "./DAOCake_Rep_Members.sol";

contract DAOCake {
    // using HitchensUnorderedKeySetLib for HitchensUnorderedKeySetLib.Set;
    // HitchensUnorderedKeySetLib.Set orgSet;
    //mapping(bytes32 => OrgStruct) orgs;

    //Owner owner;

    DAOCake_Rep_Orgs org = new DAOCake_Rep_Orgs();
    DAOCake_Rep_Members member = new DAOCake_Rep_Members();

    //DAOCake_Entities.MemberStruct memberTest;

    // DAO/Org creation & reading

    function createOrg(
        bytes32 orgKey,
        string memory orgName,
        string memory orgRef,
        //bytes32 memberKey,
        string memory memberName
    ) public {
        //address sender = msg.sender;
        bytes32 memberKey = member.addressToBytes32(msg.sender);

        org.newOrg(orgKey, orgName, orgRef, memberKey);
        // check if repository has this member (separate from org.members)
        if (!member.exists(memberKey)) {
            member.newMember(memberKey, memberName, false, 20);
            // org.memberAdd(orgKey, memberKey); <-- note: called internally
        }
    }

    function simpleAddMe(bytes32 orgKey, string memory memberName) public {
        bytes32 memberKey = member.addressToBytes32(msg.sender);
        simpleAddMember(orgKey, memberKey, memberName);
    }

    function simpleAddMember(
        bytes32 orgKey,
        bytes32 memberKey,
        string memory memberName
    ) public {
        if (!member.exists(memberKey)) {
            member.newMember(memberKey, memberName, false, 20);
            org.memberAdd(orgKey, memberKey);
        }
    }

    function getOrg(bytes32 orgKey)
        public
        view
        returns (
            string memory name,
            string memory ref,
            bytes32 memberKey,
            uint16 members,
            uint16 voteForRequired
        )
    {
        return org.getOrg(orgKey);
    }

    function getMembersOfOrg(bytes32 orgKey) public view returns (bytes32[] memory array) {
        return org.getOrgMembers(orgKey);
    }

    // getOrgsCreatedBy(bytes32 memberKey)

    // getOrgsMemberOf(bytes32 memberKey) return view returns (bytes32[] orgs)

    // Claims & Transactions (proposals core entity)

    function createClaim(
        bytes32 proposalKey,
        bytes32 orgKey,
        string memory refNo,
        string memory docId,
        int16 douAmount
    ) public {
        bytes32 memberKey = member.addressToBytes32(msg.sender);
        //ProposalType proposalType = ProposalType.Pay;

        // confirm member is in that org

        // createProposal
    }
    // ^^ Duplicate for each Type
    // createNewMember, createOrgRules all calling
    // private createProposal

    // Voting

    // Member

    /**
     * @dev Set contract deployer as owner
     */

    // constructor() {

    //     //owner = new Owner();

    //     //owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
    // }
}
