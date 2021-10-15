/*
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.



Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: n = 8
Output: true
Explanation: 8 = 2 × 2 × 2
Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
Example 4:

Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 */

/**
 * @param {number} n
 * @return {boolean}
 */

const isUgly = n => {
  if(n < 1) return false; // edge cases

  while(n > 1) {
    if(n % 2 === 0) n /= 2;
    else if(n % 3 === 0) n /= 3;
    else if(n % 5 === 0) n /= 5;
    else return false; // bail out early for nums not divisible by 2, 3 or 5
  }
  return true;
};
