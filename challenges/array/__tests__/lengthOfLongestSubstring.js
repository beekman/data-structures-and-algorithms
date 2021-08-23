const { lengthOfLongestSubstring } = require('../lengthOfLongestSubString');

describe('returns the correct lengths for string inputs', () => {

  it('passes the test cases', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
