/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    while (nums[i] + 1 === nums[i + 1] && i < nums.length - 1) {
      i++;
    }
    if (n === nums[i]) answer.push(n + "");
    else {
      console.log(nums[i]);
      answer.push(n + "->" + nums[i]);
    }
  }
  return answer;
};
//* Hint: create a while loop to increment index when there's a range.
//* if index doesn't move then it is only 1 number, else it is a range

// @lc code=end
