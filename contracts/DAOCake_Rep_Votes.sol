// SPDX-License-Identifier
pragma solidity ^0.8.6;

import "./HitchensUnorderedKeySet.sol";
import "./DAOCake_Entities.sol";

contract DAOCake_Rep_Votes {
    using HitchensUnorderedKeySetLib for HitchensUnorderedKeySetLib.Set;
    HitchensUnorderedKeySetLib.Set voteSet;

    // struct VoteStruct {
    //     bytes32 proposalKey;
    //     bytes32 memberKey;
    //     bool voteFor; // or Against == false
    // }

    mapping(bytes32 => DAOCake_Entities.VoteStruct) votes;

    event LogNewVote(address sender, bytes32 proposalKey, bool voteFor);

    // event LogUpdateVote(address sender, bytes32 key, string name, bool delux, uint256 price);
    // event LogRemVote(address sender, bytes32 key);

    function newVote(
        bytes32 key,
        bytes32 proposalKey,
        bytes32 memberKey,
        bool voteFor
    ) public {
        voteSet.insert(key); // Note that this will fail automatically if the key already exists.
        DAOCake_Entities.VoteStruct storage v = votes[key];
        v.proposalKey = proposalKey;
        v.memberKey = memberKey;
        v.voteFor = voteFor;

        emit LogNewVote(msg.sender, proposalKey, voteFor);
    }

    // function updateVote(
    //     bytes32 key,
    //     string memory name,
    //     bool delux,
    //     uint256 price
    // ) public {
    //     require(voteSet.exists(key), "Can't update a vote that doesn't exist.");
    //     DAOCake_Entities.VoteStruct storage w = votes[key];
    //     w.name = name;
    //     w.delux = delux;
    //     w.price = price;
    //     emit LogUpdateVote(msg.sender, key, name, delux, price);
    // }

    function exists(bytes32 key) public view returns (bool) {
        return voteSet.exists(key);
    }

    // function remVote(bytes32 key) public {
    //     voteSet.remove(key); // Note that this will fail automatically if the key doesn't exist
    //     delete votes[key];
    //     emit LogRemVote(msg.sender, key);
    // }

    function getVote(bytes32 key) public view returns (DAOCake_Entities.VoteStruct memory) // returns (
    //     bytes32 proposalKey,
    //     bytes32 memberKey,
    //     bool voteFor
    // )
    {
        require(voteSet.exists(key), "Can't get a Vote that doesn't exist.");
        DAOCake_Entities.VoteStruct storage v = votes[key];
        return v;
        //(v.proposalKey, v.memberKey, v.voteFor);
    }

    function getVoteCount() public view returns (uint256 count) {
        return voteSet.count();
    }

    function getVoteAtIndex(uint256 index) public view returns (bytes32 key) {
        return voteSet.keyAtIndex(index);
    }
}
