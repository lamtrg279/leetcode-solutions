/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {};
  for (const n of nums1) {
    map[n] ? map[n]++ : (map[n] = 1);
  }

  let result = [];
  for (const n of nums2) {
    if (map[n]) {
      result.push(n);
      map[n]--;
    }
  }
  return result;
};
//* Hint: super easy using {}, just put everything from nums1 to {}
//* Then see if anything in nums2 in {}, and minus that element in {}
// @lc code=end
