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
