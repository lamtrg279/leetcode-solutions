/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hs = {}
    for (let i = 0; i < nums.length; i++) {
        if (hs[nums[i]] != null && i - hs[nums[i]] <= k) {
            return true
        }
        hs[nums[i]] = i
    }
    return false
};