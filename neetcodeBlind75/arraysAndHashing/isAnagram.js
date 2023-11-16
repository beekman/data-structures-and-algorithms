/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    //create a new map
    const letterCounts = {};
    //iterate through the first string
    for (let c of s) {
        //for each letter, add or increment its map count
        letterCounts[c] = (letterCounts[c] || 0) + 1;
    }

    //iterate through the second string
    for (let c of t) {
        //if the letter doesn't appear, return false
        if (!letterCounts[c]) return false;
        //for each letter, decrement its count in the map
        letterCounts[c]--;
    }
    //if all the letters were found, return true.
    return true;
};
