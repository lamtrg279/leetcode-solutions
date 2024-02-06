- HINT: create 2 sets, compare the first appear index of each character, if different then return false
* Eg: "egg" "add"
-Step 1: compare hsA[e] with hsB[a], both are undefined and equal => nothing, move to next line
- Step 2: assign i index to "e" and "a", we would have {"e":0} {"a":0}
- Repeat step 1 and 2, we will have "true" as answer
* Eg: "foo", "bar"
- Both chars are undefined, so we move to assign it the index
- Eventually we have {"f":0, "o":1} and {"b":0, "a";1}
- Then on to the 3rd interation of the loop, we compare hsA[o] (which is 1) vs hsB[r] (which is undefined) => return false
____________________________________
-  Create 2 sets
- Inside for loop, check if A[s[i]] !== B[t[i]], if yes then return false
- Else: assign appeared index to each s[i] or t[i]
- Return true at the end
​