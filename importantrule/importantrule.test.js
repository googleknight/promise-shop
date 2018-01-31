const importantrule = require('./importantrule');

describe('Testing chainedpromise  ', () => {
  it('The returned value is Promise ', () => {
    expect(importantrule.chainedPromises()).toBeInstanceOf(Promise);
  });
});

