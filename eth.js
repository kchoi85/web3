require("dotenv").config();

const Web3 = require("web3");
var Tx = require("ethereumjs-tx").Transaction;

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

// sign transcations locally with ethereumjs-tx
const web3_ropsten = new Web3(
  `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
);

// create test sender and receiver accounts
const sender = web3_ropsten.eth.accounts.create();

/*
{
  address: '0x40a8ea41f8d87E362426607D5a57a4D36CDA28B7',
  privateKey: '0x1d347dd7b2f220628d613adacea22f15992945435de0c6f43850034603a696f9',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt]
}
*/

const receiver = web3_ropsten.eth.accounts.create();
/**
 {
  address: '0xFDC18488e5ADB18d0313eC28a2a5248632C5242e',
  privateKey: '0x852a3046597624f17350b767f47936acd559e321fffb6d4e2adc7b48d18c437b',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt]
}
 */

const sender_addr = sender.address;
const sender_pKey = sender.privateKey;
const receiver_addr = receiver.address;
const receiver_pKey = receiver.privateKey;

// to sign transaction with pKeys, must convert to string of binary data with Buffer
const pKey1 = Buffer.from(sender_pKey, "hex");
const pKey2 = Buffer.from(receiver_pKey, "hex");

/*
nonce - this is the previous transaction count for the given account. We'll assign the value of this variable momentarily. We also must convert this value to hexidecimal. We can do this with the Web3.js utilitly web3.utils.toHex()
to - the account we're sending Ether to.
value - the amount of Ether we want to send. This value must be expressed in Wei and converted to hexidecimal. We can convert the value to we with the Web3.js utility web3.utils.toWei().
gasLimit - this is the maximum amount of gas consumed by the transaction. A basic transaction like this always costs 21000 units of gas, so we'll use that for the value here.
gasPrice - this is the amount we want to pay for each unit of gas. I'll use 10 Gwei here.
*/

web3_ropsten.eth.getTransactionCount(sender_addr, (err, txCount) => {
  // Transaction object
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: receiver_addr,
    value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  };

  // using the etheremjs-tx library to create a new Tx object.
  // We also use this library to sign the transaction with privateKey1
  const tx = new Tx(txObject);
  tx.sign(pKey1);

  // we serialize the transaction and convert it to a hexidecimal string
  // so that it can be passed to Web3.
  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  // We send the transaction to the Ethereum network.
  web3_ropsten.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash", txHash);
  });
});
