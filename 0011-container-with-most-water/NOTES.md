​
# Approach
The first thing we should realize is that the amount of water contained is always going to be a rectangle whose area is defined as `length * width`. The width of any container will be the difference between the index of the two lines (`i` and `j`), and the height will be whichever of the two sides is the lowest (`min(height[i], height[j])`).
​

When we decide on the next water container, we decide if we should slide `i` or `j`* by comparing `height[i]` and `height[j]`. Because we are sliding `i,j`, the `length` of the container is smaller, so if we want to have the bigger container, the `height[i]` or `height[j]` should be bigger as well. This means that if `height[i]` is bigger than `height[j]`, then we move `i++` else we move `j--`
​

Assign the product of ``Math.min(height[i], height[j]) * (i-j)`` to the answer variable, also compare the answer variable within itself to find the biggest size
​
