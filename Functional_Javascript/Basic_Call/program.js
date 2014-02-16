function duckCount() {
  return Array.prototype.filter.call(arguments, function (object) {
    return Object.prototype.hasOwnProperty.call(object, "quack");
  }).length;
}

module.exports = duckCount;
