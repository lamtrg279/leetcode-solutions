/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let arr = [];
  let len = nums1.length > nums2.length ? nums1.length : nums2.length;

  for (let i = 0; i < len; i++) {
    if (nums2.indexOf(nums1[i]) !== -1 && arr.indexOf(nums1[i]) === -1) {
      arr.push(nums1[i]);
    }
  }
  return arr;
};
//* Go through the long arr only
//* Using indexOf, if the element in the long one is in the short one
//* Then just push it in
//* Unique: make sure that element is not in the result array (busing indexOf again)
//*
// @lc code=end
