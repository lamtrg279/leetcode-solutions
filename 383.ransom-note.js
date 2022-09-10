/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = {};

  let a = ransomNote.split("");
  let b = magazine.split("");

  for (const note of b) {
    map[note] ? map[note]++ : (map[note] = 1);
  }
  for (const word of a) {
    if (map[word]) {
      map[word]--;
    } else if (!map[word] || map[word] <= 0) return false;
  }
  return true;
};
//* Easy {}. Put everything in magazine in {}
//* Subtract the existed one in ransomNote
//* If some element is not in the {} or more than the value of that key
//* Then it is false
//* Note: split the string
// @lc code=end
