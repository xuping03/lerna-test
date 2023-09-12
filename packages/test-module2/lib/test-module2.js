'use strict';

module.exports = testModule2;
const testModule1 = require('test-module1');
function testModule2() {
  return 'Hello from testModule2';
}
testModule1();
console.log(testModule1());
console.log(testModule2());
