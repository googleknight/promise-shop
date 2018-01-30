const attach = require('./valuesandpromises');

describe('Chekcing the returned value of attaching function ', () => {
  it('Checking the returned value', (done) => {
    function callback(data) {
      expect(data).toBe('DR. MANHATTAN');
      done();
    }
    attach.attaching(callback);
  });
  it('Checking the returned value type', (done) => {
    function callback(data) {
      expect(typeof data).toBe('string');
      done();
    }
    attach.attaching(callback);
  });
});

describe('Chekcing the returned values of attachTitle ', () => {
  it('Checking the returned value', () => {
    expect(attach.attachTitle('somename')).toBe('DR. somename');
  });
  it('Checking the returned value with no argument', () => {
    expect(attach.attachTitle('')).toBe('DR. ');
  });
});
