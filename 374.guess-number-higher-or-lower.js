/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let low = 1,
    high = n;
  let mid;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    let result = guess(mid);
    if (result === 0) {
      return mid;
    }
    if (result === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};
// @lc code=end
