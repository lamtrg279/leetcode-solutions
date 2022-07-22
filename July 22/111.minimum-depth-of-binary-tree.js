/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (!root.left) return right + 1;
  if (!root.right) return left + 1;
  return left < right ? left + 1 : right + 1;
  //* Note: add in 1 case where tree that doesn't have either a left or right subtree will return min = 1 which is wrong.

  //* For example:
  //* 3
  //*  \
  //*   20        this tree has min length = 3, not 1
  //*    \
  //*    7*/
};
// @lc code=end
