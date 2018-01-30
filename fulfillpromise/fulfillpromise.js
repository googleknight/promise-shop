function fulfillpromise(callback = console.log) {
  const promise = new Promise(((fulfill, reject) => {
    setTimeout(fulfill.bind(this, 'FULFILLED!'), 300);
  }));
  promise.then(result => callback(result));
}
fulfillpromise();
module.exports = fulfillpromise;
