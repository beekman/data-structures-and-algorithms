/**
 * @param {number} numRows
 * @return {number[][]}

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.
All numbers are initially set to 1.

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
 */

const generate = numRows => {
  let triangle = [];

  //Null input edge case
  if(numRows === 0) {
    return triangle;
  }

  for(let i = 0; i < numRows; i++) {

    triangle[i] = [];
    //The first element of all rows is 1. Also covers single row edge case.
    triangle[i][0] = 1;

    for(let j = 1; j < i; j++) {
      // add the two elements above each non-first, non-last row element to compute its value.
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    //The last element of all rows is always 1.
    triangle[i][i] = 1;
  }

  return triangle;
};
