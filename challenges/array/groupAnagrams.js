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
    // sort the string so identical sets of letters all match the same key
    let sort = strs[i].split('').sort().join('');
    // if the sorted string doesn't exist, add it as a key to the hash table
    if(!groups[sort]) {
      //  set the key's value to an array containing the unsorted string
      groups[sort] = [strs[i]];
    }
    else {
      //if the sorted string already exists as a key, push the unsorted string into the existing array of values for that key.
      groups[sort].push(strs[i]);
    }
  }
  // return the hash table values for each key as an array of arrays
  return Object.values(groups);
};
