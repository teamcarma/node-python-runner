"use script";

var Q 	 = require("q"),
	fs 	 = require("fs"),
	exec = require("./exec");

/**
 *
 * Executes a Script
 * 
 * @return {Promise}
 * 
 */
var execScript = function(file, options){

	var dfd = Q.defer();

	fs.readFile(file, 'utf8', function (err, data) {
	  
	  if (err) {
	  	dfd.reject(err.toString());
	  	return;
	  };

	  exec(data, options)
	  	.then(dfd.resolve)
	  	.catch(dfd.reject);

	});

	return dfd.promise;

};

module.exports = execScript;
