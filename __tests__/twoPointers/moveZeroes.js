/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = nums => {
    let left = 0, right = left + 1

    while (right <= nums.length - 1) {
        if (nums[left] !== 0) {
            //as long as the value isn't zero, keep iterating both pointers
            left++
            right++
        } else {
            //stop the left and move only the right until it hits a number not equal to 0
            if (nums[right] !== 0) {
                //when finding a non-zero value, swap left and right values
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }
            right++;
        }
    }
};
