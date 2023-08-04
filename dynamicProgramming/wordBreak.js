/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    const table = Array(s.length + 1).fill(false);
    // Seed our simple case, this would be base case in recursive solution
    // In our table, each index refers to the letter before
    table[0] = true;

    // Loop table
    for (let i = 0; i < table.length; i++) {
        // We only want to process if current table position is true
        if (!table[i]) continue;

        // Loop all letters in wordDict
        for (let w of wordDict) {
            // We want to test if word matches where we are in s, and the word
            // We can slice from i to i + w.length and compare with the word
            if (s.slice(i, i + w.length) === w) {
                // If we pass the condition above, and the table index we are trying to update is in bounds, update to true
                if (i + w.length <= table.length) table[i + w.length] = true;
            }
        }
    }

    // The last item in our table can be returned, as it will be updated to true if we found a solution
    return table[s.length];
};
