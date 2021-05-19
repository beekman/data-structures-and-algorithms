/*
Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment or decrement an element of the array by 1.

Example 1:
Input: nums = [1,2,3]
Output: 2
Explanation: Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]

Example 2:
Input: nums = [1,10,2,9]
Output: 16
Constraints:

n == nums.length
1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = nums => {
  //first sort the array so we can get the median
  nums.sort((a, b) => a - b);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const average = (nums.reduce(reducer) / nums.length);

  let numMoves = 0, median = nums[~~(nums.length / 2)];

  const difference = (a, b) => {
    return Math.abs(a - b);
  };

  nums.forEach(num => {
    numMoves = numMoves + difference(median, num);
  });
  return numMoves;
};

const nums = [1, 0, 0, 8, 6];
minMoves2(nums);
