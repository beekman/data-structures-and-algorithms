/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
    let res = nums.length

    for (let i = 0; i < nums.length; i++) {
        res += (i - nums[i])
    }

    return res
};

