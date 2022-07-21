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
    //* Push all of the left subtree
    while (current) {
      stack.push(current);
      current = current.left;
    }
    //* Pop out the stack and add it to the result
    //* Also move to the right and check its left (if there is any)
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};
// @lc code=end
