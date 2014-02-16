var slice = Array.prototype.slice

function logger(namespace) {
  return function () {
    var args = [namespace].concat(slice.call(arguments, 0));

    return console.log.apply(console, args);
  }
}

module.exports = logger
