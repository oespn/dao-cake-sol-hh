/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  DAOCake_Rep_Orgs,
  DAOCake_Rep_OrgsInterface,
} from "../DAOCake_Rep_Orgs";
import type { PromiseOrValue } from "../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ref",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "memberKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "members",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "voteForRequired",
        type: "uint16",
      },
    ],
    name: "LogNewOrg",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "LogRemOrg",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ref",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "memberKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "members",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "proposals",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "voteForRequired",
        type: "uint16",
      },
    ],
    name: "LogUpdateOrg",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getOrg",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "ref",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "memberKey",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "nMembers",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "voteForRequired",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getOrgAtIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOrgCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orgKey",
        type: "bytes32",
      },
    ],
    name: "getOrgMembers",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "array",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orgKey",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "memberKey",
        type: "bytes32",
      },
    ],
    name: "memberAdd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orgKey",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "memberKey",
        type: "bytes32",
      },
    ],
    name: "memberExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "ref",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "memberKey",
        type: "bytes32",
      },
    ],
    name: "newOrg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orgKey",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "proposalKey",
        type: "bytes32",
      },
    ],
    name: "proposalAdd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "remOrg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "ref",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "memberKey",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "nMembers",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "voteForRequired",
        type: "uint16",
      },
    ],
    name: "updateOrg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611404806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80635c90bc56116100815780639889f0141161005b5780639889f01414610191578063ea128891146101a4578063f1136948146101c457600080fd5b80635c90bc56146101475780636751698a1461015a57806381e845891461016d57600080fd5b806322283184116100b2578063222831841461011757806323d262531461012c57806338a699a41461013457600080fd5b806313aa8b82146100ce5780631cafc709146100f4575b600080fd5b6100e16100dc366004610e72565b6101d7565b6040519081526020015b60405180910390f35b610107610102366004610e8b565b6101e9565b60405190151581526020016100eb565b61012a610125366004610f50565b61026b565b005b6001546100e1565b610107610142366004610e72565b610366565b61012a610155366004610e8b565b610372565b61012a610168366004610e72565b6104e1565b61018061017b366004610e72565b610594565b6040516100eb959493929190611012565b61012a61019f366004610e8b565b61075b565b6101b76101b2366004610e72565b6108ba565b6040516100eb919061105a565b61012a6101d23660046110b5565b610988565b60006101e38183610ab5565b92915050565b60006101f58184610adf565b6102465760405162461bcd60e51b815260206004820152601f60248201527f43616e27742066696e64204f726720746f20636865636b204d656d6265722e0060448201526064015b60405180910390fd5b5060009182526002602090815260408084209284526004909201905290205460ff1690565b610276600085610b2f565b600084815260026020908152604090912084519091610299918391870190610d82565b5082516102af9060018301906020860190610d82565b506002810182905560038101805460068301805463ffffffff199081169091551662010001178155600582018054600181810183556000928352602080842090920186905585835260048501909152604091829020805460ff19169091179055905490517f65a3890cb89f183e84abf5e6910b7a05d9b149e8a0333adf9a242dbecfaf027391610357913391899189918991899161ffff62010000820481169291169061114c565b60405180910390a15050505050565b60006101e38183610adf565b61037d600083610adf565b6103d95760405162461bcd60e51b815260206004820152602760248201527f43616e27742061646420746f20616e204f7267207468617420646f65736e27746044820152661032bc34b9ba1760c91b606482015260840161023d565b600082815260026020908152604080832084845260048101909252822054909160ff909116151590036104795760038101546104209062010000900461ffff1660016111ce565b60038201805461ffff92909216620100000263ffff0000199092169190911790556005810180546001818101835560009283526020808420909201859055848352600484019091526040909120805460ff191690911790555b600381015460068201546040517f85460b85a330faac8c7c6693f6d8f58552f956d1ba7e9049e0f6b662ba70fe42926104d49233928892879260018401928a9261ffff62010000820481169363ffffffff16929116906112cd565b60405180910390a1505050565b6104ec600082610c59565b6000818152600260205260408120906105058282610e06565b610513600183016000610e06565b60006002830181905560038301805463ffffffff19169055610539906005840190610e43565b60068201805463ffffffff19169055610556600883016000610e43565b505060408051338152602081018390527fe64d627c106f3fc3a7c779a7a8e23f5e63ff1022b375d114bfde3cf997ed621d910160405180910390a150565b606080600080806105a58187610adf565b6105fd5760405162461bcd60e51b8152602060048201526024808201527f43616e27742067657420616e204f7267207468617420646f65736e277420657860448201526334b9ba1760e11b606482015260840161023d565b6000868152600260208190526040909120908101546003820154825483926001840192909161ffff6201000083048116921690859061063b906111f4565b80601f0160208091040260200160405190810160405280929190818152602001828054610667906111f4565b80156106b45780601f10610689576101008083540402835291602001916106b4565b820191906000526020600020905b81548152906001019060200180831161069757829003601f168201915b505050505094508380546106c7906111f4565b80601f01602080910402602001604051908101604052809291908181526020018280546106f3906111f4565b80156107405780601f1061071557610100808354040283529160200191610740565b820191906000526020600020905b81548152906001019060200180831161072357829003601f168201915b50505050509350955095509550955095505091939590929450565b610766600083610adf565b6107c25760405162461bcd60e51b815260206004820152602760248201527f43616e27742061646420746f20616e204f7267207468617420646f65736e27746044820152661032bc34b9ba1760c91b606482015260840161023d565b600082815260026020908152604080832084845260078101909252822054909160ff909116151590036108595760068101546108059063ffffffff16600161134b565b60068201805463ffffffff191663ffffffff929092169190911790556008810180546001818101835560009283526020808420909201859055848352600784019091526040909120805460ff191690911790555b6002810154600382015460068301546040517f85460b85a330faac8c7c6693f6d8f58552f956d1ba7e9049e0f6b662ba70fe42936104d4933393899388936001850193909261ffff62010000830481169363ffffffff9092169216906112cd565b60606108c7600083610adf565b61091f5760405162461bcd60e51b8152602060048201526024808201527f43616e27742067657420616e204f7267207468617420646f65736e277420657860448201526334b9ba1760e11b606482015260840161023d565b60008281526002602090815260409182902060058101805484518185028101850190955280855291939290919083018282801561097b57602002820191906000526020600020905b815481526020019060010190808311610967575b5050505050915050919050565b610993600087610adf565b6109ef5760405162461bcd60e51b815260206004820152602760248201527f43616e27742075706461746520616e204f7267207468617420646f65736e27746044820152661032bc34b9ba1760c91b606482015260840161023d565b600086815260026020908152604090912086519091610a12918391890190610d82565b508451610a289060018301906020880190610d82565b506002810184905560038101805463ffffffff19166201000061ffff8681169190910261ffff19169190911790841617905560068101546040517f85460b85a330faac8c7c6693f6d8f58552f956d1ba7e9049e0f6b662ba70fe4291610aa49133918b918b918b918b918b9163ffffffff909116908b9061136a565b60405180910390a150505050505050565b6000826001018281548110610acc57610acc6113b4565b9060005260206000200154905092915050565b60018201546000908103610af5575060006101e3565b6000828152602084905260409020546001840180548492908110610b1b57610b1b6113b4565b906000526020600020015414905092915050565b6000819003610ba65760405162461bcd60e51b815260206004820152602860248201527f556e6f7264657265644b65795365742831303029202d204b65792063616e6e6f60448201527f7420626520307830000000000000000000000000000000000000000000000000606482015260840161023d565b610bb08282610adf565b15610c235760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303129202d204b657920616c72656160448201527f64792065786973747320696e20746865207365742e0000000000000000000000606482015260840161023d565b6001808301805480830182556000828152602090200183905554610c4791906113ca565b60009182526020929092526040902055565b610c638282610adf565b610cd55760405162461bcd60e51b815260206004820152603560248201527f556e6f7264657265644b65795365742831303229202d204b657920646f65732060448201527f6e6f7420657869737420696e20746865207365742e0000000000000000000000606482015260840161023d565b60018281018054600092610ce8916113ca565b81548110610cf857610cf86113b4565b6000918252602080832090910154848352908590526040808320548284529220829055600185018054919350839183908110610d3657610d366113b4565b600091825260208083209091019290925584815290859052604081205560018401805480610d6657610d666113e1565b6001900381819060005260206000200160009055905550505050565b828054610d8e906111f4565b90600052602060002090601f016020900481019282610db05760008555610df6565b82601f10610dc957805160ff1916838001178555610df6565b82800160010185558215610df6579182015b82811115610df6578251825591602001919060010190610ddb565b50610e02929150610e5d565b5090565b508054610e12906111f4565b6000825580601f10610e22575050565b601f016020900490600052602060002090810190610e409190610e5d565b50565b5080546000825590600052602060002090810190610e4091905b5b80821115610e025760008155600101610e5e565b600060208284031215610e8457600080fd5b5035919050565b60008060408385031215610e9e57600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610ed457600080fd5b813567ffffffffffffffff80821115610eef57610eef610ead565b604051601f8301601f19908116603f01168101908282118183101715610f1757610f17610ead565b81604052838152866020858801011115610f3057600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215610f6657600080fd5b84359350602085013567ffffffffffffffff80821115610f8557600080fd5b610f9188838901610ec3565b94506040870135915080821115610fa757600080fd5b50610fb487828801610ec3565b949793965093946060013593505050565b6000815180845260005b81811015610feb57602081850181015186830182015201610fcf565b81811115610ffd576000602083870101525b50601f01601f19169290920160200192915050565b60a08152600061102560a0830188610fc5565b82810360208401526110378188610fc5565b6040840196909652505061ffff9283166060820152911660809091015292915050565b6020808252825182820181905260009190848201906040850190845b8181101561109257835183529284019291840191600101611076565b50909695505050505050565b803561ffff811681146110b057600080fd5b919050565b60008060008060008060c087890312156110ce57600080fd5b86359550602087013567ffffffffffffffff808211156110ed57600080fd5b6110f98a838b01610ec3565b9650604089013591508082111561110f57600080fd5b5061111c89828a01610ec3565b945050606087013592506111326080880161109e565b915061114060a0880161109e565b90509295509295509295565b73ffffffffffffffffffffffffffffffffffffffff8816815286602082015260e06040820152600061118160e0830188610fc5565b82810360608401526111938188610fc5565b6080840196909652505061ffff92831660a0820152911660c090910152949350505050565b634e487b7160e01b600052601160045260246000fd5b600061ffff8083168185168083038211156111eb576111eb6111b8565b01949350505050565b600181811c9082168061120857607f821691505b60208210810361122857634e487b7160e01b600052602260045260246000fd5b50919050565b8054600090600181811c908083168061124857607f831692505b6020808410820361126957634e487b7160e01b600052602260045260246000fd5b838852602088018280156112845760018114611295576112c0565b60ff198716825282820197506112c0565b60008981526020902060005b878110156112ba578154848201529086019084016112a1565b83019850505b5050505050505092915050565b600061010073ffffffffffffffffffffffffffffffffffffffff8b1683528960208401528060408401526113038184018a61122e565b90508281036060840152611317818961122e565b6080840197909752505061ffff93841660a082015263ffffffff9290921660c083015290911660e090910152949350505050565b600063ffffffff8083168185168083038211156111eb576111eb6111b8565b600061010073ffffffffffffffffffffffffffffffffffffffff8b1683528960208401528060408401526113a08184018a610fc5565b905082810360608401526113178189610fc5565b634e487b7160e01b600052603260045260246000fd5b6000828210156113dc576113dc6111b8565b500390565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080d000a";

type DAOCake_Rep_OrgsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DAOCake_Rep_OrgsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DAOCake_Rep_Orgs__factory extends ContractFactory {
  constructor(...args: DAOCake_Rep_OrgsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DAOCake_Rep_Orgs> {
    return super.deploy(overrides || {}) as Promise<DAOCake_Rep_Orgs>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DAOCake_Rep_Orgs {
    return super.attach(address) as DAOCake_Rep_Orgs;
  }
  override connect(signer: Signer): DAOCake_Rep_Orgs__factory {
    return super.connect(signer) as DAOCake_Rep_Orgs__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAOCake_Rep_OrgsInterface {
    return new utils.Interface(_abi) as DAOCake_Rep_OrgsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DAOCake_Rep_Orgs {
    return new Contract(address, _abi, signerOrProvider) as DAOCake_Rep_Orgs;
  }
}
