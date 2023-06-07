/*
Given 3 positives numbers a, b and c, return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.



Example 1:



Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
Example 2:

Input: a = 4, b = 2, c = 7
Output: 1
Example 3:

Input: a = 1, b = 2, c = 3
Output: 0

*/
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const minFlips = (a, b, c) => {
    let flips = 0;
    while (a > 0 || b > 0 || c > 0) {
        const bitA = a & 1;
        const bitB = b & 1;
        const bitC = c & 1;
        if ((bitA | bitB) !== bitC) {
            if (bitA === 1 && bitB === 1) {
                flips += 2;
            } else {
                flips += 1;
            }
        }
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    return flips;
};
