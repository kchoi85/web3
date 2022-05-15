require("dotenv").config();

const Web3 = require("web3");

// RPC stands for Remote Procedure Call
const rpcURL = `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;
const web3 = new Web3(rpcURL);

const address = process.env.PERSONAL_ACCOUNT;

// Wei is the smallest subdivision of Ether.
web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, "ether");
  console.log(balance);
});

/*
A smart contract ABI stands for "Abstract Binary Interface",
 and is a JSON array that describes how a specific smart contract 
 works. Here is an example an ABI:
*/
