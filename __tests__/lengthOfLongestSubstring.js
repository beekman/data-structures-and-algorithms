/*
Given a string s, find the length of the longest substring without repeating characters.
*/
/**
 * @param {string} s
 * @return {number}
 */
const { lengthOfLongestSubstring } = require('../challenges/array/lengthOfLongestSubString');

describe('returns the correct lengths for string inputs', () => {

  it('passes the test cases', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
