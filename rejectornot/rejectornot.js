function onRejected(error, callback = console.log) {
  callback(error.message);
}
function rejectedOrNot(callback = console.log) {
  const promise = new Promise(((fulfill, reject) => {
    fulfill('I FIRED');
    const error = new Error('I DID NOT FIRE');
    reject(error);
  }));
  promise.then(result => callback(result), onRejected);
}

rejectedOrNot();
module.exports = rejectedOrNot;

