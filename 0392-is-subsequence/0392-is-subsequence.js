/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let arr = [];
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    while (j < t.length) {
      if (s[i] == t[j]) {
        arr.push(t[j]);
        j++;
        break;
      }
        j++;
    }
  }

  if (arr.length != s.length) return false;
  return true;
};

