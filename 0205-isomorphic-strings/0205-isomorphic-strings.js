/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let setA = {}
    let setB = {}
    for (let i = 0; i < s.length; i++) {
        if (setA[s[i]] !== setB[t[i]]) {
            return false
        }
        setA[s[i]] = i
        setB[t[i]] = i
    }
    return true
};