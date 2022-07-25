/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
var preorderTraversal = function (root) {
  let current = root;
  let stack = [];
  let result = [];

  while (current || stack.length !== 0) {
    while (current) {
      result.push(current.val); //* Itself
      stack.push(current);
      current = current.left; //* Left
    }
    current = stack.pop();
    current = current.right; //* Right
  }
  return result;
};
//*Hint: Add root to result, add right to stack, move to left -> repeat
//* Preorder: root -> left -> right so we have to add the root (curr) to the result stack.
//* Then add root.right to the stack and move to the left,
//* When !curr, we pop the stack
// @lc code=end
