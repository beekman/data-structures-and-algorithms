/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};

    while (right < s.length) {
        //for each char in s
        const char = s[right];
        //increment visit count for this char
        visited[char] = visited[char] ? visited[char] + 1 : 1;

        //if the new visit count is higher than max, update max char count
        if (visited[char] > maxCharCount) maxCharCount = visited[char];

        //if current string length minus the max char count is greater than k
        if (right - left + 1 - maxCharCount > k) {
            //we know the new char made it such that there are more chars missing than can be replaced by k,
            //so we remove the first char
            visited[s[left]]--;
            //and increment the left pointer
            left++;
        }

        //increment the right pointer to look at the next char
        right++;
    }

    //the solution is the window size, because we never shrink the window
    return right - left;
};
