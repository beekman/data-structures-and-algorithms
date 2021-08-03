/* You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

Return the size of the largest island in grid after applying this operation.

An island is a 4-directionally connected group of 1s.



Example 1:

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
Example 2:

Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
Example 3:

Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.


Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 500
grid[i][j] is either 0 or 1.
 */
const largestIsland = grid => {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array(m).fill(0).map(() => Array(n).fill(0));
  let maxArea = 0;
  const dfs = (i, j) => {
    if(i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || grid[i][j] === 0) return;
    visited[i][j] = 1;
    maxArea = Math.max(maxArea, 1);
    for(const [dx, dy] of dirs) {
      dfs(i + dx, j + dy);
    }
  };
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(visited[i][j]) continue;
      maxArea = Math.max(maxArea, 1);
      dfs(i, j);
    }
  }
  return maxArea;
};

export { largestIsland };
