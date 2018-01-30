function warmpup(callback = console.log) {
  setTimeout(callback.bind(this, 'TIMED OUT!'), 300);
}
warmpup();
module.exports = warmpup;
