​
# Intuition
​
To compute the product of all elements in the array except the current element at index `i`, we can utilize the concept of prefix and suffix products. We can calculate the prefix product of all elements to the left of `i` and the suffix product of all elements to the right of `i`. Then, the product excluding the element at index `i` is simply the product of the prefix product and the suffix product.
​
# Approach
​
1.  Initialize two arrays `left` and `right`, each of size `n`, where `n` is the length of the input array `nums`.
2.  Initialize `left[i]` to store the product of all elements to the left of `nums[i]` and `right[i]` to store the product of all elements to the right of `nums[i]`.
3.  Calculate `left` array by iterating from left to right and multiplying the previous element's value with the current element.
4.  Calculate `right` array by iterating from right to left and multiplying the previous element's value with the current element.
5.  Finally, calculate the result array by multiplying `left[i]` and `right[i]` for each index `i`.