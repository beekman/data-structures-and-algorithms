/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let numMap = {};

  for(let num in nums) {
    let num2 = target - nums[num];
    if(num2 in numMap) {
      let results = [];
      results.push(nums.indexOf(num2), num);
      return results;
    }
    numMap[nums[num]] = num;
  }
  return null;
};
