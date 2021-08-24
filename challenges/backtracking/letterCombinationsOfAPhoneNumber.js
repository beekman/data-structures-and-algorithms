/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  const map = [];
  map[2] = "abc";
  map[3] = "def";
  map[4] = "ghi";
  map[5] = "jkl";
  map[6] = "mno";
  map[7] = "pqrs";
  map[8] = "tuv";
  map[9] = "wxyz";
  map[0] = "";

  const getString = (digits, temp, result, map) => {
    if(digits.length == 0) {
      let arr = [];
      for(let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
      }
      result.push(arr.join(''));
      return;
    }

    const current = parseInt(digits.substring(0, 1));
    const letters = map[current];
    for(let i = 0; i < letters.length; i++) {
      temp.push(letters.charAt(i));
      getString(digits.substring(1), temp, result, map);
      temp.pop();
    }
  };

  const result = [];

  if(digits == null || digits.length == 0)
    return result;

  let temp = [];
  getString(digits, temp, result, map);

  return result;
};
