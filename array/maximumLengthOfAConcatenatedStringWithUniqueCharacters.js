/**
 * @param {string[]} arr
 * @return {number}
 */
/*
Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.

 */
// Function to find string with maximum
// number of unique characters.
const maxLength = arr => {
  let tempArr = new Array(arr.length);

  // Index of string with maximum unique
  // characters
  let maxUniqueLetters = 1;

  // iterate through all strings
  for(let j = 0; j < arr.length; j++) {
    // array indicating any alphabet
    // included or not included
    let character = new Array(26, 0);

    // count number of unique alphabets
    // in each String`12
    for(let k = 0; k < arr[j].length; k++) {
      let x = arr[j][k].charCodeAt(0) - 65;

      if((arr[j][k] != ' ') &&
        (character[x] == 0)) {
        tempArr[j]++;
        character[x] = 1;
      }
    }
    // keep track of maximum number of letters
    if(tempArr[j] > tempArr[maxUniqueLetters])
      maxUniqueLetters = j;
  };
  return (tempArr[maxUniqueLetters]);
};
