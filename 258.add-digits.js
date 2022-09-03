/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (Math.floor(num / 10) === 0) return num;

  while (num.toString().length !== 1) {
    num = (num % 10) + Math.floor(num / 10);
    console.log(num);
  }
  return num;
  //* Hint: It is very simple, just assign num equals to digit plus tenth
  //* e.g.: 7281 doesn't have to be 7 + 2 + 8 + 1 but it could be 728 + 1 = 729
  //* then 72 + 9 = 81, then 8 + 1. (because 7+2+8+1 is 7+2+(8+1) or essentially 72 + 9)
};
// @lc code=end
