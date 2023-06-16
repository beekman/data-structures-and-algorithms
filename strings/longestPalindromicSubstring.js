//Given a string s, return the longest palindromic substring in s.
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
    const n = s.length;
    if (n === 0)
        return '';
    if (n === 1)
        return s;

    let minStart = 0, maxLen = 0;

    let i = 0;
    while (i < n) {
        if (n - i < maxLen / 2)
            break;

        let l = i, r = i;

        // Find the center of the palindrome
        while (r < n - 1 && s[r] === s[r + 1])
            r++;

        // Update the next starting point
        i = r + 1;

        // Expand around the center to find the longest palindrome
        while (l > 0 && r < n - 1 && s[l - 1] === s[r + 1]) {
            l--;
            r++;
        }

        const newLen = r - l + 1;
        if (newLen > maxLen) {
            maxLen = newLen;
            minStart = l;
        }
    }

    return s.substring(minStart, minStart + maxLen);
};
