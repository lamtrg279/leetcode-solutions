/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let answer = [];

  if (!root) return answer;
  dfs(root, "", answer);
  return answer;
};

var dfs = function (root, s, arr) {
  s += root.val;
  if (!root.left && !root.right) {
    arr.push(s);
    return;
  }
  if (root.left) {
    dfs(root.left, s + "->", arr);
  }
  if (root.right) {
    dfs(root.right, s + "->", arr);
  }
};
//* Create top down function (helper)
//* helper takes 3 params: root, string, arr
//* add root.val to the string, the call 2 helper recursively
//* 1 for left, 1 for right, and the string is now string + ->
//* base case is child (no left nor right) then push to arr, and return
//* SHORT HINT: have helper function, move to the left/right, add root.val, call helper with string + ->, when there is none, push to arr
// @lc code=end
