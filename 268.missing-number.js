/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length;
  let sum = 0;
  let total = (len * (len + 1)) / 2;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return total - sum;
};
//* We have a popular math trick which is the sum of 1+2+...+n = n*(n+1)/2, it can be used here.
//* Since we are finding the missing number, just get the sum of all the n number first using the formula, and the minus it to the sum of all the numbers in the array, we get the missing number.*/
// @lc code=end
