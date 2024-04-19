/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let result = ''
    let words = s.trim().split(" ")
    console.log(words)
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] != '')
            result += words[i].trim() + ' '
    }
    return result.trim()
};