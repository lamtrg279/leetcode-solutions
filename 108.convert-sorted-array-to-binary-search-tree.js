/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null;
  return helper(nums, 0, nums.length - 1);
};

var helper = (nums, left, right) => {
  if (left > right) return null;
  let mid = left + Math.floor((right - left) / 2);
  let node = new TreeNode(nums[mid]);
  node.left = helper(nums, left, mid - 1);
  node.right = helper(nums, mid + 1, right);
  return node;
};
// @lc code=end
