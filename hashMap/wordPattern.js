/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
*/
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    const map = {};
    const set = new Set();
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        if (map[char] === undefined) {
            if (set.has(word)) {
                return false;
            }
            map[char] = word;
            set.add(word);
        } else if (map[char] !== word) {
            return false;
        }
    }
    return true;
};
