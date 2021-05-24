/**
 * Create an prototype function that joins an array of string
 * by the smallest combination of characters found within 
 * the array. Return the joined string + the separator string,
 * or false if you are unable to join the array.
 */

Array.prototype.joinMacGuyver = function() {
  return [this.join('*'), '*'];
}

const original = ['a', 'b', 'c', 'd', 'ab', 'bc', 'cd', 'bd'];
const [string, separator] = original.joinMacGuyver();
const clone = string.split(separator);

console.log(clone);

/**
 * Create a class, DiceExMachina, that functions as a
 * die that places its thumb on the scale for equality.
 * In other words, the DiceExMachina should still *mostly*
 * be random in its rolls, with a preference for random
 * rolls that prefer equalling probabilities v. being
 * truly random (and yes, Math.random is pseudorandom, but
 * let's assume it is "random" for purposes of this problem)
 */
class DiceExMachina {
  constructor(numberOfSides) {

  }

  roll() {

  }

  displayStats() {

  }
}


/**
 * Create a prototype function that joins an array of mixed
 * types, and a corresponding prototype function that splits
 * the string of mixed types back into an array, preserving
 * type. Handle only string, number (integers and floats),
 * and boolean (don't worry about arrays, objects, undefined,
 * or null)
 */
Array.prototype.joinMixedTypes = function() {
  return this.join('foo');
}

String.prototype.splitMixedTypes = function() {
  return this.split('foo');
}

const mixedArray = ['this', false, 411, true, 'true', 0.4];
const mixedString = mixedArray.joinMixedTypes();
const cloneMixedArray = mixedString.splitMixedTypes();
console.log(cloneMixedArray);


/**
 * Create a Logger class that sets up a schema for the
 * fields that you want and a max log size for the last
 * N number of log items. You will receive log items in
 * separately, internally sorted batches, and add
 * functionality to filter and sort your logs.
 * 
 * Maximize for optimization (time and/or space), and
 * provide reasoning for your design decisions.
 */

class Logger {
  constructor(schema, logSize) {

  }

  addLogItems(arrayOfLogItems) {

  }

  filterLogItems(arrayOfFilters) {

  }

  sortLogItems(arrayOfFields) {

  }
}