const { multiBracketValidation } = require('./multiBracketValidation.js');

describe('tests multi-bracket validation', () => {
  it('should accept an empty string and a null input as valid', () => {
    expect(multiBracketValidation('')).toEqual(true);
    expect(multiBracketValidation(null)).toEqual(true);
  });
  it('should accept a single pair of balanced brackets as valid', () => {
    expect(multiBracketValidation('[]')).toEqual(true);
    expect(multiBracketValidation('()')).toEqual(true);
    expect(multiBracketValidation('{}')).toEqual(true);
  });
  it('should accept multiple nested brackets with no other characters as valid', () => {
    expect(multiBracketValidation('[{()}]')).toEqual(true);
    expect(multiBracketValidation('({})')).toEqual(true);
    expect(multiBracketValidation('{[]}')).toEqual(true);
  });
  it('should accept multiple nested brackets with other characters nested inside them as valid', () => {
    expect(multiBracketValidation('[{(hi)}]')).toEqual(true);
    expect(multiBracketValidation('(foo{bar})')).toEqual(true);
    expect(multiBracketValidation('{foo[bar]}')).toEqual(true);
  });
  it('should return false for a closed parens that has no opening parens preceding it', () => {
    expect(multiBracketValidation('}')).toEqual(false);
    expect(multiBracketValidation(')')).toEqual(false);
    expect(multiBracketValidation(']')).toEqual(false);
    expect(multiBracketValidation('(])')).toEqual(false);
  });
});
