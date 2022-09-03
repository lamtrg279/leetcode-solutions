/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  while (n % 3 === 0) n = Math.floor(n / 3);
  return n === 1;
};
//* Hint: if n can divided by 3 then keep doing so, until we have n at the smallest values 1
//* Because example 27 / 3 / 3 / 3 = 1 => 27 is a power of three
//* So if n === 1 then true, else false
// @lc code=end
