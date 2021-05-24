/**
 * Create an prototype function that joins an array of string
 * by using the characters found within 
 * the array. Return the joined string + the separator string,
 * or false if you are unable to join the array.
 */

/**
 * If an array only has the same string, this will fail.
 * A solution cannot be any element in the array.
 * A solution cannot be any adjacent set of elements in the array.
 * 
 */

Array.prototype.joinMacGuyver = function() {
  // None of the elements in the array can be a separator
  const set = new Set(this);
  if (set.size <= 1) return false;
  const string = this[0] + this.join('') + this[this.length - 1];

  const finalString = this.join(string);
  return [finalString, string];
}
// 'bababa'
// ['a', 'b', 'a', 'b']
// const original = ['a', 'b', 'c', 'd', 'ab', 'bc', 'cd', 'bd'];
// const [string, separator] = original.joinMacGuyver();
// const clone = string.split(separator);

// console.log(clone);

// ['a','a']
const testArrayFail = ['a','a'];
const testArraySucceed = ['a', 'b'];

console.log(testArrayFail.joinMacGuyver());
const [string, separator] = testArraySucceed.joinMacGuyver();
console.log(string.split(separator));