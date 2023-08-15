/* eslint-disable no-undef */
const LabyrintheNFT = artifacts.require('Labyrinthe')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(LabyrintheNFT, 'Labyrinthe NFTs', 'TNT', 10, accounts[1])
}
