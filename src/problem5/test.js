const { ethers } = require("ethers");
const fs = require('fs');
const dotenv = require("dotenv").config();
const hre = require("hardhat"); 

// const ADDR = process.env.CONTRACT_ADDRESS;   // your contract address
// const ABI = JSON.parse(fs.readFileSync('./artifacts/contracts/BalanceReader.sol/BalanceReader.json', 'utf8')).abi;    // your contract ABI

// const ADDRESS = process.env.WALLET_ADDRESS; // some wallet address with token balance
// const TOKENS =  process.env.TOKEN_ADDRESSES.split(',');  // token contract addresses

const ADDR = "0x5FbDB2315678afecb367f032d93F642f64180aa3";   // your contract address
const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "wallet",
          "type": "address"
        },
        {
          "internalType": "address[]",
          "name": "tokenAddresses",
          "type": "address[]"
        }
      ],
      "name": "getBalances",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            }
          ],
          "internalType": "struct BalanceReader.TokenBalance[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];    // your contract ABI

const ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // some wallet address with token balance
const TOKENS =  ["0x5FbDB2315678afecb367f032d93F642f64180aa3"];  // token contract addresses

// const provider = ethers.providers.getDefaultProvider();
const provider = hre.ethers.provider;

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);
