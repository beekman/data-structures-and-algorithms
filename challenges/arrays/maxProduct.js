/**
 * @param {string[]} words
 * @return {number}
 *
 * Maximum Erasure Value
You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).



Example 1:

Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].
Example 2:

Input: nums = [5,2,1,2,5,2,1,2,5]
Output: 8
Explanation: The optimal subarray here is [5,2,1] or [1,2,5].


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 104
 */
const maxProduct = words => {
  words.sort((a, b) => b.length - a.length);
  let best = 0, bitsets = new Uint32Array(words.length);
  for(let i = 0; i < words.length; i++) {
    let word = words[i], wlen = word.length, bitset = 0;
    if(wlen * words[0].length < best)
      return best;
    for(let j = 0; j < wlen; j++)
      bitset |= 1 << (word.charCodeAt(j) - 97);
    for(let j = 0; j < i; j++)
      if((bitsets[j] & bitset) === 0)
        best = Math.max(best, wlen * words[j].length);
    bitsets[i] = bitset;
  }
  return best;
};
