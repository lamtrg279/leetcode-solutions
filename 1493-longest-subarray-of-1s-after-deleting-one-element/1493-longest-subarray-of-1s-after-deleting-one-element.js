/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, zero = 0, res = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {    //we allow one '0' to delete to create subarray
            zero++
        }
        while (zero > 1) { //move left until having ONLy one '0'
            if (nums[left] === 0) {
                zero--
            }
            left++
        }
        res = Math.max(res, right - left)
    }
    return res
};