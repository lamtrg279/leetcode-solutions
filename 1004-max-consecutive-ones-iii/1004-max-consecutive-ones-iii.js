/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;
    let maxLen = 0;
    let zeroCount = 0; // To track the number of zeros in the current window

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++;
        }
        
        // When we have more zeros in the window than we can flip, move the left pointer
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // Calculate the maximum length of the window
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }

    return maxLen;
};