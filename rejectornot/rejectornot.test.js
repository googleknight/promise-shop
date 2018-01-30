const rejectedOrNot = require('./rejectornot');

describe('Chekcing the returned value ', () => {
  it('Checking the returned value', (done) => {
    function callback(data) {
      expect(data).not.toBe('I DID NOT FIRED');
      done();
    }
    rejectedOrNot(callback);
  });
  it('Checking the returned value', (done) => {
    function callback(data) {
      expect(data).toBe('I FIRED');
      done();
    }
    rejectedOrNot(callback);
  });
  it('Checking the returned value type', (done) => {
    function callback(data) {
      expect(typeof data).toBe('string');
      done();
    }
    rejectedOrNot(callback);
  });
});
