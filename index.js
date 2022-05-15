require("dotenv").config();

const Web3 = require("web3");

// RPC stands for Remote Procedure Call
const rpcURL = `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
// Connect to Ethereum Node
const web3 = new Web3(rpcURL);

const personal_address = process.env.PERSONAL_WALLET;

// Wei is the smallest subdivision of Ether.
web3.eth.getBalance(personal_address, (err, wei) => {
  balance = web3.utils.fromWei(wei, "ether");
  console.log("personal balance:", balance);
});

/*
 The Contract Application Binary Interface (ABI)
 is the standard way to interact with contracts in the
 Ethereum ecosystem, both from outside the blockchain and 
 for contract-to-contract interaction. Data is encoded according
 to its type, as described in this specification.
 
 It's a JSON array that describes how a specific smart contract 
 works.
*/

// const contract = new web3.eth.Contract(abi, address)

// contract.methods.totalSupply().call((err, result) => {
//   console.log(result);
// });
// contract.methods.name().call((err, result) => {
//   console.log(result);
// });
// contract.methods.symbol().call((err, result) => {
//   console.log(result);
// });
// contract.methods
//   .balanceOf("0xd26114cd6EE289AccF82350c8d8487fedB8A0C07")
//   .call((err, result) => {
//     console.log(result);
//   });

// OmiseGo (OMG) token, which implements the ERC-20 token standard
const OMG_abi = [
  {
    constant: true,
    inputs: [],
    name: "mintingFinished",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_amount", type: "uint256" },
    ],
    name: "mint",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "finishMinting",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_amount", type: "uint256" },
      { name: "_releaseTime", type: "uint256" },
    ],
    name: "mintTimelocked",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "remaining", type: "uint256" }],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Mint",
    type: "event",
  },
  { anonymous: false, inputs: [], name: "MintFinished", type: "event" },
  { anonymous: false, inputs: [], name: "Pause", type: "event" },
  { anonymous: false, inputs: [], name: "Unpause", type: "event" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: true, name: "spender", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
];

// Address of OMG Token from the Ethereum main net
const OMG_address = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07";

// JS Representation of the OMG Token smart contract
const OMG_contract = new web3.eth.Contract(OMG_abi, OMG_address);

OMG_contract.methods.totalSupply().call((err, result) => {
  console.log("total supply:", result);
}); //140245398245132780789239631

OMG_contract.methods.name().call((err, result) => {
  console.log("name:", result);
}); //OMGToken

OMG_contract.methods.symbol().call((err, result) => {
  console.log("symbol:", result);
});

OMG_contract.methods.balanceOf(personal_address).call((err, result) => {
  console.log("balance of OMGToken in personal addr:", result);
});
