var Voting = artifacts.require("./Voting.sol");
modules.exports = function(deployer){
  deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'], {gas : 6700000});
};