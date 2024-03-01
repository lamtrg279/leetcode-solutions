/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = []
    let carry = 0
    let i = a.length - 1
    let j = b.length - 1

    while (i >= 0 || j >= 0) {
        if (i >= 0) {
            carry += parseInt(a[i])
        }
        if (j >= 0) {
            carry += parseInt(b[j])
        }
        result.unshift(parseInt(carry % 2))
        carry = parseInt(carry / 2)
        i--
        j--
    }

    if (carry === 1) {
        result.unshift('1')
    }

    return result.join("")
};