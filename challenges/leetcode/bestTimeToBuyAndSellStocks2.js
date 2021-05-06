/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let maxProfit = 0;
  let min = 0;
  for(let i = 1; i < prices.length; i++) {
    eval = prices[i] - prices[i - 1];
    if(eval > 0) {
      maxProfit += eval;
    }
  }
  return maxProfit;
};
