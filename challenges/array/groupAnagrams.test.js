const { groupAnagrams } = require('./groupAnagrams');

describe('groupAnagrams', () => {
  it('should return an array of arrays', () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const out = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    expect(groupAnagrams(strs)).toEqual(out);
  });
});
