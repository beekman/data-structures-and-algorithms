/*
You are given three positive integers: n, index, and maxSum. You want to construct an array nums (0-indexed) that satisfies the following conditions:

nums.length == n
nums[i] is a positive integer where 0 <= i < n.
abs(nums[i] - nums[i+1]) <= 1 where 0 <= i < n-1.
The sum of all the elements of nums does not exceed maxSum.
nums[index] is maximized.
Return nums[index] of the constructed array.

Note that abs(x) equals x if x >= 0, and -x otherwise.



Example 1:

Input: n = 4, index = 2,  maxSum = 6
Output: 2
Explanation: nums = [1,2,2,1] is one array that satisfies all the conditions.
There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2].
Example 2:

Input: n = 6, index = 1,  maxSum = 10
Output: 3


Constraints:

1 <= n <= maxSum <= 109
0 <= index < n
*/

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */

const maxValue = (n, index, maxSum) => {
    const getSum = (len, v) => {
        let sum = 0;
        if (len <= v) {
            sum = (2 * v - len + 1) * len / 2;
        }
        else {
            sum = (1 + v) * v / 2 + len - v;
        }
        return sum;
    };
    const isValid = mid => {
        let curSum = getSum(leftLen, mid) + getSum(rightLen, mid) - mid;
        return curSum <= maxSum;
    };
    let l = 0;
    let r = 1000000000;
    let leftLen = (index + 1);
    let rightLen = n - index;
    while (l < r) {
        const mid = Math.ceil((l + r) / 2); // handle dead loop when l===r & l=mid
        if (!isValid(mid)) {
            r = mid - 1;
        }
        else {
            l = mid;
        }
    }
    return l;
};




