/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
    const n = nums.length;

    // Step 1: Sort the array for binary search. O(N log N)
    nums.sort((a, b) => a - b);

    // --- Binary Search Helpers ---

    // Finds the index of the first element >= target
    const lower_bound = (target) => {
        let l = 0, r = n;
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (nums[mid] >= target) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    };

    // Finds the index of the first element > target
    const upper_bound = (target) => {
        let l = 0, r = n;
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (nums[mid] > target) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    };

    // --- End Helpers ---

    // Step 2: Create a set of all O(N) candidate targets.
    // The optimal target must be num, num-k, or num+k.
    const candidates = new Set();
    for (const num of nums) {
        candidates.add(num);
        candidates.add(num - k);
        candidates.add(num + k);
    }

    let maxFreq = 0;

    // Step 3: Check each candidate. O(N * log N)
    for (const target of candidates) {
        // Find g(T): count of elements == target
        const l_g = lower_bound(target);
        const r_g = upper_bound(target);
        const alreadyEqual = r_g - l_g;

        // Find f(T): count of elements in [target - k, target + k]
        const l_f = lower_bound(target - k);
        const r_f = upper_bound(target + k);
        const totalInRange = r_f - l_f;

        // Elements that can become target but aren't already
        const canBecome = totalInRange - alreadyEqual;

        // The frequency we can achieve for this target is:
        // (those already equal) + (those we can change, limited by ops)
        const currentFreq = alreadyEqual + Math.min(canBecome, numOperations);
        maxFreq = Math.max(maxFreq, currentFreq);
    }

    return maxFreq;
};
