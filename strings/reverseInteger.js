/* Reverse Integer

Solution
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0

Constraints:
-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  var MAX_INT = 2147483647;
  var MIN_INT = -2147483648;
  var flag = false;
  var reverse = 0;
  if(x < 0) {
    flag = true;
    x = -x;
  }
  while(x > 0) {
    reverse = reverse * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  if(reverse > MAX_INT || reverse < MIN_INT) {
    reverse = 0;
  }
  if(flag) {
    reverse = -reverse;
  }
  return reverse;
};
