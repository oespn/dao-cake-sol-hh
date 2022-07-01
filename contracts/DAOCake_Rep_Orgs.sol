// SPDX-License-Identifier
pragma solidity ^0.8.0;

import "./HitchensUnorderedKeySet.sol";

import "./DAOCake_Entities.sol";

contract DAOCake_Rep_Orgs {
    using HitchensUnorderedKeySetLib for HitchensUnorderedKeySetLib.Set;

    HitchensUnorderedKeySetLib.Set orgSet;

    // struct OrgStruct {
    //     string name;
    //     string ref;
    //     bytes32 memberKey;
    //     // internal
    //     uint16 nMembers;
    //     uint16 voteForRequired;

    //     mapping(bytes32 => bool) members; // true if this member exists in org. Keep CRUD separate.

    // }

    mapping(bytes32 => DAOCake_Entities.OrgStruct) orgs;

    event LogNewOrg(
        address sender,
        bytes32 key,
        string name,
        string ref,
        bytes32 memberKey,
        uint16 members,
        uint16 voteForRequired
    );
    event LogUpdateOrg(
        address sender,
        bytes32 key,
        string name,
        string ref,
        bytes32 memberKey,
        uint16 members,
        uint32 proposals,
        uint16 voteForRequired
    );
    event LogRemOrg(address sender, bytes32 key);

    function newOrg(
        bytes32 key,
        string memory name,
        string memory ref,
        bytes32 memberKey
    ) public {
        orgSet.insert(key); // Note that this will fail automatically if the key already exists.
        DAOCake_Entities.OrgStruct storage o = orgs[key];
        o.name = name;
        o.ref = ref;
        o.memberKey = memberKey;
        o.nMembers = 1;
        o.nProposals = 0;
        o.voteForRequired = 1;
        // add member
        o.members.push(memberKey);
        o.isMember[memberKey] = true;
        emit LogNewOrg(msg.sender, key, name, ref, memberKey, o.nMembers, o.voteForRequired);
    }

    // function _memberAdd(bytes32 orgKey, bytes32 memberKey) public view returns (DAOCake_Entities.OrgStruct memory org) {
    //     DAOCake_Entities.OrgStruct storage o = orgs[orgKey];
    //     if (o.isMember[memberKey] == false)
    //     {
    //          o.nMembers = o.nMembers + 1;
    //          // deref with: m = o.members[nMembers];
    //          o.members.push(memberKey);
    //          o.isMember[memberKey] = true;
    //     }
    // }

    function memberAdd(bytes32 orgKey, bytes32 memberKey) public {
        require(orgSet.exists(orgKey), "Can't add to an Org that doesn't exist.");
        DAOCake_Entities.OrgStruct storage o = orgs[orgKey];

        // Only maps the Member.  Keep CRUD external
        if (o.isMember[memberKey] == false) {
            o.nMembers = o.nMembers + 1;
            // deref with: m = o.members[nMembers];
            o.members.push(memberKey);
            o.isMember[memberKey] = true;
        }
        emit LogUpdateOrg(msg.sender, orgKey, o.name, o.ref, memberKey, o.nMembers, o.nProposals, o.voteForRequired);
    }

    function memberExists(bytes32 orgKey, bytes32 memberKey) public returns (bool) {
        require(orgSet.exists(orgKey), "Can't find Org to check Member.");
        DAOCake_Entities.OrgStruct storage o = orgs[orgKey];
        return o.isMember[memberKey];
    }

    function getOrgMembers(bytes32 orgKey) public view returns (bytes32[] memory array) {
        require(orgSet.exists(orgKey), "Can't get an Org that doesn't exist.");
        DAOCake_Entities.OrgStruct storage o = orgs[orgKey];
        return (o.members);
    }

    function proposalAdd(bytes32 orgKey, bytes32 proposalKey) public {
        require(orgSet.exists(orgKey), "Can't add to an Org that doesn't exist.");
        DAOCake_Entities.OrgStruct storage o = orgs[orgKey];

        // Only maps the Proposal.  Keep CRUD external
        if (o.hasProposal[proposalKey] == false) {
            o.nProposals = o.nProposals + 1;
            // deref with: m = o.members[proposalKey];
            o.proposals.push(proposalKey);
            o.hasProposal[proposalKey] = true;
        }
        emit LogUpdateOrg(msg.sender, orgKey, o.name, o.ref, o.memberKey, o.nMembers, o.nProposals, o.voteForRequired);
    }

    function updateOrg(
        bytes32 key,
        string memory name,
        string memory ref,
        bytes32 memberKey,
        uint16 nMembers,
        uint16 voteForRequired
    ) public {
        require(orgSet.exists(key), "Can't update an Org that doesn't exist.");
        DAOCake_Entities.OrgStruct storage w = orgs[key];
        w.name = name;
        w.ref = ref;
        w.memberKey = memberKey;
        w.nMembers = nMembers;
        w.voteForRequired = voteForRequired;
        emit LogUpdateOrg(msg.sender, key, name, ref, memberKey, nMembers, w.nProposals, voteForRequired);
    }

    function exists(bytes32 key) public view returns (bool) {
        return orgSet.exists(key);
    }

    function remOrg(bytes32 key) public {
        orgSet.remove(key); // Note that this will fail automatically if the key doesn't exist
        delete orgs[key];
        emit LogRemOrg(msg.sender, key);
    }

    function getOrg(bytes32 key)
        public
        view
        returns (
            string memory name,
            string memory ref,
            bytes32 memberKey,
            uint16 nMembers,
            uint16 voteForRequired
        )
    {
        require(orgSet.exists(key), "Can't get an Org that doesn't exist.");
        DAOCake_Entities.OrgStruct storage w = orgs[key];
        return (w.name, w.ref, w.memberKey, w.nMembers, w.voteForRequired);
    }

    function getOrgCount() public view returns (uint256 count) {
        return orgSet.count();
    }

    function getOrgAtIndex(uint256 index) public view returns (bytes32 key) {
        return orgSet.keyAtIndex(index);
    }
}
