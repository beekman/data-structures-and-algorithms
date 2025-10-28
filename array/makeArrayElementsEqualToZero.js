/**
 * @param {number[]} nums
 * @return {number}
 */
// Rename this function from 'makeArrayElementsEqualZero'
var countValidSelections = function(nums) {
    const n = nums.length;

    /**
     * Helper function to simulate the process for one (start, direction) pair.
     * @param {number} startCurr - The starting index.
     * @param {number} startDir - The starting direction (1 for right, -1 for left).
     * @returns {boolean} - True if the simulation results in all zeros, false otherwise.
     */
    const check = (startCurr, startDir) => {
        let numsCopy = [...nums];
        let curr = startCurr;
        let dir = startDir;

        while (curr >= 0 && curr < n) {
            if (numsCopy[curr] > 0) {
                // Non-zero: Decrement, flip direction, and step
                numsCopy[curr]--;
                dir *= -1;
                curr += dir;
            } else {
                while (curr >= 0 && curr < n && numsCopy[curr] === 0) {
                    curr += dir;
                }
            }
        }

        for (const val of numsCopy) {
            if (val !== 0) {
                return false;
            }
        }
        return true;
    };

    let validSelections = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            // Test starting at i, moving right
            if (check(i, 1)) {
                validSelections++;
            }
            // Test starting at i, moving left
            if (check(i, -1)) {
                validSelections++;
            }
        }
    }

    return validSelections;
};
