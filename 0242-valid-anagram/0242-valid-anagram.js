/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    for(let i = 0; i < s.length; i++) {
        t = t.replace(s[i], '')
    }
    if (t.length === 0) return true
    return false
};
