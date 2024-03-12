/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotate = matrix => {
    reverse(matrix);
    transpose(matrix);
};

const reverse = matrix => matrix.reverse();

const transpose = matrix => {
    const rows = matrix.length;

    for (let row = 0; (row < rows); row++) {
        for (let col = 0; (col < row); col++) {
            swap(matrix, row, col);
        }
    }
}

const swap = (matrix, row, col) => {
    [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
}
