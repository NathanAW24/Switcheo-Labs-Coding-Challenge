const hre = require("hardhat");

async function main() {
  const deployer = await hre.ethers.getSigner(0);
  console.log("Deployer:", deployer);

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
