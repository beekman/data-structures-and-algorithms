/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let ans, res;
let hashAns;

const dfs = (index, nums) => {
  let tmp = res.map(function(item) {
    return item;
  });

  if(!hashAns[tmp.toString()]) {
    hashAns[tmp.toString()] = true;
    ans.push(tmp);
  }

  for(let i = index; i < nums.length; i++) {
    res.push(nums[i]);
    dfs(i + 1, nums);
    res.pop();
  }
};

const subsetsWithDup = (nums) => {
  nums.sort(function(a, b) {
    return a - b;
  });

  ans = [],
    res = [],
    hashAns = [];

  dfs(0, nums);

  return ans;
};
