
function alwaysasync(callback) {
  const promise = new Promise(((resolve, reject) => {
    resolve('PROMISE VALUE');
  }));
  let result = '';
  promise.then((promiseValue) => { result += promiseValue; return callback(result); });
  result += 'MAIN PROGRAM';
}
module.exports = alwaysasync;

