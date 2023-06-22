/*
You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.
Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:
Input: prices = [1,3,2,8,4,9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

Example 2:
Input: prices = [1,3,7,5,10,3], fee = 3
Output: 6
 */
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
for
const maxProfit = (prices, fee) => {
    let d_ik0 = 0;
    let d_ik1 = -Infinity;

    for(let i=0;i<prices.length;i++){
        d_ik0 = Math.max(d_ik0 , d_ik1 + prices[i]);
        d_ik1 = Math.max(d_ik1, d_ik0 - prices[i] - fee);
    }
    return d_ik0;
};
