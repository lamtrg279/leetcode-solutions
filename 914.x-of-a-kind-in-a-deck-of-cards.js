/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  var hashmap = new Map();

  deck.forEach((card) => {
    let count = hashmap.get(card);
    hashmap.set(card, count ? count + 1 : 1);
  });

  let res = 0;
  for (let value of hashmap.values()) {
    res = gcd(res, value);
  }

  return res > 1;
};

var gcd = (a, b) => {
  return b > 0 ? gcd(b, a % b) : a;
};
// @lc code=end
