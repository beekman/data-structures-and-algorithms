/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
    let order = []
    const [rowLength, colLength] = [(matrix.length - 1), (matrix[0].length - 1)];
    let [top, bottom, left, right] = [0, rowLength, 0, colLength];

    const isInBounds = () => ((left <= right) && (top <= bottom));

    while (isInBounds()) {
        addTop(
            matrix, top, bottom, left, right, order
        );
        top++;

        addRight(
            matrix, top, bottom, left, right, order
        );
        right--;

        const hasRow = (top <= bottom);
        if (hasRow) {
            addBottom(
                matrix, top, bottom, left, right, order
            );
            bottom--;
        }

        const hasCol = (left <= right);
        if (hasCol) {
            addLeft(
                matrix, top, bottom, left, right, order
            );
            left++;
        }
    }

    return order;
};

const addTop = (matrix, top, bottom, left, right, order) => {
    for (let col = left; col <= right; col++) {
        order.push(matrix[top][col]);
    }
}

const addRight = (matrix, top, bottom, left, right, order) => {
    for (let row = top; row <= bottom; row++) {
        order.push(matrix[row][right]);
    }
}

const addBottom = (matrix, top, bottom, left, right, order) => {
    for (let col = right; left <= col; col--) {
        order.push(matrix[bottom][col]);
    }
}

const addLeft = (matrix, top, bottom, left, right, order) => {
    for (let row = bottom; top <= row; row--) {
        order.push(matrix[row][left]);
    }
}
