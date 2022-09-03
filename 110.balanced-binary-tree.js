/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true;
  return (
    Math.abs(helper(root.left) - helper(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

var helper = function (root) {
  if (root === null) return 0;
  let left = helper(root.left);
  let right = helper(root.right);
  return left > right ? left + 1 : right + 1;
};
//* Definition of balanced tree is length of left and right doesn't differ more than 1, and each subtree is also balanced. so the key is just find the depth of each subtree
//* Then find the absolute of a minus b && is left balanced && is right balanced
// @lc code=end
