/**
 * @param {character[][]} board
 * @return {boolean}

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
  */
const isValidSudoku = (board) => {
  const subsets = {
    rows: {}, // 9 rows, each containing 9 cells across
    columns: {}, // 9 columns, each containing 9 cells down
    sectors: {}, // 9 sectors, each containing 3x3 cells inside
  };

  let isValid = true;

  loop1:
  for(let row = 0; row < board.length; row++) {
    loop2:
    for(let col = 0; col < board.length; col++) {
      const cellValue = board[row][col];
      if(cellValue === '.') {
        continue;
      }

      // 1: validate rows
      if(!subsets.rows.hasOwnProperty(row)) {
        subsets.rows[row] = {};
      }

      if(subsets.rows[row].hasOwnProperty(cellValue)) {
        isValid = false;
        break loop1;
      } else {
        subsets.rows[row][cellValue] = null;
      }

      // 2: validate columns
      if(!subsets.columns.hasOwnProperty(col)) {
        subsets.columns[col] = {};
      }

      if(subsets.columns[col].hasOwnProperty(cellValue)) {
        isValid = false;
        break loop1;
      } else {
        subsets.columns[col][cellValue] = null;
      }

      // 3: validate grid
      const b = getSectorNumber(row, col);

      if(!subsets.sectors.hasOwnProperty(b)) {
        subsets.sectors[b] = {};
      }

      if(subsets.sectors[b].hasOwnProperty(cellValue)) {
        isValid = false;
        break loop1;
      } else {
        subsets.sectors[b][cellValue] = null;
      }
    }
  }

  return isValid;
};

// if row = 8 & column = 5
// then sectors = 2, 1
// therefore sectorNumber = 7
const getSectorNumber = (row, column) => {
  const rowSector = parseInt(row / 3);
  const columnSector = parseInt(column / 3);

  // translate the two concatenated values from base3 to get a sector number ranging from 0-8.
  let sectorNumber = parseInt(`${rowSector}${columnSector}`, 3);
  return sectorNumber;
};
