/*
Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
*/
export function firstNonRepeatingLetter(s) {
  for(let i = 0; i < s.length; i++) {
    const c = s[i];
    const d = s;
    if((s.toLowerCase().indexOf(c) === i) && (s.toLowerCase().lastIndexOf(c[i]))) {
      return d[i].toString();
    }
  }
  return '';
}
