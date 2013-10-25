module.exports = function (pathToDirectory, fileExtension, callback) {
	var fs = require("fs");

	var fileExtensionRegExp = new RegExp("^.*[.]"+fileExtension+"$");
	
	fs.readdir(pathToDirectory, function (err, list) {
		if (err) {
			return callback(err);
		};

		callback(err, list.filter(function(file){
			return fileExtensionRegExp.test(file);
		}));
	});

}