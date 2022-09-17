/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function (root) {
  return helper(root, false);
};

var helper = function (root, isLeft) {
  if (!root) return 0;
  if (!root.left && !root.right && isLeft) {
    return root.val;
  }
  return helper(root.left, true) + helper(root.right, false);
};
//Hint: create helper function, need a boolean 'isLeft' to identify left node
//Base case: !root return 0
//In helper function: make this condition: no children && left leaf
//This is how: !root.left && !root.right (no children) && isLeft
//If so then return the value
//Else return this: helper with leftNode, isLeft=true && rightNode, isLeft=false

// @lc code=end
