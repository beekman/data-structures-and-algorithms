/**
 * @param {number[]} nums
 * @return {boolean}
 */
let checkPossibility = (nums) => {
  // To store the number of modifications
  // required to make the array
  // strictly decreasing
  let mods = 0;
  let n = nums.length;
  if(nums[n - 1] >= nums[n - 2]) {
    nums[n - 1] = nums[n - 2] - 1;
    mods++;
  }

  if(nums[0] <= nums[1]) {
    nums[0] = nums[1] + 1;
    mods++;
  }

  // Loop from 2nd element to the 2nd last element
  for(let i = n - 2; i > 0; i--) {

    if((nums[i - 1] <= nums[i] && nums[i + 1] <= nums[i])
      || (nums[i - 1] >= nums[i] && nums[i + 1] >= nums[i])) {

      // Modifying nums[i]
      nums[i] = parseInt((nums[i - 1] + nums[i + 1]) / 2, 10);
      mods++;

      if(nums[i] == nums[i - 1] || nums[i] == nums[i + 1])
        return false;
    }
  }

  // If more than 1 modification is required
  if(mods > 1)
    return false;

  return true;
};
