/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
    for (let i = 0; i < nums.length; i++) {
        let idx = nums[i] - 1;
        if (i == idx || nums[i] == nums[idx]) continue; // already positioned or duplicate
        if (idx >= 0 && idx <= nums.length - 1) {
            //swap the numbers and check the swapped number
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            i--;
        }
    }

    //if the next positive number doesn't exist in the array, return it
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 == nums[i]) continue;
        else return i + 1;
    }
    return nums.length + 1;
};
