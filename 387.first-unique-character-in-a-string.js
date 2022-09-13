/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = {};

  for (const letter of s) {
    map[letter] ? map[letter]++ : (map[letter] = 1);
  }
  console.log(map);
  for (const key of Object.keys(map)) {
    if (map[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};
// @lc code=end
