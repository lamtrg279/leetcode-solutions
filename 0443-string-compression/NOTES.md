# Hint:
This is not hard code-wise but logic-wise.
​
Using this example:
Input: chars = ["a","a","b","b","c","c","c", "c","c","c", "c","c","c", "c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","1","2"]
​
* `a,b,c` will need to be tracked by using a `curr` variable
* The index that we push the number `2,2,1,2` will be tracked by using a `j` variable, the number itself will need to be tracked by `count` variable
* Traverse the chars with `i` variable and compare `i` with `curr` and update accordingly
* c has 12, but we insert `'1','2'` not `'12'` so we need to loop through the toString() of the `count` variable
* Finally, return the `j` because this is the index that we modify the array up until that point. From this example we return 6, even though the whole array is actually ["a","2","b","2","c","1","2", "c","c","c", "c","c","c", "c","c","c"]
​