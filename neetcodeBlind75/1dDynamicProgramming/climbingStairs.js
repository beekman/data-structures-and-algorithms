/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {

    let dp = new Array(n + 1);
    //We have two base cases: dp[1] = 1 and dp[2] = 2 because
    //there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step)
    dp[1] = 1, dp[2] = 2;
    //dp[i] represents the total number of different ways to take i steps
    //dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
    // T.C: O(N)
    // S.C: O(N)
};
