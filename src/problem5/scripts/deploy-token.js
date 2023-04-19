const hre = require("hardhat");

async function main() {
//   const [deployer] = await hre.ethers.getSigners();
const deployer = await hre.ethers.getSigner(1);

  console.log("Deploying contracts with the account:", deployer.address);

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const initialSupply = hre.ethers.utils.parseEther("1000"); // Adjust the initial supply as needed
  const myToken = await MyToken.deploy(initialSupply);

  await myToken.deployed();

  console.log("MyToken deployed to:", myToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
