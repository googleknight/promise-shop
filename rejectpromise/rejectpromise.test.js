const rejected = require('./rejectpromise');

describe('Chekcing the returned value ', () => {
  it('Checking the returned value', (done) => {
    function callback(data) {
      expect(data).toBe('REJECTED!');
      done();
    }
    rejected(callback);
  });
  it('Checking the returned value type', (done) => {
    function callback(data) {
      expect(typeof data).toBe('string');
      done();
    }
    rejected(callback);
  });
});
