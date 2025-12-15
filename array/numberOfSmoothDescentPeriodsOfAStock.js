/**
 * @param {number[]} prices
 * @return {number}
 */
const getDescentPeriods = (prices) => {
    let count = 0;
    let length = 1; // Current smooth descent period length

    for (let i = 0; i < prices.length; i++) {
        if (i > 0 && prices[i] === prices[i - 1] - 1) {
            // Continue the descent
            length++;
        } else {
            // Start a new descent period
            length = 1;
        }
        // Add all subarrays ending at current position
        count += length;
    }

    return count;
};
