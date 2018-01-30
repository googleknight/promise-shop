function attachTitle(name) {
  return `DR. ${name}`;
}
function attaching(callback = console.log) {
  const firstPromise = Promise.resolve('MANHATTAN');
  const secondPromise = firstPromise.then(attachTitle);
  secondPromise.then(callback);
}
module.exports = { attaching, attachTitle };
