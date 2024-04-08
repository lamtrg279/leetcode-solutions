/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let ans = []
    let maxCandies = 0
    for (let i = 0; i < candies.length; i++) {
        if (maxCandies < candies[i])
            maxCandies = candies[i]
    }
    for (let i = 0; i < candies.length; i++) {
        if (maxCandies <= candies[i] + extraCandies) {
            ans.push(true)
            maxCandies < candies[i] + extraCandies
        }
        else
            ans.push(false)
    }

    return ans
};