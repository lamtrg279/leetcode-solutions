/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  while (n % 4 === 0) n = Math.floor(n / 4);
  return n === 1;
};
//* Same as power of three, keep dividing n by 4 until it is = 1 (true) or not
// @lc code=end
