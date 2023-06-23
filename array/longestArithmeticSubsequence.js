/*
Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.

Note that:
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
A sequence seq is arithmetic if seq[i + 1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestArithSeqLength = nums => {
    let n = nums.length,
        dp = new Array(n + 1).fill(2).map(() => Array(n + 1).fill(2)),
        max = 2;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let diff = nums[j] - nums[i];
            for (let k = i - 1; k >= 0; k--) {
                if (nums[i] - nums[k] === diff) dp[i][j] = Math.max(dp[i][j], dp[k][i] + 1);
            }
            max = Math.max(dp[i][j], max);
        }
    }
    return max;
};
