// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Replace 'BalanceReader' with the name of your contract
  const BalanceReader = await hre.ethers.getContractFactory("BalanceReader");
  const balanceReader = await BalanceReader.deploy(); // Add any constructor arguments if needed

  await balanceReader.deployed();

  console.log("BalanceReader deployed to:", balanceReader.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
