/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.
 */
const setZeroes = (matrix) => {

  const w = matrix.length, h = matrix[0].length, target = 0;

  // A linked list
  let replacements = null;

  // Any coord whose value is `target` results in a replacement at that coord
  for(let x = 0; x < w; x++) {
    for(let y = 0; y < h; y++) {
      if(matrix[x][y] === target) {
        let next = replacements;
        replacements = { x, y, next };
      }
    }
  }

  // Perform all replacements
  let llNode = replacements;
  while(llNode) {
    let { x, y, next } = llNode;
    for(let xx = 0; xx < w; xx++) matrix[xx][y] = 0;
    for(let yy = 0; yy < h; yy++) matrix[x][yy] = 0;
    llNode = next;
  }
  return matrix;

};
