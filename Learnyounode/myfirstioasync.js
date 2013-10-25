(function (pathToFile) {
	var fs = require("fs");

	fs.readFile(pathToFile, function (error, buffer) {
		if (error) {
			throw Exception("You made baby Jesus cry!");
		};

		console.log(buffer.toString().match(/\n/g).length);
	});
})(process.argv[2]);