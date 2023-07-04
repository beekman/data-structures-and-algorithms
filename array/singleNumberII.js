/*
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    const numCounts = {};
    for (const num of nums) {
        numCounts[num] = numCounts[num] + 1 || 1;
    }
    for (const num in numCounts) {
        if (numCounts[num] === 1) {
            return num;
        }
    }
};
