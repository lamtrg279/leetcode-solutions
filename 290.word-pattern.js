/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const word = s.split(" ");

  if (word.length !== pattern.length) return false;

  let a = {};
  let b = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!a[pattern[i]] && !b[word[i]]) {
      a[pattern[i]] = word[i];
      b[word[i]] = pattern[i];
    } else if (a[pattern[i]] !== word[i] || b[word[i]] !== pattern[i]) {
      return false;
    }
  }
  console.log(a, b);
  return true;
};
// @lc code=end
