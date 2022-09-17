/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  let map = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ];

  let res = "";

  while (num !== 0) {
    res = map[num & 15] + res;
    num = num >>> 4;
  }

  return res.length == 0 ? "0" : res;
};
// For example, num = 4012
// Step 1) What is 4012 in binary number?
// 00000000000000000000111110101100

// Step 2) How to convert a binary to hex presentation? We separate the binary in 8 groups, each group has 4 bits.
// 0000 0000 0000 0000 0000 1111 1010 1100

// Step 3) We create a while loop to read 4 bits each time. Since it's a 32-bit Integer, we can only execute this while loop 8 times. We also want to exit the while loop if the num is 0.
// while (loopCount < 8 && num != 0)

// Step 4) How to read 4 bits each time?
// We can use & operation. 15 in binary is 1111. If we do num & 15, it will give you the last four bits.
// num & 15 will give you the number in range [0...15], we can use this to map to the hexChar array.
// 0 -> 0 ....9 -> 9....10 -> a....15 -> f
// After each loop, we need to remove the last 4 bits. num = num >> 4, and also increment the loopCount by 1.

// This apporach can also handle the negative case.
// For example -1 in binary is 1111 1111 1111 1111 1111 1111 1111 1111. We just apply the same logic above.
// @lc code=end
