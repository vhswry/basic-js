const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let sum = (a, b) => ((Number.isNaN(+a) ? 0 : (+a)) +
    (Number.isNaN(+b) ? 0 : (+b)));
  return (typeof n === "number" ? +[...n.toString()].reduce((a, b) => {
    c = sum(a, b);
    return c < 10 ? c : sum(...c.toString())
  }) : 0)
}

module.exports = {
  getSumOfDigits
};
