/**
 * @param {string} n
 * @return {number}
 */

/*
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.
*/
const minPartitions = (n) => {
  /*
    Each digit can only be reached by repeated adding 1 to its value.
    Thus, the minimum number of positive deci-binary numbers is
    the same as the highest single digit in the input.
  */
  return n.split('').sort((a, b) => b - a)[0];
};
