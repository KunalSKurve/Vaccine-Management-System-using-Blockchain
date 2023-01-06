require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/IbcUBKFhq-jh7d2QrYpWdFyK4m6EutdJ",
      accounts: [ '8ba7ef6326ab4f174d584a5cdef2c0e491469ada6835836098b0c5a205fa89d5' ],
    },
  },
};
