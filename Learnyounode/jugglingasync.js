(function (url1, url2, url3) {
	var http = require("http");
	var Q = require("q");
	var bl = require("bl");

	var getUrl1Promise = Q.defer();
	http.get(url1, function (response) {
		response.pipe(bl(function (error, data) {
			if(error)
				getUrl1Promise.reject(error);
			getUrl1Promise.resolve(data.toString());
		}));	
	});
	var getUrl2Promise = Q.defer();
	http.get(url2, function (response) {
		response.pipe(bl(function (error, data) {
			if(error)
				getUrl2Promise.reject(error);
			getUrl2Promise.resolve(data.toString());
		}));
	});
	var getUrl3Promise = Q.defer();
	http.get(url3, function (response) {
		response.pipe(bl(function (error, data) {
			if(error)
				getUrl3Promise.reject(error);
			getUrl3Promise.resolve(data.toString());
		}));
	});

	Q.all([getUrl1Promise.promise, getUrl2Promise.promise, getUrl3Promise.promise]).
	spread(function (data1, data2, data3) {
		console.log(data1);
		console.log(data2);
		console.log(data3);
	}, function (error) {
		console.log(error);
	});
})(process.argv[2],process.argv[3],process.argv[4])