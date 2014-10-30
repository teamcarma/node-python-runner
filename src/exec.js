"use strict";

var _ 		= require("lodash"),
	Q 		= require("q"),
	spawn 	= require('child_process').spawn;

/**
 *
 * Manages the execution of the python process. Once the code is executed the 
 * promise is resolved with the stdout of the process.
 *
 * @param {String} code
 * @param {Object} options
 * 
 * @return {Promise}
 * 
 */
var exec = function(code, options){

	options = options || {};
	options.bin = options.bin || "python";
	options.env = _.extend({},
		process.env,
		{
			/// set the env PYTHONPATH
			PYTHONPATH: ""
		}, 
		options.env);
	

	var dfd    = Q.defer(),
		output = [];

	/// create the python process
	var python 	= spawn(options.bin, [], { env: options.env });

	/// initialize the process IO
	python.stdin.setEncoding('utf8');
	python.stdout.setEncoding('utf8');

	/// wait for stdout data
	python.stdout.on('data', function(data){
		output.push(data);
	});

	/// if some error is thrown reject the promise
	python.stderr.on('data', function(data){
		dfd.reject(data.toString());
	});
	
	python.stdout.on('close', function(code){

		var result = output.join().trim();

        /// resolve the output
		dfd.resolve(result);

	});

	/// send the python instruction
	python.stdin.write(code);
	/// terminate the stdin will terminate the process
	python.stdin.end();

	return dfd.promise;

};

module.exports = exec;

