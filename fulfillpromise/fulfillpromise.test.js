const fulfilled = require('./fulfillpromise');

describe('Chekcing the returned value ', () => {
  it('Checking the returned value', (done) => {
    function callback(data) {
      expect(data).toBe('FULFILLED!');
      done();
    }
    fulfilled(callback);
  });
  it('Checking the returned value type', (done) => {
    function callback(data) {
      expect(typeof data).toBe('string');
      done();
    }
    fulfilled(callback);
  });
});
