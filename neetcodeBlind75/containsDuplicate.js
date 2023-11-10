/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    return new Set(nums).size !== nums.length;
};
