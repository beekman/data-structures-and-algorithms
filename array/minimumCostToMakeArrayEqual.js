/*
You are given two 0-indexed arrays nums and cost consisting each of n positive integers.

You can do the following operation any number of times:

Increase or decrease any element of the array nums by 1.
The cost of doing one operation on the ith element is cost[i].

Return the minimum total cost such that all the elements of the array nums become equal.
Example 1:
Input: nums = [1,3,5,2], cost = [2,3,1,14]
Output: 8
Explanation: We can make all the elements equal to 2 in the following way:
- Increase the 0th element one time. The cost is 2.
- Decrease the 1st element one time. The cost is 3.
- Decrease the 2nd element three times. The cost is 1 + 1 + 1 = 3.
The total cost is 2 + 3 + 3 = 8.
It can be shown that we cannot make the array equal with a smaller cost.
Example 2:
Input: nums = [2,2,2,2,2], cost = [4,2,8,1,3]
Output: 0
Explanation: All the elements are already equal, so no operations are needed.
*/
const minCost = (nums, cost) => {
    const n = nums.length;
    if (n <= 1) return 0;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [nums[i], cost[i]];
    }
    arr.sort((a, b) => a[0] - b[0]);
    let psum = [arr[0][1]];
    for (let i = 1; i < n; i++) {
        psum.push(psum[i - 1] + arr[i][1]);
    }
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += (Math.abs(arr[i][0] - arr[0][0])) * arr[i][1];
    }
    let ans = Infinity;
    ans = Math.min(ans, sum);
    for (let i = 1; i < n; i++) {
        sum += (psum[i - 1]) * (arr[i][0] - arr[i - 1][0]);
        sum -= (psum[n - 1] - psum[i - 1]) * (arr[i][0] - arr[i - 1][0]);
        ans = Math.min(ans, sum);
    }
    return ans;
};
