
function alwaysasync(callback) {
  const promise = new Promise(((resolve, reject) => {
    resolve('PROMISE VALUE');
  }));
  promise.then((result => callback(result)));
}

function main(callback = console.log) {
  callback('MAIN PROGRAM');
  alwaysasync(callback);
}
module.exports = alwaysasync;

