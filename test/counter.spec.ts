import { solidity } from 'ethereum-waffle';
import { ethers } from 'hardhat';
import { Counter } from '../typechain/Counter';
import { use, expect } from 'chai';

use(solidity);

describe("Counter", () => {
  let counter: Counter;
  
  beforeEach(async () => {
    // 1 
    const signers = await ethers.getSigners();
    
    // 2 
    const counterFactory = await ethers.getContractFactory(
      "Counter",
      signers[0]
    );
    counter = (await counterFactory.deploy()) as Counter;
    await counter.deployed();
    const initialCount = await counter.getCount();
    
    // 3
    expect(initialCount).to.eq(0);
    expect(counter.address).to.properAddress;
  });
  
  // 4
  describe("count up", async () => {
    it("should count up", async () => {
      await counter.countUp();
      let count = await counter.getCount();
      expect(count).to.eq(1);
    });
  });
  
  describe("count down", async () => {
    // 5
    it("should fail", async () => {
      await counter.countDown();
    });
    
    it("should count down", async () => {
      await counter.countUp();
      await counter.countDown();
      const count = await counter.getCount();
      expect(count).to.eq(0);
    });
  });
});
