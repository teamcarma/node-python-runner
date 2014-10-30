"use strict";

var exec = require("./src/exec");


var Python = {

	/**
	 *
	 * Execute a python inline script
	 * 
	 * @type {Promise}
	 * 
	 */
	exec: require("./src/exec"),

	/**
	 *
	 * Execute a python script
	 * 
	 * @type {Promise}
	 * 
	 */
	execScript: require("./src/execScript")

};

module.exports = Python;
