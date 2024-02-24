   /**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let count = 0
    let left = 0, right = 0

    while (right < nums.length - 1) {
        let maxJump = 0
        for (let i = left; i <= right; i++) {
            maxJump = Math.max(maxJump, i + nums[i])
        }
        left = right + 1
        right = maxJump
        count++
    }
    return count
};