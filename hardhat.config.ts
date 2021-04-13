import { HardhatUserConfig } from 'hardhat/types';
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import {environment} from './environment';



const config = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.7.6",
    compilers: [{ version: "0.7.6", settings: {} }],
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${environment.infura}`,
      
      // GET MORE FUNDS HERE: https://faucet.rinkeby.io/
      accounts: [environment.rinkeby],
    },
  },
  etherscan: {
    apiKey: environment.etherscan,
  }
};
export default config;
