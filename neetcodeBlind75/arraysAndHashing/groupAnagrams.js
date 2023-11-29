/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
    let res = {};
    for (let str of strs) {
        //fill array with 0s
        let count = new Array(26).fill(0);
        /* count the occurrences of each letter in the string
        by getting the ASCII value of the character, subtracting
        the ASCII value of 'a' to map it to an index (0-25),
        and incrementing the count at that index in the count array.
        */

        for (let char of str) count[char.charCodeAt() - 97]++;
        //Generate key by joining count array's elements with "#"

        let key = count.join("#");
        /* Check if res[key] exists.
        If so, push the current string str to the array at res[key].
        If not, create a new array with the current string str as its
        first element assigned to res[key]. Anagrams will be grouped.
        */
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};

// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)
