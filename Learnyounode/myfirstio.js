(function (pathToFile) {
	var fs = require("fs");

	var buffer = fs.readFileSync(pathToFile);

	console.log(buffer.toString().match(/\n/g).length);

})(process.argv[2]);