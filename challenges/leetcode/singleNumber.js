/**
 * @param {number[]} nums
 * @return {number}
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 */
let singleNumber = (nums) => {
  let hash = new Set();
  nums.forEach(n => {
    if(!hash.has(n)) {
      hash.add(n);
    } else {
      hash.delete(n);
    }
  });
  return hash.values().next().value;
};
