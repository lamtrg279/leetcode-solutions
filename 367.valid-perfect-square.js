/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) {
    return true;
  }

  let left = 2;
  let right = Math.floor(num / 2);

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (mid * mid === num) {
      return true;
    }
    if (mid * mid <= num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
// @lc code=end
