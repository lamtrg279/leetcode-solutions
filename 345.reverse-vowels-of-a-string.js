/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (!s || s.length === 0) return s;

  var chars = s.split("");

  let vowels = "aeiouAEIOU";
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && vowels.indexOf(s[left]) === -1) {
      left++;
    }
    while (left < right && vowels.indexOf(s[right]) === -1) {
      right--;
    }
    let temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }
  return chars.join("");
};
// @lc code=end
