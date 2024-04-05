/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x
    let left = 1
    let right = x

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (mid === x / mid)
            return mid
        if (mid < x / mid)
            left = mid + 1
        else right = mid
    }
    return left - 1
};