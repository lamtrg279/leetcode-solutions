/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'U', 'O']
    let temp = []
    let result = ""
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            temp.push(s[i])
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            result += temp.pop()
        }
        else
            result += s[i]
    }


    return result
};