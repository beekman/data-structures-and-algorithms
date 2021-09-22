/**
 * @param {string} s
 * @return {number}
 */
/*
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
 */

const lengthOfLastWord = s => {
  const words = s.split(' ');
  return words[words.length - 1].length;
};
