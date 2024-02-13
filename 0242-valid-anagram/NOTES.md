**Intuition**
    The idea is to use an array to keep track of the frequency of each character in both strings. If the frequency of each character is the same in both strings, then the strings are anagrams.​

**Approach**
1. Check if the lengths of both strings are equal. If not, they cannot be anagrams, so return false.
2. Initialize an array map of size 26 to store the frequency of each character in the alphabet (assuming only lowercase English letters).
let alphabet = Array(26).fill(0) // 26 is the number of english alphabets
3. Iterate through both strings simultaneously. For each character, increment its count in map for the first string and decrement for the second string.
Use alphabet[s.charCodeAt(i) - 'a'.charCodeAt(0)]++ //- 'a'.charCode to get the correct index, or else it will be index 97 to 123 because in ASCII 'a' starts at 97. This will give us the frequency at the correct index of the alphabet
4. After the iteration, check if all counts in the map are zero. If yes, then the strings are anagrams; otherwise, they are not.
​
​
