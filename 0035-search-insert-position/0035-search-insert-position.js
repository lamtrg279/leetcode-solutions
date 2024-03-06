/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++)  {
        if (nums[i] === target)
            return i
        else if (target < nums[i]) {
            console.log(i)
            return i
        }
    }
    return nums.length
};