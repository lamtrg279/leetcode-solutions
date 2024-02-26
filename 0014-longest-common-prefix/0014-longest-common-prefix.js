/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    let current = strs[0] 

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(current) !== 0) { //Check if current string starts with current ans. Ex: "flow".indexOf('flow') = 0
            current = current.substring(0, current.length - 1)
        }
    }
    return current

};