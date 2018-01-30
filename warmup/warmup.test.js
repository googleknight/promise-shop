const warmup = require('./warmup');

describe('Chekcing the returned value ', () => {
  it('Checking the returned value', (done) => {
    function callback(data) {
      expect(data).toBe('TIMED OUT!');
      done();
    }
    warmup(callback);
  });
  it('Checking the returned value type', (done) => {
    function callback(data) {
      expect(typeof data).toBe('string');
      done();
    }
    warmup(callback);
  });
});

