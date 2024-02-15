/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        }
        else {
            let temp = stack.pop()
            if ((s[i] === ')' && temp === '(') || (s[i] === ']' && temp === '[') || (s[i] === '}' && temp === '{')) {
                continue

            }
            else {
                return false
            }
        }
    }
    return stack.length === 0
};