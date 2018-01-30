function onReject(error, callback = console.log) {
  callback(error.message);
}
function rejectedPromise() {
  const promise = new Promise(((fulfill, reject) => {
    const error = new Error('REJECTED!');
    setTimeout(reject.bind(this, error), 300);
  }));
  promise.then(null, onReject);
}

rejectedPromise();
module.exports = rejectedPromise;

