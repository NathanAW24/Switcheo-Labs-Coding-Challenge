const hre = require("hardhat");

async function main() {
  const deployer1 = await hre.ethers.getSigner(0);
  const deployer2 = await hre.ethers.getSigner(1);

  console.log("Deploying BalanceReader with the account:", deployer1.address);
  const BalanceReader = await hre.ethers.getContractFactory("BalanceReader");
  const balanceReader = await BalanceReader.connect(deployer1).deploy();
  await balanceReader.deployed();
  console.log("BalanceReader deployed to:", balanceReader.address);

  console.log("Deploying MyToken with the account:", deployer2.address);
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const initialSupply = hre.ethers.utils.parseEther("1000");
  const myToken = await MyToken.connect(deployer2).deploy(initialSupply);
  await myToken.deployed();
  console.log("MyToken deployed to:", myToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
