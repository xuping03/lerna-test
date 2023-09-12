'use strict';

const testModule2 = require('..');
const assert = require('assert').strict;

assert.strictEqual(testModule2(), 'Hello from testModule2');
console.info('testModule2 tests passed');
