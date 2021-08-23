const { BinarySearch } = require('../arrayBinarySearch');

describe('tests array search', () => {

  it('finds the position of a key in a sorted 6-digit array', () => {
    expect(BinarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(BinarySearch([4, 8, 15, 16, 23, 42], 42)).toEqual(5);
    expect(BinarySearch([4, 8, 15, 16, 23, 42], 4)).toEqual(0);
  });

  it('returns -1 if the key is not found in the array', () => {
    expect(BinarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
  });

});
