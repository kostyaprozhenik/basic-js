const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digArr = n.toString().split('');

  const digit = [];
  for (let i = 0; i < digArr.length; i += 1) {
    digArr.splice(i, 1);
    digit.push(digArr.join(''));
    digArr = n.toString().split('');
  }
  digit.sort((a, b) => {
    Array.isArray(digit);
    return b - a;
  });

  return parseInt(digit[0], 10);
}

module.exports = {
  deleteDigit
};
