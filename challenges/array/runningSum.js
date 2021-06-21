let runningSum = (nums) => {
  let sum = 0;
  const totalCounts = [];
  nums.map(number => {
    sum += number;
    totalCounts.push(sum);
  });
  return totalCounts;
};

module.exports = { runningSum };
