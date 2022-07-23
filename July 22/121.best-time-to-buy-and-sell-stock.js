/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 0;
  let max_profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
//* Need vars for sell, buy
//* Move through the array, if sell - buy is positive then store it,
//* If sell is smaller -> set sell=buy because we might have a bigger profit since sell is the new lower number
//* However it could be [5,20,1,3] which means we could accidentally move sell=buy to 1, but 3-1=2 is less than 20-5
//* That's why we also need a max_profit, because there are multiple periods that we make profit, but only return the highest
//*
// @lc code=end
