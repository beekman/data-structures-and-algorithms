class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // Create a 2D array with m rows and n columns filled with 1's
        const dp = Array(m).fill().map(() => Array(n).fill(1));

        // Fill the dp table
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        // The bottom-right corner will have the number of unique paths
        return dp[m - 1][n - 1];
    }
}
