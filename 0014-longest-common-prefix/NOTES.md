- If strs is empty then return ''
1. Use the first word in strs to compare
2. Use for loop to compare curr strs with the rest of the strings in the array
3. use indexOf in a while loop to compare if the current string matches other strings ("flower".indexOf("flower") = 0)
3. If not then use substring(0, length - 1) on current string to remove the last character and let the while loop repeats
4. Return current at the end of the function