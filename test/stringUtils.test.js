const assert = require('assert');
const { capitalize, reverse } = require('../src/stringUtils');

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');

assert.strictEqual(reverse('hello'), 'olleh');
assert.strictEqual(reverse(''), '');

console.log('All tests passed.');
