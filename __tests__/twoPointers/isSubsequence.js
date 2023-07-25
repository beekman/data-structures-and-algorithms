/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    if (s.length > t.length) return false;
    let subsequence = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[subsequence] === t[i]) {
            subsequence++;
        }
    }
    return subsequence === s.length;
};
