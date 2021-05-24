/**
 * Generates a random number between minVal and maxVal,
 * inclusive.
 * 
 * @param {number} minVal
 * @param {number} maxVal
 * @return {number} The random number.
 */
function generateRandomNumber(minVal=0, maxVal=1) {
  return Math.floor(
    Math.random() * (maxVal - minVal + 1) + minVal);
}

module.exports = {
  generateRandomNumber,
}