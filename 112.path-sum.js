/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && root.val === targetSum) return true;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

//* Need 2 edge cases: root is null -> false, root doesn't have any children and root.val == target -> true
//* It is solved by calling recursive hasPathSum of either left or right, with @param root as left or right, and @param targetSum is now = targetSum - root.val
//* Basically calling left and right with targetSum minus the root, if the last leaf node.val === target minus all the previous node.val -> true
//*
//*
//*
//*
// @lc code=end
