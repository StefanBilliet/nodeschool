(function(arguments){
	var numbers = arguments.map(function(stringArgument){
		return Number(stringArgument);
	});

	var sum = numbers.reduce(function (previousValue, currentValue, index, array) {
		return previousValue + currentValue;
	})

	console.log(sum);
})(process.argv.slice(2, process.argv.length));