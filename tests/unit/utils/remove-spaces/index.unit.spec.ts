import removeSpaces from '@utils/remove-spaces';

describe('removeSpaces', () => {
  it('should remove duplicate spaces from string', () => {
    const result = removeSpaces('example    text');

    expect(result).toEqual('example text');
  });

  it('should trim spaces from string', () => {
    const result = removeSpaces('   example text   ');

    expect(result).toEqual('example text');
  });
});
