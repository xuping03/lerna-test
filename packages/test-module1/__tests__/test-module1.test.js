'use strict';

const testModule1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(testModule1(), 'Hello from testModule1');
console.info('testModule1 tests passed');
