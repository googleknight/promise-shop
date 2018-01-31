const importantrule = require('./importantrule');

describe('Testing iterate', () => {
  it('It should return 2 on passing 1', () => {
    expect(importantrule.iterate(1)).toBe(2);
  });
});
describe('Testing chainedpromise  ', () => {
  it('The returned value is Promise ', () => {
    expect(importantrule.chainedPromises()).toBeInstanceOf(Promise);
  });
});

