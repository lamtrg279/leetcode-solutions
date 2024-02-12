/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set()
    while (n !== 1 && !set.has(n)) {
        set.add(n)
        n = nextNumber(n)
    }
    return n === 1

};

var nextNumber = function(n) {
    let newNumber = 0
    while (n !== 0) {
        let digit = n % 10
        newNumber += digit * digit
        n = Math.floor(n / 10)
    }
    return newNumber
}
