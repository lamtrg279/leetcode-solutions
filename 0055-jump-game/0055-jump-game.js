/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let ans = true
    let jumpPower = 0

    for (let i = 0; i < nums.length; i++) {
        if (jumpPower < 0) return false
        if (jumpPower < nums[i]) {
            jumpPower = nums[i]
        }
        jumpPower--
    }
    return true
};