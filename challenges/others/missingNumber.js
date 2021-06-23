/**
 * @param {number[]} nums
 * @return {number}
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */
export const missingNumber = nums => {
  const sum = nums.reduce((acc, val) => acc + val);
  const count = nums.length;
  const fullSum = (count * (count + 1)) / 2;
  return (fullSum - sum);
};
