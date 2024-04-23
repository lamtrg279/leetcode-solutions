/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length
    const left = new Array(n).fill(1)
    const right = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]
    }

    const result = []

    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i]
    }
    console.log(left)
    console.log(right)
    return result
};