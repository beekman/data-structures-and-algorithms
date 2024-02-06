/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
    let count = 0 // the counted islands

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] == "1") {
                count++
                explore(r, c, grid)
            }
        }
    }
    return count
}

// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function explore(r, c, grid) {
    //Let's return IF
    // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
    if (r < 0 || c < 0 || r >= grid.length
        || c >= grid[r].length || grid[r][c] === '0') {
        return
    }

    //Otherwise, we should explore it!
    //First let's set the current spot to "0"
    grid[r][c] = '0'

    //Possibilites:
    // 1) 1 to the right, left, top, bottom
    //right
    explore(r, c + 1, grid)
    //Left
    explore(r, c - 1, grid)
    //Down
    explore(r + 1, c, grid)
    //Up
    explore(r - 1, c, grid)

}
