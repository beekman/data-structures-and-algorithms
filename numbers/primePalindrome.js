/**
* @param {number} n
* @return {number}

866. Prime Palindrome
Medium
363
753
Companies
Given an integer n, return the smallest prime palindrome greater than or equal to n.

An integer is prime if it has exactly two divisors: 1 and itself. Note that 1 is not a prime number.

For example, 2, 3, 5, 7, 11, and 13 are all primes.
An integer is a palindrome if it reads the same from left to right as it does from right to left.

For example, 101 and 12321 are palindromes.
The test cases are generated so that the answer always exists and is in the range [2, 2 * 108].



Example 1:

Input: n = 6
Output: 7
Example 2:

Input: n = 8
Output: 11
Example 3:

Input: n = 13
Output: 101


Constraints:

1 <= n <= 108
*/
let primePalindrome = (n) => {

    const isPrime = (num) => { // returns boolean
        if (num <= 1) return false; // negatives
        if (num % 2 == 0 && num > 2) return false; // even numbers
        const square = Math.sqrt(num);
        for(let i = 3; i <= square; i += 2) { // start at 3, stop at the square, add 2
            if(num % i === 0) return false; // modulo shows a divisor was found
        }
        return true;
    }

    let isFound=false;
    for (let i = n+1; i < 200000000; i++) {
        if (isPrime(i)) {
            const nums = n.toString().split('');
            const isPalindrome = nums.join( '' ) === nums.reverse().join( "" );
            if (isPalindrome) {
                isFound=true;
            }
        }
    }
    if(isFound) {
        console.log(i);
        return i;
    }
}
