/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const rows = heights.length, cols = heights[0].length;
    let pac = new Set(), atl = new Set();

    // Depth First Search (DFS) function
    const dfs = (r, c, visit, prevHeight) => {
        const key = `${r},${c}`;
        // Check if already visited or out of bounds or lower than previous height
        if (visit.has(key) || r < 0 || c < 0 || r >= rows || c >= cols || heights[r][c] < prevHeight) {
            return;
        }

        // Mark as visited
        visit.add(key);

        // Explore neighbors
        dfs(r + 1, c, visit, heights[r][c]);
        dfs(r - 1, c, visit, heights[r][c]);
        dfs(r, c + 1, visit, heights[r][c]);
        dfs(r, c - 1, visit, heights[r][c]);
    };

    // Loop through the top and bottom rows (Pacific/Atlantic)
    for (let c = 0; c < cols; c++) {
        dfs(0, c, pac, heights[0][c]); // Pacific (top row)
        dfs(rows - 1, c, atl, heights[rows - 1][c]); // Atlantic (bottom row)
    }

    // Loop through the left and right columns (Pacific/Atlantic)
    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pac, heights[r][0]); // Pacific (left column)
        dfs(r, cols - 1, atl, heights[r][cols - 1]); // Atlantic (right column)
    }

    // Collect coordinates where both oceans can be reached
    let res = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const key = `${r},${c}`;
            if (pac.has(key) && atl.has(key)) {
                res.push([r, c]);
            }
        }
    }

    return res;
};
