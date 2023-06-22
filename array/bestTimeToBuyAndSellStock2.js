/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let maxProfit = 0;
    let temp = 0;
    for (let i = 1; i < prices.length; i++) {
        temp = prices[i] - prices[i - 1];
        if (temp > 0) {
            maxProfit += temp;
        }
    }
    return maxProfit;
};
