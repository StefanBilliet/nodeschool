function reduce(arr, fn, initial) {
  return (function reduceCore(index, accumulator) {
    if (index === arr.length)
      return accumulator;
    return reduceCore(index + 1, fn(accumulator, arr[index], index, accumulator));
  })(0, initial);
}

module.exports = reduce;