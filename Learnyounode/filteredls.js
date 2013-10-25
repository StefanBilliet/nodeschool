(function (pathToDirectory, fileExtension) {
	var fs = require("fs");

	var fileExtensionRegExp = new RegExp("^.*[.]"+fileExtension+"$");
	
	fs.readdir(pathToDirectory, function (err, list) {
		list.forEach(function (file) {
			if(fileExtensionRegExp.test(file))
				console.log(file);
		});
	});

})(process.argv[2], process.argv[3]);