/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;
  while (curr) {
    if (p.val > curr.val && q.val > curr.val) curr = curr.right;
    else if (p.val < curr.val && q.val < curr.val) curr = curr.left;
    else return curr;
  }
  //* Hint: this is a binary SEARCH tree, so smaller nodes are on the left and vice versa
  //* So to find the lowest common ancester, that ancester (curr) is determined by compare itself to q and p
  //* If it is sandwiched by p and q then return curr
};
// @lc code=end
