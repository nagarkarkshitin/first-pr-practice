const assert = require('assert');
const { capitalize, reverse, isPalindrome } = require('../src/stringUtils');

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');

assert.strictEqual(reverse('hello'), 'olleh');
assert.strictEqual(reverse(''), '');

assert.strictEqual(isPalindrome('racecar'), true);
assert.strictEqual(isPalindrome('A man, a plan, a canal: Panama'), true);
assert.strictEqual(isPalindrome('hello'), false);

console.log('All tests passed.');
