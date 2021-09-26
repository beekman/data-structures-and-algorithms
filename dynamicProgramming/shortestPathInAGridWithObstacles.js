/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

/*
You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.
 */
const shortestPath = (grid, k) => {

  const visited = new Set();
  const queue = [];
  let move_count = 0;
  queue.push([0, 0, k]);


  let rows = grid.length - 1;
  let cols = grid[0].length - 1;

  if(k >= rows + cols) {
    return rows + cols;
  }

  while(queue.length) {
    let size = queue.length - 1;

    for(let i = 0; i <= size; i++) {
      const cell = queue.shift();
      const [row, col, k] = cell;

      // if at some point k becomes greater than shortest path steps
      // then return total move till now + shortest dist to endpoint
      // this optimisation reduce time and memory from (340ms, 83MB) to (60ms,34MB)
      if(k >= rows + cols - row - col) {
        return move_count + rows + cols - row - col;
      }

      if(row === grid.length - 1 && col === grid[0].length - 1) {
        return move_count;
      }

      exploreNeighbors(grid, row, col, k, queue, visited);

    }

    move_count++;
  }
  return -1;
};

function exploreNeighbors(grid, row, col, k, queue, visited) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let count = 0;
  for(let i = 0; i < directions.length; i++) {
    let new_row = row + directions[i][0];
    let new_col = col + directions[i][1];

    const key = new_row + '#' + new_col + '#' + k;

    if(visited.has(key) || !inRange(grid, new_row, new_col)) {
      continue;
    }

    if(grid[new_row][new_col] == 0) {

      visited.add(key, true);
      queue.push([new_row, new_col, k]);
      count++;
    } else if(grid[new_row][new_col] == 1 && k > 0) {

      let newKey = new_row + '#' + new_col + '#' + (k - 1);
      if(visited.has(newKey)) continue;
      visited.add(newKey, true);
      queue.push([new_row, new_col, k - 1]);
      count++;
    }
  }

  return count;
}

function inRange(grid, row, col) {

  let rows = grid.length - 1;
  let cols = grid[0].length - 1;

  if(row <= rows && col <= cols && col >= 0 && row >= 0) {
    return true;
  }

  return false;

}
