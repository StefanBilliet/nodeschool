(function (filePath) {
	var http = require("http");
	var fs = require("fs");

	var server = http.createServer(function (request, response) {
		fs.createReadStream(filePath).pipe(response);		
	});

	server.listen(8000);
})(process.argv[2]);