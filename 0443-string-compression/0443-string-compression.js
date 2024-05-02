/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let i = 0;
    let j = 0
    while (j < chars.length) {
        let count = 0
        let curr = chars[j]
        while (chars[j] === curr) {
            j++
            count++
        }
        chars[i] = curr
        i++
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i] = digit
                i++
            }
        }
    }
    console.log(i)
    return i
};