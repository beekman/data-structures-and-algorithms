/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const rotate = matrix => {
  let y = matrix.length - 1;
  for(let i = 0; i < matrix.length / 2; i++) {
    let x = (matrix.length - 1) - i;
    for(let j = i; j < y; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][y];
      matrix[j][y] = temp;
      temp = matrix[i][j];
      matrix[i][j] = matrix[y][x];
      matrix[y][x] = temp;
      temp = matrix[i][j];
      matrix[i][j] = matrix[x][i];
      matrix[x][i] = temp;
      x--;
    }
    y--;
  }
  return matrix;
};
