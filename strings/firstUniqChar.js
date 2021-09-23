/**
 * @param {string} s
 * @return {number}
 * Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.
 */
const firstUniqChar = s => {
  for(let i = 0; i < s.length; i++) {
    if(s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
      return i;
    }
  }
  return -1;
};
