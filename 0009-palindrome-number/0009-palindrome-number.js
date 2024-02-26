/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split("")
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        if (arr[i] !== arr[j]) return false
    }

    return true
};