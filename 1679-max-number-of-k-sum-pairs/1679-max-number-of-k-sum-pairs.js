/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let count = 0
    nums.sort((a, b) => (a - b))
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum < k)
            left++
        else if (sum > k)
            right--
        else {
            count++
            left++
            right--
        }
    }
    return count
};