const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return (str.split('')
  .reduce((acc,cur,id,arr) => (
    acc.length === 0 
    ? acc[acc.length] = [1, cur] 
    : acc[acc.length-1][1] === cur 
      ? acc[acc.length-1][0] += 1 
      : acc[acc.length] = [1, cur], 
      acc), []).map(el => (''.concat(el[0] === 1 ? '' : el[0],el[1]))).join(''));
}

module.exports = {
  encodeLine
};
