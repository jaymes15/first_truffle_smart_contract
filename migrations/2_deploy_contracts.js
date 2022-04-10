var Greetings = artifacts.require("../contracts/Greetings.sol");

module.exports = function(deployer){
  deployer.deploy(Greetings);
}
