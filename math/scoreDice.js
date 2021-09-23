/* eslint-disable no-unused-vars */

const score = (dice) => {
  const scoringRules = [
    { v: 1, c: 3, p: 1000 },
    { v: 6, c: 3, p: 600 },
    { v: 5, c: 3, p: 500 },
    { v: 4, c: 3, p: 400 },
    { v: 3, c: 3, p: 300 },
    { v: 2, c: 3, p: 200 },
    { v: 1, c: 1, p: 100 },
    { v: 5, c: 1, p: 50 }
  ];

  const scoreForHistogram = counts => {
    let score = 0;
    for(const { v, c, p } of scoringRules) {
      const ruleCount = Math.floor((counts[v] || 0) / c);
      counts[v] -= ruleCount * c;
      score += ruleCount * p;
    }
    return score;
  };

  const counts = [...Array(7)].map(v => 0);
  for(const v of dice) counts[v]++;
  return scoreForHistogram(counts);
};
