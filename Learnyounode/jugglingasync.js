(function () {
	var http = require("http");
	var Q = require("q");
	var bl = require("bl");

	var promises = Array.prototype.slice.call(arguments, 0).map(function (url) {
		var getUrlDeferred = Q.defer();
		http.get(url, function (response) {
			response.pipe(bl(function (error, data) {
				if(error)
					getUrlDeferred.reject(error);
				getUrlDeferred.resolve(data.toString());
			}));	
		});
		return getUrlDeferred.promise;
	});

	Q.all(promises).
	spread(function (data1, data2, data3) {
		console.log(data1);
		console.log(data2);
		console.log(data3);
	}, function (error) {
		console.log(error);
	});
})(process.argv[2],process.argv[3],process.argv[4])