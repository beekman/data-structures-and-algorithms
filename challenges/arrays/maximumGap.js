
/**
 * Given an integer array nums, return the maximum difference between two
 * successive elements in its sorted form. If the array contains less than two
 * elements, return 0.
 * You must write an algorithm that runs in linear time and uses linear extra
 * space.
 * @param {number[]} nums
 * @return {number}
 */
const maximumGap = (nums) => {
  let max = 0;
  if(nums.length >= 2) {
    nums.sort((a, b) => a - b);

    for(let i in nums) {
      const diff = nums[i] - nums[i - 1];

      if(diff > max) {
        max = diff;
      }
    }

  }
  return max;
};
