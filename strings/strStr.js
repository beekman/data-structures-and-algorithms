/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if(haystack.includes(needle)) {
    return (haystack.indexOf(needle));
  }
  else return -1;
};
