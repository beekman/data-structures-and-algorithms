/**
 * @param {number[]} nums
 * @return {number}
 */
const maxIncreasingSubarrays = function(nums) {
    const n = nums.length;
    if (n < 2) {
        return 0;
    }

    // 1. Precompute LIS_end: Longest strictly increasing subarray ending at index i
    // LIS_end[i] is the length of the longest strictly increasing subarray ending at nums[i].
    const LIS_end = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            LIS_end[i] = LIS_end[i - 1] + 1;
        }
        // else LIS_end[i] remains 1
    }

    /**
     * Helper function to check if two adjacent strictly increasing subarrays of length k exist.
     * The first subarray is nums[a..a + k - 1].
     * The second subarray is nums[a + k..a + 2k - 1].
     * The first subarray is strictly increasing if LIS_end[a + k - 1] >= k.
     * The second subarray is strictly increasing if LIS_end[a + 2k - 1] >= k.
     * @param {number} k - the target length
     * @returns {boolean} - true if such a pair of subarrays exists, false otherwise
     */
    const canFind = (k) => {
        if (k * 2 > n) {
            return false;
        }
        // a is the starting index of the first subarray.
        // It must satisfy a + 2k - 1 < n, or a <= n - 2k.
        for (let a = 0; a <= n - 2 * k; a++) {
            const end1 = a + k - 1;   // End index of the first subarray
            const end2 = a + 2 * k - 1; // End index of the second subarray

            // Check if the first subarray nums[a..end1] is strictly increasing.
            const isFirstIncreasing = LIS_end[end1] >= k;

            // Check if the second subarray nums[a+k..end2] is strictly increasing.
            // Note: the second subarray starts at index a + k.
            const isSecondIncreasing = LIS_end[end2] >= k;

            if (isFirstIncreasing && isSecondIncreasing) {
                return true;
            }
        }
        return false;
    };

    // Binary Search for the maximum k.
    let low = 1;
    let high = Math.floor(n / 2); // Maximum possible length for k
    let maxK = 0;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (canFind(mid)) {
            // mid is possible, try for a larger k
            maxK = mid;
            low = mid + 1;
        } else {
            // mid is too large, search for a smaller k
            high = mid - 1;
        }
    }

    return maxK;
};
