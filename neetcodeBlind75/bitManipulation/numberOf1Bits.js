/**
 * https://leetcode.com/problems/number-of-1-bits/
 * Time O(1) | Space (1)
 * @param {number} n - a positive integer
 * @return {number}
 */

const hammingWeight = (n, sum = 0) => {
    while (n !== 0) {
        n &= (n - 1)
        sum++
    }

    return sum
}
