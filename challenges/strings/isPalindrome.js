/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
  const re = /[^A-Za-z0-9]/g;
  s = s.toLowerCase().replace(re, '');
  const len = s.length;
  for(let i = 0; i < len / 2; i++) {
    if(s[i] !== s[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
