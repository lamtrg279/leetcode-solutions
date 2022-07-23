/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hm = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hm.hasOwnProperty(nums[i])) hm[nums[i]] = 1;
    else hm[nums[i]]++;
  }

  for (let key of Object.keys(hm)) {
    if (hm[key] === 1) return key;
  }
};
// @lc code=end
