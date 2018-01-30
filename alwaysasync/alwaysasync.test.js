const alwaysasync = require('./alwaysasync');

describe('Chekcing the returned value ', () => {
  it('Checking the returned value', (done) => {
    function callback(data) {
      expect(data).toBe('PROMISE VALUE');
      done();
    }
    alwaysasync(callback);
  });
  it('Checking the returned value type', (done) => {
    function callback(data) {
      expect(typeof data).toBe('string');
      done();
    }
    alwaysasync(callback);
  });
});
