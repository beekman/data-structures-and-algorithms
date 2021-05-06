/* Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.



Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
 */
const jump = (nums) => {
  let i = 0;
  while(i < nums.length) {
    let current = nums[i];
    let best = 0;
    for(let j = 0; j < current; j++) {
      if(nums[j] > best) {
        best = nums[j];
        console.log(`spot ${i + j}=${nums[i + j]}`);
      }
      i = nums[i + best];
    }
    console.log(`currently on index ${current}`);
  }
};

let nums = [2, 3, 1, 1, 4];
jump(nums);
