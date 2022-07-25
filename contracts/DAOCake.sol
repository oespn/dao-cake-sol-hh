// SPDX-License-Identifier
pragma solidity ^0.8.6;

import "./HitchensUnorderedKeySet.sol";

import "./DAOCake_Entities.sol";
import "./DAOCake_Rep_Orgs.sol";
import "./DAOCake_Rep_Members.sol";

import "./DAOCake_Rep_Proposals.sol";
import "./DAOCake_Rep_Votes.sol";

contract DAOCake {
    DAOCake_Rep_Orgs _org = new DAOCake_Rep_Orgs();
    DAOCake_Rep_Members _member = new DAOCake_Rep_Members();

    DAOCake_Rep_Proposals _proposal = new DAOCake_Rep_Proposals();
    DAOCake_Rep_Votes _vote = new DAOCake_Rep_Votes();

    DAOCake_Entities _utils = new DAOCake_Entities();

    // DAO/Org creation & reading

    function createOrg(
        bytes32 orgKey,
        string memory orgName,
        string memory orgRef,
        //bytes32 memberKey,
        string memory memberName
    ) public {
        //address sender = msg.sender;
        bytes32 memberKey = _member.addressToBytes32(msg.sender);

        _org.newOrg(orgKey, orgName, orgRef, memberKey);
        // check if repository has this member (separate from org.members)
        if (!_member.exists(memberKey)) {
            _member.newMember(memberKey, memberName, false, 20);
            // org.memberAdd(orgKey, memberKey); <-- note: called internally
        }
    }

    function simpleAddMe(bytes32 orgKey, string memory memberName) public {
        bytes32 memberKey = _member.addressToBytes32(msg.sender);
        simpleAddMember(orgKey, memberKey, memberName);
    }

    function simpleAddMember(
        bytes32 orgKey,
        bytes32 memberKey,
        string memory memberName
    ) public {
        if (!_member.exists(memberKey)) {
            _member.newMember(memberKey, memberName, false, 20);
            _org.memberAdd(orgKey, memberKey);

            if (!_proposal.exists(memberKey)) {
                // new members need approval.  Create the proposal for voting.
                bytes32 proposalKey = memberKey;
                uint16 votesRequired = _org.getVotesRequired(orgKey);
                _proposal.newProposal(
                    proposalKey,
                    orgKey,
                    memberKey,
                    memberName,
                    "",
                    "",
                    "",
                    0,
                    votesRequired,
                    DAOCake_Entities.ProposalType.NEW_MEMBER
                );
                _org.proposalAdd(orgKey, proposalKey);
                bytes32 voteKey = memberKey;
                //bytes32 voteKey = bytes32(sha256(abi.encodePacked(memberKey,proposalKey)));
                _vote.newVote(voteKey, proposalKey, memberKey, true);
            }
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
        return _org.getOrg(orgKey);
    }

    function getMembersOfOrg(bytes32 orgKey) public view returns (bytes32[] memory array) {
        return _org.getOrgMembers(orgKey);
    }

    function getApprovedMembersOfOrg(bytes32 orgKey) public view returns (bytes32[] memory array) {
        return _org.getOrgApprovedMembers(orgKey);
    }

    // Claims & Transactions (proposals core entity)

    function getProposalsOfOrg(bytes32 orgKey) public view returns (bytes32[] memory array) {
        return _org.getOrgProposals(orgKey);
    }

    function getProposal(bytes32 proposalKey)
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
            DAOCake_Entities.ProposalType proposalType,
            DAOCake_Entities.DecisionStatus decision
        )
    {
        DAOCake_Entities.ProposalReturn memory r = _proposal.getProposal(proposalKey);

        return (
            r.orgKey,
            r.memberKey,
            r.name,
            r.uuid,
            r.doc_cid,
            r.ref_id,
            r.total,
            r.nVotes,
            r.proposalType,
            r.decision
        );
    }

    // Hard hat testing viewing only - won't return on TRON
    function getProposalsOfOrgData(bytes32 orgKey) public view returns (DAOCake_Entities.ProposalReturn[] memory) {
        bytes32[] memory array = _org.getOrgProposals(orgKey);
        DAOCake_Entities.ProposalReturn[] memory pData = new DAOCake_Entities.ProposalReturn[](array.length);
        for (uint16 i = 0; i < array.length; i++) {
            pData[i] = _proposal.getProposal(array[i]);
        }
        return pData;
    }

    // Hard hat testing only - won't return on TRON
    function getVotesOfProposalData(bytes32 proposalKey) public view returns (DAOCake_Entities.VoteStruct[] memory) {
        bytes32[] memory array = _proposal.getProposalVotes(proposalKey);
        // array of members who have voted
        DAOCake_Entities.VoteStruct[] memory pData = new DAOCake_Entities.VoteStruct[](array.length);

        for (uint16 i = 0; i < array.length; i++) {
            //bytes32 voteKey = _proposal.getProposalVoteByMember(proposalKey, array[i]);
            pData[i] = _vote.getVote(array[i]); //needs to be VoteKey (not member)
        }
        return pData;
    }

    function getVotes(bytes32 proposalKey) public view returns (bytes32[] memory array) {
        return _proposal.getProposalVotes(proposalKey);
    }

    function getVote(bytes32 voteKey)
        public
        view
        returns (
            bytes32 proposalKey,
            bytes32 memberKey,
            bool voteFor
        )
    {
        DAOCake_Entities.VoteStruct memory r = _vote.getVote(voteKey);

        return (r.proposalKey, r.memberKey, r.voteFor);
    }

    function createClaim(
        bytes32 proposalKey,
        bytes32 orgKey,
        string memory name,
        string memory uuid,
        string memory doc_cid,
        string memory ref_id,
        uint256 douAmount
    ) public {
        bytes32 memberKey = _member.addressToBytes32(msg.sender);
        require(_org.memberExists(orgKey, memberKey), "Member must be part of the Org");

        uint16 votesRequired = _org.getVotesRequired(orgKey);

        // check if repository has this Proposal (separate from org.poposals)
        if (!_proposal.exists(proposalKey)) {
            _proposal.newProposal(
                proposalKey,
                orgKey,
                memberKey,
                name,
                uuid,
                doc_cid,
                ref_id,
                douAmount,
                votesRequired,
                DAOCake_Entities.ProposalType.PAY
            );
            _org.proposalAdd(orgKey, proposalKey);
            bytes32 voteKey = bytes32(sha256(abi.encodePacked(memberKey, proposalKey)));
            // bytes32(address(uint160(uint256(memberKey))) + address(uint160(uint256(proposalKey))));
            _vote.newVote(voteKey, proposalKey, memberKey, true);
        }
    }

    function castVote(
        bytes32 orgKey,
        bytes32 voteKey,
        bytes32 proposalKey,
        bool voteFor
    ) public {
        bytes32 memberKey = _member.addressToBytes32(msg.sender);
        castVoteAsMember(orgKey, voteKey, proposalKey, memberKey, voteFor);
    }

    //** MAKE PRIVATE */
    function castVoteAsMember(
        bytes32 orgKey,
        bytes32 voteKey,
        bytes32 proposalKey,
        bytes32 memberKey,
        bool voteFor
    ) public {
        //bytes32 memberKey = member.addressToBytes32(msg.sender);
        require(_org.memberExists(orgKey, memberKey), "Member must be part of the Org to Vote");
        require(_org.memberApprovedExists(orgKey, memberKey), "Member must be Approved in the Org to Vote");

        // check if repository has this Proposal (separate from org.poposals)
        if (_proposal.exists(proposalKey)) {
            DAOCake_Entities.ProposalType action;
            uint256 newVal = 0;

            // returns action & value when the proposal condition is met
            (action, newVal) = _proposal.voteAdd(voteKey, proposalKey, memberKey, voteFor);
            //bytes voteKey = memberKey;
            _vote.newVote(voteKey, proposalKey, memberKey, voteFor);

            // check if votes met to close this proposal

            if (action == DAOCake_Entities.ProposalType.NEW_MEMBER) // 'updateMemberAsApproved'
            {
                bytes32 approveMember = proposalKey;
                _org.memberApproved(orgKey, approveMember);
            } else if (action == DAOCake_Entities.ProposalType.ORG_RULES) // 'updateMemberVoteRules'
            {
                _org.setVotesRequired(orgKey, uint16(newVal));
            }
        }
    }

    // Member

    // function VoteStructReturnAsString (bytes32 voteKey, DAOCake_Entities.VoteStruct memory stru) public view returns (string memory) {
    //     //string memory delim = ",";
    //     return string(abi.encodePacked(
    //         voteKey, //delim,
    //         stru.proposalKey, //delim,
    //         stru.memberKey, //delim,
    //         stru.voteFor
    //     ));
    // }

    // function ProposalReturnAsString (bytes32 proposalKey, DAOCake_Entities.ProposalReturn memory stru) public view returns (string memory) {
    //     //string memory delim = ",";
    //     return string(abi.encodePacked(
    //         proposalKey, //delim,
    //         stru.orgKey, //delim,
    //         stru.memberKey, //delim,
    //         stru.name, //delim,
    //         stru.uuid, //delim,
    //         stru.doc_cid, //delim,
    //         stru.ref_id, //delim,
    //         stru.total, //delim,
    //         stru.nVotes, //delim,
    //         stru.proposalType, //delim,
    //         stru.decision
    //      ));
    // }

    // function bytes32ToString(bytes32 _bytes32) public pure returns (string memory) {
    //     uint8 i = 0;
    //     bytes memory bytesArray = new bytes(64);
    //     for (i = 0; i < bytesArray.length; i++) {

    //         uint8 _f = uint8(_bytes32[i/2] & 0x0f);
    //         uint8 _l = uint8(_bytes32[i/2] >> 4);

    //         bytesArray[i] = toByte(_f);
    //         i = i + 1;
    //         bytesArray[i] = toByte(_l);
    //     }
    //     return string(bytesArray);
    // }

    // function toByte(uint8 _uint8) public pure returns (byte memory ) {
    //     if(_uint8 < 10) {
    //         return byte(_uint8 + 48);
    //     } else {
    //         return byte(_uint8 + 87);
    //     }
    // }
}
