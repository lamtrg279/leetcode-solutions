/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let p = 0;
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i], p) !== -1 && t.indexOf(s[i], p) >= p)
      p = t.indexOf(s[i], p) + 1;
    else return false;
  }

  return true;
};
//Hint: using indexOf(searchElement, fromIndex)
//if found a letter, make fromIndex = whatever indexOf returns++
//Then the next loop will start from a greater fromIndex
// @lc code=end
