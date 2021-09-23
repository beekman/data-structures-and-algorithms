/*
There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain
 */
const maxScore = (cardPoints, k) => {
  //Iterate through the first K cards of our card list C, and find the total points.
  let total = 0;
  for(let i = 0; i < k; i++) total += cardPoints[i];
  let best = total;
  // Every iteration, we slide the window backwards, removing one card from the left side and adding one card from the right side
  for(let i = k - 1, j = cardPoints.length - 1; ~i; i--, j--)
    total += cardPoints[j] - cardPoints[i], best = Math.max(best, total);
  return best;
};
