(function () {
	var net = require("net");
	var moment = require("moment");

	var server = net.createServer(function (socket) {
		socket.end(moment().format('YYYY-MM-DD hh:mm')+"\r\n");
	});

	server.listen(8000);
})();