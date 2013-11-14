(function () {
	var http = require("http");
	var map = require("through2-map");

	var server = http.createServer(function (request, response) {
		if(request.method != "POST")
			request.end("MethodNotAllowed: "+request.method);

		request.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(response);
	});

	server.listen(8000);
})();