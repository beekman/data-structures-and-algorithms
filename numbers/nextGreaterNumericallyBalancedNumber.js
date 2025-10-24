/**
 * Helper function to check if a number is numerically balanced.
 * @param {number} n The number to check.
 * @return {boolean} True if the number is balanced, false otherwise.
 */
function isNumericallyBalanced(n) {
    // Convert the number to a string to iterate over its digits.
    const s = n.toString();
    const len = s.length;
    // Use an array to store counts for digits 0-9.
    const counts = new Array(10).fill(0);

    for (let i = 0; i < len; i++) {
        const digit = parseInt(s[i]);

        // 1. Rule: Cannot contain 0.
        if (digit === 0) {
            return false;
        }

        // 2. Optimization: A digit `d` must appear `d` times.
        // If a digit `d` is larger than the total number of digits (len),
        // it's impossible for it to appear `d` times.
        // Example: 5555 (len 4). Digit 5. 5 > 4, so impossible.
        if (digit > len) {
            return false;
        }

        counts[digit]++;
    }

    // 3. Final check:
    // Go through each possible digit (1-9)
    for (let digit = 1; digit < 10; digit++) {
        // If this digit was present in the number (count > 0)...
        if (counts[digit] > 0) {
            // ...its count must be exactly equal to its value.
            if (counts[digit] !== digit) {
                return false;
            }
        }
    }

    // If all checks passed, it's numerically balanced.
    return true;
}

/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
    let num = n + 1;

    // Infinitely loop, checking each subsequent number.
    // The problem constraints guarantee we will find one.
    while (true) {
        if (isNumericallyBalanced(num)) {
            return num;
        }
        num++;
    }
};
