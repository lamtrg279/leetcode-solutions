/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let arr = []
    let temp = nums[0]
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] + 1 === nums[i]) continue
        else if (temp === nums[i - 1]) {
            arr.push(`${temp}`)
        }
        else {
            arr.push(`${temp}->${nums[i - 1]}`)
        }
        temp = nums[i]
    }
    return arr
};