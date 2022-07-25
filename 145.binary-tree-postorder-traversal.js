/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let current = root;

  if (!root) return result;

  stack.push(root);

  while (stack.length !== 0) {
    let current = stack.pop();
    result.unshift(current.val); //* Itself (supposed to be the last, but we 'unshift')
    if (current.left) stack.push(current.left); //* Left
    if (current.right) stack.push(current.right); //* Right
  }
  return result;
};
//* Hint: Add root node to the stack first.
//* This is how it travels: left -> right -> itself
//* Basically it will try to move to the left node first, and right node,
//* If both are not accessible, it will add itself to the result
//* But we're doing this in reverse order (unshift) so node -> right -> left
// @lc code=end
