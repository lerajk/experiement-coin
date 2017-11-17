var HumanStandardToken = artifacts.require("./HumanStandardToken.sol");
var Crowdsale = artifacts.require("./Crowdsale.sol");
var MiniMeTokenFactory = artifacts.require("./MiniMeTokenFactory.sol");
var MiniMeToken = artifacts.require("./MiniMeToken.sol");

module.exports = function(deployer) {
  var startTime = 1509563344;
  var endTime = 1511377744;
  var hardCap = 83334 * 10^18;
  var softCap = 8334 * 10^18;
  var beneficiary = "0xEa5bd9FD61954561EaE7E6890e44BFe5831fEBE7";
  var multiSig = "0x40DA434B0d32BD04896c6723E41E4c9840d36342";

 /* deployer.deploy(HumanStandardToken, 500000000, "DREAM", 18, "DREAM")
  .then(function () {
    return deployer.deploy(MiniMeToken,Crowdsale, HumanStandardToken.address, startTime, endTime, softCap, hardCap, beneficiary, multiSig)
  }).then(function() {
    console.log("Done deploying");
  }); */

deployer.deploy(MiniMeTokenFactory)
.then(function() {
  return deployer.deploy(MiniMeTokenFactory.address ,"0x0", 0, "TEST",3,"TST", true)
}).then(function(){
  console.log("Done");
});


  //deployer.deploy(MiniMeTokenFactory);

  //MiniMeTokenFactory.deployed().then(contract => { deployer.deploy("address","0x0", 0, "TEST",3,"TST", true) }); //... call contract.deployFunction here })

}



