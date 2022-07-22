/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let x = Math.ceil(nums.length / 2);
  let hs = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hs.hasOwnProperty(nums[i])) {
      hs[nums[i]] = 1;
    } else {
      hs[nums[i]]++;
    }
  }

  for (let key of Object.keys(hs)) {
    if (hs[key] >= x) return key;
  }
  return hs;
};
// @lc code=end
