/**
 * @param {number} x
 * @return {boolean}
 */
/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/
const isPalindrome = x => {
  let y = x.toString();
  let z = y.split('').reverse().join('');
  if(y === z) {
    return true;
  } else {
    return false;
  }
};
