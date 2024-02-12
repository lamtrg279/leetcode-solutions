1. Because the number can loops endlessly in a cycle, so we need a way to check if a number has appear already. This can be done in many ways, using Set() is the fastest with set.has(n) using O(1) time
​
2. Need a helper function call "NextNumber" (this can also be done within the main function too). This helper function will calculate the digit = n % 10, square it, add to a temp number, and return that temp number.
​
3. Finally put the pieces together: use a wile loop check if a number not equals to 1 and hasn't appeared in the Set. If true => add to set and calculate next number. At the end return n === 1