/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [];
  let count;

  for (let i = 0; i < n + 1; i++) {
    let binary = i.toString(2);
    count = 0;
    for (let j = 0; j < binary.length; j++) {
      if (binary[j] === "1") count++;
    }
    arr.push(count);
  }
  return arr;
};
//* Hint: use this to make decimal into binary: number.toString(2)
// @lc code=end
