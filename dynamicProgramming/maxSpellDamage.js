/**
 * @param {number[]} power
 * @return {number}
 */
const maximumTotalDamage = (power) => {
    // 1. Preprocessing: Calculate total damage for each unique power value
    // and store unique powers in a sorted array.
    const damageMap = new Map();
    for (const p of power) {
        damageMap.set(p, (damageMap.get(p) || 0) + p);
    }

    // Get unique powers and sort them
    const uniquePowers = Array.from(damageMap.keys()).sort((a, b) => a - b);
    const n = uniquePowers.length;

    // DP map: dp[p] stores the max damage considering spells with power <= p
    // We can optimize space by only keeping track of the necessary previous DP values.
    // However, since the power values are large, using a map keyed by power value
    // is conceptually simpler and efficient enough given the number of unique powers (<= 10^5).

    // dpMap[p]: max total damage considering spells with damage up to p.
    const dpMap = new Map();

    // Helper function to get the maximum DP value for powers <= p - 3
    // Since uniquePowers is sorted, we only need to look at previous elements.
    // To efficiently find the maximum DP value for an allowed power (power <= p - 3),
    // we can use a separate DP array (or a map) to store the maximum cumulative damage
    // seen so far.

    // Instead of using a map keyed by power value for DP, let's use an array
    // keyed by the index of uniquePowers for cleaner access to previous states.
    // dp[i]: max total damage considering spells with damage up to uniquePowers[i].
    const dp = new Array(n);

    // dp[i]: max damage considering spells with power up to uniquePowers[i]
    for (let i = 0; i < n; i++) {
        const p = uniquePowers[i];
        const currentDamage = damageMap.get(p);

        // --- Choice 1: Cast spells with damage p ---
        // Max damage from previous steps allowed: must exclude powers p-1 and p-2.
        // The largest allowed power from previous steps is <= p - 3.
        let maxPreviousDamage = 0;

        // Find the largest index j < i such that uniquePowers[j] <= p - 3.
        // We can search backwards from i-1.
        let j = i - 1;
        while (j >= 0) {
            if (uniquePowers[j] <= p - 3) {
                // Since dp[j] already stores the max damage up to uniquePowers[j],
                // this is the maximum allowed previous damage.
                maxPreviousDamage = dp[j];
                break;
            }
            j--;
        }

        const damageWithP = currentDamage + maxPreviousDamage;

        // --- Choice 2: Skip spells with damage p ---
        // Max damage is simply the max damage up to uniquePowers[i-1].
        const damageWithoutP = (i > 0) ? dp[i - 1] : 0;

        // DP transition: choose the maximum of the two options
        dp[i] = Math.max(damageWithP, damageWithoutP);
    }

    // The result is the max damage considering all unique powers
    return dp[n - 1] || 0;
};
