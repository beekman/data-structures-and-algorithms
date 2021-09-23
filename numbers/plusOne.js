/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.
 */

const plusOne = digits => {
  //start at the last digit and work backward.
  for(let i = digits.length - 1; i >= 0; i--) {
    //edge case: if digit is 9, digit becomes zero and keep iterating.
    if(digits[i] === 9) {
      digits[i] = 0;
    }
    //otherwise add 1 to digit.
    else {
      digits[i]++;
      return digits;
    }
  }
  return [1, ...digits];
};
