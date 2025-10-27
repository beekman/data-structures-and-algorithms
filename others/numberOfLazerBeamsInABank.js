/**
 * Helper function to count devices('1's) in a single row string.
 * @param {string} row - The binary string representing a row.
 * @returns {number} The count of '1's in the row.
 */
const countDevices = (row) => {
    // A simple and reasonably efficient way to count '1's
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row[i] === '1') {
            count++;
        }
    }
    return count;

    // Alternative (often faster but less readable) idiom:
    // return row.split('1').length - 1;
};

/**
* @param {string[]} bank
* @return {number}
*/
var numberOfBeams = function(bank) {
    // We'll use reduce to iterate and accumulate the total.
    // The accumulator 'acc' is an object storing:
    // - total: The total number of beams found so far.
    // - prev: The device count of the *previous* row that had devices.
    const result = bank.reduce(
        (acc, row) => {
            const currentDeviceCount = countDevices(row);

            if (currentDeviceCount > 0) {
                // This row has devices.
                // Add beams connecting this row to the previous device-row.
                const beamsToAdd = acc.prev * currentDeviceCount;

                // Return the new state for the next iteration:
                // - 'total' is updated with the new beams.
                // - 'prev' is updated to *this* row's count.
                return {
                    total: acc.total + beamsToAdd,
                    prev: currentDeviceCount,
                };
            } else {
                // This row is empty.
                // We add no beams, and we *keep* the 'prev' count
                // as it was, so the next device-row connects to the
                // last one we found.
                return acc; // The accumulator state remains unchanged
            }
        },
        {total: 0, prev: 0} // Initial state: 0 total beams, 0 previous devices.
    );

    // The final result is the 'total' property of our accumulator.
    return result.total;
};

// --- Example Usage: ---
const bank1 = ["011001", "000000", "010100", "001000"];
console.log(`Example 1 Output: ${numberOfBeams(bank1)}`); // Output: 8

const bank2 = ["000", "111", "000"];
console.log(`Example 2 Output: ${numberOfBeams(bank2)}`); // Output: 0
