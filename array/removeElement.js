/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  //set up a counter for time that val is in nums
  let counter = 0;
  for(i = 0; i < nums.length; i++) {
    //iterate through nums to check for val
    if(nums[i] === val) {
      nums[i] = 101;
    }
    //increment the counter for each value that is not val
    else counter++;
  }
  nums.sort((a, b) => a - b);
  return counter;
};
