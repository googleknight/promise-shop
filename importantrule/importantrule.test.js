const importantrule = require('./importantrule');

describe('Testing iterate', () => {
  it('It should return 2 on passing 1', () => {
    expect(importantrule.iterate(1)).toBe(2);
  });
  it('It should return 1 on passing no argument', () => {
    expect(importantrule.iterate(0)).toBe(1);
  });
});
describe('Testing chainedpromise  ', () => {
  it('The returned value is Promise ', () => {
    expect(importantrule.chainedPromises()).toBeInstanceOf(Promise);
  });
});

