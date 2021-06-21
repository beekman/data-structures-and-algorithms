/*
Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.

*/
/**
 * @param {string[]} words
 * @return {number}
 */
let longestStrChain = words => {
  let cache = {};

  //first ensure that we are processing a list sorted by length
  words.sort((a, b) => a.length - b.length);
  let maxLength = 0;

  for(let word of words) {
    let longest = 0;
    for(let i = 0; i < word.length; i++) {
      //eliminate one of the characters
      let subWord = word.slice(0, i) + word.slice(i + 1);
      //compare the current longest chain with the one for this subWord and update longest with a longer subWord.
      longest = Math.max(longest, (cache[subWord] || 0) + 1);
    }
    //set the cache for this word to the longest value.
    cache[word] = longest;
    maxLength = Math.max(maxLength, longest);
  }
  return maxLength;
};

let wordlist = ["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"];
longestStrChain(wordlist);
