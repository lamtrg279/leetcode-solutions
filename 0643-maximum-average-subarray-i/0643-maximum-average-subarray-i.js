/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let max = sum
    console.log(`max = sum is ${sum}`)
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i]
        max = Math.max(max, sum)
    }
    return max / k
};