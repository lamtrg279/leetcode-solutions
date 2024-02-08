/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const word = s.split(" ");

  if (word.length !== pattern.length) return false;

  let a = Object.create(null);
  let b = Object.create(null);

  for (let i = 0; i < pattern.length; i++) {
    if (!a[pattern[i]] && !b[word[i]]) {
      a[pattern[i]] = word[i];
      b[word[i]] = pattern[i];
    } else if (a[pattern[i]] !== word[i] || b[word[i]] !== pattern[i]) {
      return false;
    }
  }
  console.log(a, b);
  return true;
};