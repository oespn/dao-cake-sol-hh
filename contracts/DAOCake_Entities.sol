// SPDX-License-Identifier
pragma solidity ^0.8.0;

contract DAOCake_Entities {
    struct MemberStruct {
        string name;
        bool delux;
        uint256 price;
    }
    // mapping(bytes32 => MemberStruct) members;

    struct OrgStruct {
        string name;
        string ref;
        bytes32 memberKey;
        // internal
        uint16 nMembers; // 65k limit
        uint16 voteForRequired;
        mapping(bytes32 => bool) isMember; // true if this member exists in org. Keep CRUD separate.
        bytes32[] members;
    }
    // mapping(bytes32 => OrgStruct) orgs;
}
