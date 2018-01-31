const parsedPromise = require('./throwanerror');

describe('Parsedpromise returns a promise ', () => {
  const inputInvalidJSONString = 'asdasjkn';
  it('Should return an error message ', (done) => {
    function callback(data) {
      expect(data).toBe('Unexpected token a in JSON at position 0');
      done();
    }
    parsedPromise(inputInvalidJSONString).then(callback, callback);
  });
});

