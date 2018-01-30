function chaining(callback = console.log) {
  const firstPromise = first();
  const secondPromise = firstPromise.then(value => second(value));
  secondPromise.then(callback);
}
module.exports = chaining;
