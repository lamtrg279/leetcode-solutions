/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 2) return n
    let a = 1
    let b = 2

    for (let i = 0; i < n - 1; i++) {
        let temp = a
        a = b
        b = temp + b
    }
    return a
};