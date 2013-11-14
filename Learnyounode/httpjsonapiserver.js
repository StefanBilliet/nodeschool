(function () {
	var http = require("http");
	var url = require("url");

	var server = http.createServer(function (request, response) {
		var urlProperties = url.parse(request.url, true);
		var date = new Date(urlProperties.query.iso);

		if (urlProperties.pathname == "/api/parsetime") {
			response.writeHead(200, { 'Content-Type': 'application/json' });
			response.end(JSON.stringify({
				"hour": date.getHours(),
			    "minute": date.getMinutes(),
			    "second": date.getSeconds()
			}));
		}
		else if(urlProperties.pathname == "/api/unixtime") {
			response.writeHead(200, { 'Content-Type': 'application/json' });
			response.end(JSON.stringify({
				"unixtime": date.getTime()
			}));
		}
		else {
			response.writeHead(404);
			response.end();
		}
	});

	server.listen(8000);
})();