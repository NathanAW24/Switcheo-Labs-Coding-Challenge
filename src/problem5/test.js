const { ethers } = require("ethers");
const fs = require('fs');
const dotenv = require("dotenv").config();
const hre = require("hardhat"); 

const ADDR = process.env.CONTRACT_ADDRESS;   // your contract address

const ABI = JSON.parse(fs.readFileSync('./artifacts/contracts/BalanceReader.sol/BalanceReader.json', 'utf8')).abi;    // your contract ABI


const ADDRESS = process.env.WALLET_ADDRESS; // some wallet address with token balance
const TOKENS =  process.env.TOKEN_ADDRESSES.split(',');  // token contract addresses


// const provider = ethers.providers.getDefaultProvider();
const provider = hre.ethers.provider;

// console.log("provider.getCode(ADDRESS) ", provider.getCode(TOKENS[0]));

const test = async () => {
	console.log(await provider.getCode(ADDR));
	console.log(await provider.getCode(ADDRESS));
	console.log(await provider.getCode(TOKENS[0]));
	const contract = new ethers.Contract(ADDR, ABI, provider);
	// console.log("CONTRACT IS HERE ", contract); // no problem with ADDR and ABI it seems

	const balances = await contract.getBalances(ADDRESS, TOKENS);
	// console.log("BALANCES ARE HERE ", balances);

	
	return balances;
};

test().then(console.log);
