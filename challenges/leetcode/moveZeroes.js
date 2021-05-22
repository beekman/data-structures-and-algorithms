/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeros = nums => {
  //use a two-pointer approach: one for the non-zero elements
  let nonZeroIndex = 0;
  //one for iterating the array
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] != 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  //fill the rest of the index with zeroes
  for(let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};
