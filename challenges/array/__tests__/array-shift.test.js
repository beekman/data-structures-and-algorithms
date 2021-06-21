const { arrayShift, arrayRemoveMiddle } = require('../array-shift');

describe('array shift function', () => {
  it('should input a value into the middle of an array', () => {
    expect(arrayShift([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(arrayShift([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
describe('array remove middle function', () => {
  it('should take out middle value and other elements should fill gap', () => {
    expect(arrayRemoveMiddle([2, 4, 5, 6, 8])).toEqual([2, 4, 6, 8]);
    expect(arrayRemoveMiddle([4, 8, 15, 16, 23, 42])).toEqual([4, 8, 15, 23, 42]);
  });
});
