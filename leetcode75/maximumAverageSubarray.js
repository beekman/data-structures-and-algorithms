/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
SCOPE:
nums array <= 1 mil values
k smaller than nums.length
Accuracy within .0001
*/

/**
ROADMAP: Seems like a sliding window problem
Set a variable for the highest average value.
Iterate through a window of size k through the array,
testing all ranges where the last index doesn't exceed the array's length.
For each range, sum the values and divide by k to get the average value. Compare that with the highest average value variable and replace if the value is higher.
After all iterations, return the highest average value variable.
*/

const findMaxAverage = (nums, k) => {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let max = sum;

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        max = Math.max(max, sum);
    }
    return max / k;
};
