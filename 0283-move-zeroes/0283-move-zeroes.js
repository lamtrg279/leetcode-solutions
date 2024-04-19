/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let count = 0
    let i = 0
    while (i < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i,1)
            count++
        }
        else {
            i++
        }
    }
    for (let j = 0; j < count; j++) {
        nums.push(0)
    }
};