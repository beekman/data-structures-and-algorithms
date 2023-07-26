/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    let subIndex = 0, stringIndex = 0;
    while (stringIndex < t.length) {
        if (s[subIndex] === t[stringIndex]) {
            subIndex++;
        }
        stringIndex++;
    }
    return subIndex === s.length ? true : false;
};
