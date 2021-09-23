/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  const numInstances = {};
  for(i = 0; i < nums.length; i++) {
    if(numInstances[nums[i]]) numInstances[nums[i]] += 1;
    else numInstances[nums[i]] = 1;
    if(numInstances[nums[i]] > (nums.length / 2)) {
      return nums[i];
    }
  }
};
