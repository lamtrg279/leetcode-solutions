/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let i = 0;
    let j = 0
    while (j < chars.length) {
        let count = 0
        let curr = chars[j]
        while (chars[j] === curr) {    //count how many repeated char
            j++
            count++
        }
        chars[i] = curr            /*this is the difficult point:
Let's say [a,a,a,a,a,b,b] then chars[i] = curr doesn't make sense at the first passbecause chars[i] is 'a' and curr is 'a' at both index 0.
But from the second pass, curr is now 'b' because the final array must be [a,5,b,2], if we don't include this line of code then chars[i] is still at index 2 while curr is at index 5.
*/
        i++
        if (count > 1) {
            for (let digit of count.toString()) {
                chars[i] = digit
                i++
            }
        }
    }
    return i
};
