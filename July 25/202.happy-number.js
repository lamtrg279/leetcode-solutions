/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = [];

  while (n !== 1) {
    let temp = n;
    let sum = 0;

    while (temp > 0) {
      let digit = temp % 10;
      sum += digit * digit;
      temp = Math.floor(temp / 10);
    }

    n = sum;
    if (set.indexOf(n) !== -1) return false;
    else set.push(n);
  }
  return true;
};
//* Hint: create an array to keep track of all the sum, if there's an element that appears twice then it is false
//* Have a temp variable to split the digits

// @lc code=end
