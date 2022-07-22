/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;

  let carry = 0;
  let answer = [];

  while (i >= 0 || j >= 0) {
    if (i >= 0) {
      carry += parseInt(a[i]);
    }
    if (j >= 0) {
      carry += parseInt(b[j]);
    }

    answer.unshift(parseInt(carry % 2));
    carry = parseInt(carry / 2);
    i--;
    j--;
  }

  if (carry === 1) {
    answer.unshift(1);
  }
  return answer.join("");
};

//* Have 1 variable to keep track of both the sum and the carry (let's call it X).
//* Basically add the last elements of both 2 strings to X, //*
//* If it is 2 then add 0 to the answer array, and reset X to 1 (because of the carry)
//* If it is 1 then add 1 to the answer, reset X to 0 because no carry
//* Also because a b can have different lengths, so don't put them in 1 if
// @lc code=end
