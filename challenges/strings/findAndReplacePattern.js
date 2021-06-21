/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = (words, pattern) => {
  const targetVals = getCharacterValues(pattern);
  return words.filter(word => getCharacterValues(word) === targetVals);
};

const getCharacterValues = str => {
  const valueMap = new Map();
  //use a map for uniqueness
  [...str].forEach((char, index) => valueMap.set(char, index));
  //iterate through each char of the index
  return str.replace(/./g, char => valueMap.get(char));
};
