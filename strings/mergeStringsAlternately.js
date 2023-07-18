/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedString= ''
    const maxLength = Math.max(word1.length, word2.length)

    for (let i = 0; i < (maxLength); i++) {
        //add the letter at this index for each word if it exists, otherwise add nothing.
        mergedString += (word1[i] ?? '') + (word2[i] ?? '');
    }

    return mergedString;
};
