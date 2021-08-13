/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const groups = {};
  for(let i = 0; i < strs.length; i++) {
    let sort = strs[i].split('').sort().join('');
    if(!groups[sort]) {
      groups[sort] = [strs[i]];
    }
    else groups[sort].push(strs[i]);
  }
  return Object.values(groups);
};
