/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const map = {};
    for (const char of magazine) {
        map[char] = (map[char] || 0) + 1;
    }
    for (const char of ransomNote) {
        if (map[char] === undefined || map[char] === 0) {
            return false;
        }
        map[char]--;
    }
    return true;
};
