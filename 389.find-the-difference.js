/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let character = 0;
  for (let i = 0; i < s.length; i++) {
    character ^= t[i].charCodeAt() ^ s[i].charCodeAt();
  }
  character ^= t[t.length - 1].charCodeAt(); //t is longer than s by 1 letter
  return String.fromCharCode(character);
};
// Using ^ XOR to cancel both string, and return the only letter that doesn't appear in both strings
// XOR only works for number, so we using charCodeAt(), and return fromCharCode to have a letter
//* Down here is a different solution, much cleaner imo
// var findTheDifference = function (s, t) {
//   for (let letter of s) {
//     t = t.replace(letter, '')
//   }
//   return t
// }
// Hint: iterate through s and remove each character from t, the extra character will be left
// EXTRA: check previous submission on leetcode page for a XOR solution
// @lc code=end
