const climbStairs = n => {
  if(n < 3) return n;
  let memo = [1, 2];
  for(let i = 2; i < n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[memo.length - 1];
};
