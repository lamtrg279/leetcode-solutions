/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcd = function(num1, num2) {
    if (num1 % num2 == 0) {
        return num2
    }
    return gcd(num2, num1 % num2)
}
var gcdOfStrings = function(str1, str2) {
    if ((str1 + str2) !== (str2 + str1)) return ""
    return str1.substring(0, gcd(str1.length, str2.length))
}

