/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if(s.length != t.length) {
    return false;
  }
  let o1 = {};
  let o2 = {};
  let i;

  for(i = 0; i < s.length; i++) {
    let ch = s[i];
    if(ch in o1) {
      o1[ch] += 1;
    } else {
      o1[ch] = 1;
    }
  }
  for(i = 0; i < t.length; i++) {
    let ch = t[i];
    if(ch in o2) {
      o2[ch] += 1;
    } else {
      o2[ch] = 1;
    }
  }
  for(let k in o1) {
    if(o1[k] != o2[k]) {
      return false;
    }
  }
  return true;
};
