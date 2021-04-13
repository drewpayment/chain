import { ethers } from 'hardhat';

async function main() {
  const factory = await ethers.getContractFactory("Counter");
  // if we had constructor arguments, they would be passed into deploy()
  let contract = await factory.deploy();
  // the address the contract WILL have once mined
  console.log(contract.address);
  // the transaction that was sent to the network to deploy the Contract
  console.log(contract.deployTransaction.hash);
  // the contract is NOT deployed yet; we must wait until it is mined
  await contract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });