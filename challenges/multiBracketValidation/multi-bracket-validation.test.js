const { multiBracketValidation } = require('./multi-bracket-validation.js');

describe('tests multi-bracket validation', () => {
  it('should accept a single pair of balanced brackets as valid', () => {
    expect(multiBracketValidation('[]')).toEqual(true);
  });
});
