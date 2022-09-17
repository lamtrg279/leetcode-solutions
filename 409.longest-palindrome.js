/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let result = 0;
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else if (map[s[i]] === 1) {
      map[s[i]] = undefined;
      result += 2;
    }
  }

  if (s.length > result) {
    result += 1;
  }

  return result;
};
//Hint: using {},if find an element the second time, then add 2 into result
//and reset that element to undefined
//Result is alway even, so if s.length is longer, meaning we can put a letter into the middle create a longer palindrome
//If that the case then add 1 into result
// @lc code=end
