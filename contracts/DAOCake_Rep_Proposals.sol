// SPDX-License-Identifier
pragma solidity ^0.8.0;

import "./HitchensUnorderedKeySet.sol";

import "./DAOCake_Entities.sol";

contract DAOCake_Rep_Proposals {
    using HitchensUnorderedKeySetLib for HitchensUnorderedKeySetLib.Set;

    HitchensUnorderedKeySetLib.Set proposalSet;

    // struct ProposalStruct {
    //     string name;

    //     // fk
    //     bytes32 memberKey; // creator

    //     // ext refs
    //     string uuid; // Integeration with external DB
    //     string doc_cid; // file ref eg: invoice PDF
    //     string ref_id; // external identifier eg: invoice #

    //     // properties
    //     uint256 created_time; // epoch time
    //     uint total;  //DOU (DAO IOUs)

    //     DecisionStatus decision; // = DecisionStatus.Undecided;
    //     ProposalType proposalType; // = ProposalType.Pay;

    //     // internal mappings
    //     uint16 nVotes;
    //     mapping(bytes32 => bool) hasVoted; // true if this member has voted on proposal. Keep CRUD separate.
    //     bytes32[] votes; // ref: VoteSet
    // }

    mapping(bytes32 => DAOCake_Entities.ProposalStruct) proposals;

    event LogNewProposal(
        address sender,
        bytes32 key,
        string name,
        string uuid,
        string doc_cid,
        string ref_id,
        uint256 total,
        uint16 nVotes,
        DAOCake_Entities.ProposalType proposalType
    );
    event LogUpdateProposal(
        address sender,
        bytes32 key,
        string name,
        string uuid,
        string doc_cid,
        string ref_id,
        uint256 total,
        uint16 nVotes,
        DAOCake_Entities.ProposalType proposalType
    );

    event LogRemProposal(address sender, bytes32 key);

    function newProposal(
        bytes32 key,
        bytes32 orgKey,
        bytes32 memberKey,
        string memory name,
        string memory uuid,
        string memory doc_cid,
        string memory ref_id,
        uint256 total,
        DAOCake_Entities.ProposalType proposalType
    ) public {
        proposalSet.insert(key); // Note that this will fail automatically if the key already exists.

        // PRE: require (org[orgKey]member.exists(memberKey)) handled externally

        DAOCake_Entities.ProposalStruct storage o = proposals[key];

        o.memberKey = memberKey;
        o.name = name;
        o.uuid = uuid;
        o.doc_cid = doc_cid;
        o.ref_id = ref_id;

        o.created_time = block.timestamp;
        o.total = total;

        o.decision = DAOCake_Entities.DecisionStatus.UNDECIDED;
        o.proposalType = proposalType;

        // add member's vote
        o.nVotes = 1;
        o.votes.push(memberKey);
        o.hasVoted[memberKey] = true;
        emit LogNewProposal(msg.sender, key, name, uuid, doc_cid, ref_id, total, o.nVotes, o.proposalType);
    }

    function voteAdd(bytes32 proposalKey, bytes32 memberKey) public {
        require(proposalSet.exists(proposalKey), "Can't add to an Proposal that doesn't exist.");
        DAOCake_Entities.ProposalStruct storage p = proposals[proposalKey];

        // Only maps the Vote.  Keep entity external
        if (p.hasVoted[memberKey] == false) {
            p.nVotes = p.nVotes + 1;
            // deref with: m = o.votes[nVotes];
            p.votes.push(memberKey);
            p.hasVoted[memberKey] = true;
        }
        emit LogUpdateProposal(
            msg.sender,
            proposalKey,
            p.name,
            p.uuid,
            p.doc_cid,
            p.ref_id,
            p.total,
            p.nVotes,
            p.proposalType
        );
    }

    function getProposalVotes(bytes32 proposalKey) public view returns (bytes32[] memory array) {
        require(proposalSet.exists(proposalKey), "Can't get a Proposal that doesn't exist.");
        DAOCake_Entities.ProposalStruct storage p = proposals[proposalKey];
        return (p.votes);
    }

    // function updateProposal(
    //     bytes32 key,
    //     string memory name,
    //     string memory ref,
    //     bytes32 memberKey,
    //     uint16 nVotes,
    //     uint16 voteForRequired
    // ) public {
    //     require(proposalSet.exists(key), "Can't update an Proposal that doesn't exist.");
    //     DAOCake_Entities.ProposalStruct storage w = proposals[key];
    //     w.name = name;
    //     w.ref = ref;
    //     w.memberKey = memberKey;
    //     w.nVotes = nVotes;

    //     //w.voteForRequired = voteForRequired;
    //     emit LogUpdateProposal(msg.sender, key, name, ref, memberKey, nVotes, voteForRequired);
    // }

    function exists(bytes32 key) public view returns (bool) {
        return proposalSet.exists(key);
    }

    function remProposal(bytes32 key) public {
        proposalSet.remove(key); // Note that this will fail automatically if the key doesn't exist
        delete proposals[key];
        emit LogRemProposal(msg.sender, key);
    }

    function getProposal(bytes32 key)
        public
        view
        returns (
            bytes32 orgKey,
            bytes32 memberKey,
            string memory name,
            string memory uuid,
            string memory doc_cid,
            string memory ref_id,
            uint256 total,
            uint16 nVotes,
            DAOCake_Entities.ProposalType proposalType
        )
    {
        require(proposalSet.exists(key), "Can't get a Proposal that doesn't exist.");
        DAOCake_Entities.ProposalStruct storage p = proposals[key];
        return (p.orgKey, p.memberKey, p.name, p.uuid, p.doc_cid, p.ref_id, p.total, p.nVotes, p.proposalType);
    }

    function getProposalCount() public view returns (uint256 count) {
        return proposalSet.count();
    }

    function getProposalAtIndex(uint256 index) public view returns (bytes32 key) {
        return proposalSet.keyAtIndex(index);
    }
}
