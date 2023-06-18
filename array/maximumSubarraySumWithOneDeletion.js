/*
Given an array of integers, return the maximum sum for a non-empty subarray (contiguous elements) with at most one element deletion. In other words, you want to choose a subarray and optionally delete one element from it so that there is still at least one element left and the sum of the remaining elements is maximum possible.

Note that the subarray needs to be non-empty after deleting one element.

Example 1:
Input: arr = [1,-2,0,3]
Output: 4
Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.

Example 2:
Input: arr = [1,-2,-2,3]
Output: 3
Explanation: We just choose [3] and it's the maximum sum.

Example 3:
Input: arr = [-1,-1,-1,-1]
Output: -1
Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = arr => {
    const n = arr.length;

    if (n === 1) return arr[0];

    let max = arr[n - 1];

    const suffix = new Array(n).fill(0);

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = max;
        max = Math.max(max + arr[i], arr[i]);
    }

    let prefix = 0;
    max = arr[0];

    for (let i = 0; i < n; i++) {
        max = Math.max(max, prefix + suffix[i], prefix + arr[i] + suffix[i], arr[i], prefix + arr[i], arr[i] + suffix[i]);
        prefix = Math.max(prefix + arr[i], arr[i]);
    }

    return max;
};
