/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let left = 0;
  let right = n;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (Math.pow(2, mid) === n) return true;
    if (Math.pow(2, mid) > n) right = mid;
    if (Math.pow(2, mid) < n) left = mid + 1;
  }
  return false;
};
// @lc code=end
