function ParsedPromise(jsonData = process.argv[2]) {
  let result = '';
  const promise = new Promise((resolve, reject) => {
    try {
      result = JSON.parse(jsonData);
    } catch (error) {
      reject(error.message);
    }
    resolve(result);
  });
  return promise;
}

module.exports = ParsedPromise;
