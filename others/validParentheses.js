/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  //Use a stack to keep track of the opening brackets
  const stack = [];

  for(let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if(s[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    } else if(s[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if(s[i] === '}' && top === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
