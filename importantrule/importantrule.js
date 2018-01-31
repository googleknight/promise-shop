function alwaysThrows() {
  throw new Error('OH NOES');
}
function iterate(arg = 0) {
  console.log(arg);
  return arg + 1;
}
function onReject(error) {
  console.log(error.message);
}
function chainedPromises() {
  const promise = Promise.resolve(iterate(1));
  promise.then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(error => onReject(error));
  return promise;
}

// chainedPromises();
module.exports = {
  chainedPromises, alwaysThrows, iterate, onReject,
};
