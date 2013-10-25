(function (pathToDirectory, fileExtension) {
	var fileLister = require("./fileLister");

	fileLister(pathToDirectory, fileExtension, function (err, files) {
		if(err)
			console.log(err);

		files.forEach(function(file){
			console.log(file);
		});
	})

})(process.argv[2], process.argv[3]);