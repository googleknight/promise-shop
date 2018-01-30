function shortcuts(callback = console.log) {
  const promise = Promise.reject(new Error('SECRET VALUE'));
  promise.catch((err) => {
    callback(err.message);
  });
}

module.exports = shortcuts;

