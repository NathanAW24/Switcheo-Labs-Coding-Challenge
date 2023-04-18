import { ethers } from "ethers";

const SWTH_TOKEN_CONTRACT: string =
  "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const ADDRESSES: string[] = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

const SWTH_ABI: string[] = [
  "function balanceOf(address account) external view returns (uint256)",
  "function decimals() external view returns (uint8)",
];

async function retrieveHolders() {
  const swthContract = new ethers.Contract(
    SWTH_TOKEN_CONTRACT,
    SWTH_ABI,
    provider
  );
  const decimals = await swthContract.decimals();

  for (const address of ADDRESSES) {
    const rawBalance = await swthContract.balanceOf(address);
    const balance = ethers.utils.formatUnits(rawBalance, decimals);
    console.log(`${address} ${balance}`);
  }
}

retrieveHolders();
