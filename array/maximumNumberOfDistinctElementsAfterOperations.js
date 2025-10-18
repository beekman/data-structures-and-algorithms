/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxDistinctElements = (nums, k) => { // RENAMED FUNCTION
    // 1. Sort the array.
    nums.sort((a, b) => a - b);

    // last_distinct_val tracks the largest transformed value used successfully so far.
    // Initialize it to a safe value smaller than the smallest possible element (1 - 10^9).
    // Using -Infinity in JavaScript is robust.
    let last_distinct_val = -Infinity;

    let distinct_count = 0;

    for (const n of nums) {
        // 2. Determine the minimum required target value (min_distinct_target) to make 'n' distinct.
        // It must be strictly greater than the last used value.
        const min_distinct_target = last_distinct_val + 1;

        // 3. Determine the minimum possible transformed value that 'n' can become (min_allowed).
        const min_allowed_target = n - k;

        // The actual smallest distinct target is the maximum of the two constraints:
        // a) Be distinct from previous results, and b) Be within n's allowed range.
        const target_val = Math.max(min_distinct_target, min_allowed_target);

        // 4. Check feasibility: Is this required target_val reachable from n?
        // The maximum value 'n' can be transformed into is n + k.
        if (target_val <= n + k) {
            // Feasible: We found a new distinct element.
            distinct_count++;

            // Update the last used distinct value.
            last_distinct_val = target_val;
        }
        // If target_val > n + k, it's impossible to make 'n' distinct from previous elements
        // (the required value is outside the allowed range). We skip this element.
    }

    return distinct_count;
};
