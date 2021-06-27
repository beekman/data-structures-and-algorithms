/* You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API. */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = isBadVersion => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let min = 1, max = n;
    while(min < max) {
      const mid = Math.floor(min + (max - min) / 2);
      if(isBadVersion(mid)) {
        max = mid;
      } else {
        min = mid + 1;
      }
    }
    return min;
  };
};
