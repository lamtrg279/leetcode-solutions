/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0 ; i < nums.length; i++) {
        let complement = target - nums[i]
        if (complement in map) {
            return [map[complement], i]
        }
        map[nums[i]] = i
    }
    return []
};