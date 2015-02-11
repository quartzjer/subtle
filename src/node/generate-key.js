var crypto = require("crypto");
var Promise = require("node-promise").Promise;

var generateKey = function generateKey(){
  return new Promise(function rejecter(resolve,reject){
    resolve({"foo":"bar"});
  });
};

module.exports = generateKey;
