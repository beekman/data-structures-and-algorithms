/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
Given an integer array nums of unique elements, return all possible subsets (the power set).
*/

const subsets = nums => {
  const results = [];
  const recurse = (result, nums) => {
    if(nums.length === 0) {
      results.push(result);
      return;
    }
    recurse(result, nums.slice(1));
    recurse([...result, nums[0]], nums.slice(1));
  };
  recurse([], nums);
  return results;
};
