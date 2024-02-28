/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let dummy = []
    let current = 0
    let count = 0
    if (nums.length > 0) {
        dummy.push(nums[current])
        count = 1
    }
    else return 0

    for(let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[current]) {
            dummy.push(nums[i])
            current = i
            count++
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = dummy[i]
    }
    return count
};