(function (url) {
	var http  = require("http");
	var bl = require("bl");

	http.get(url, function(response){
		response.setEncoding("utf-8");

		response.pipe(bl(function (err, data) {
			if(err)
				console.log(err);

			console.log(data.toString().length);
			console.log(data.toString());
		}));

		//var buffer = "";
		
		//response.on("data", function (responseItem) {
		//	buffer = buffer + responseItem;
		//});
		//response.on("end", function () {
		//	console.log(buffer.length);
		//	console.log(buffer);
		//});
	});
	
})(process.argv[2]);