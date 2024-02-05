/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let hs = {}
  for (let i = 0; i < magazine.length; i++) {
    if (!hs[magazine[i]])  
      hs[magazine[i]] = 1
    else
      hs[magazine[i]]++
  }

  console.log(hs)
  for (let i = 0; i < ransomNote.length; i++) {
    if (hs[ransomNote[i]]) {
      hs[ransomNote[i]]-- 
    }
    else {
      return false
    }
  }
  return true
}