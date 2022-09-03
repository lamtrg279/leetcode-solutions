/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let current = root;
  let stack = [];
  let result = [];

  while (current || stack.length !== 0) {
    //* Left
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop(); //* Itself
    result.push(current.val);
    current = current.right; //* Right
  }
  return result;
};
//* Hint: add root to stack, move to left until !curr
//* Pop the stack and add it to result, move to right
//* Repeat
//* Note: left -> itself -> right
// @lc code=end
