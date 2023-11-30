/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = [];

    let prefix = 1;

    // Loop through the input array - for each position,
    // the result array should equal the prefix tracker.

    // Update the prefix tracker to be the product of itself,
    // multiplied by the input value at the position.
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;

    // Loop backwards through the array.
    // For each iteration, set the result array to be
    // the product of itself multiplied by the postfix tracker.

    // Then update the postfix tracker to be the product of itself,
    // multiplied by the input value at that position.

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }

    return res;
};
