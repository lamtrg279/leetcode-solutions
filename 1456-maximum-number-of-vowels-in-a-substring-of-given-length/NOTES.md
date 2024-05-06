* Use sliding window technique,when found a vowels: `count++`, make sure it's within `k` length
* When slide, need a left and right variable, if left was a vowel and now we move, `count--`
* Have a max count to record the time when we have the most vowels within substring