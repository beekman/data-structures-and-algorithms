const { groupAnagrams } = require('../challenges/array/groupAnagrams');

describe('groupAnagrams', () => {
  it('should return an array of arrays for each anagram group', () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const groups = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    expect(groupAnagrams(input)).toEqual(groups);
  });
});
