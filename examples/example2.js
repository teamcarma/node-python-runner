
//var Python = requrie("python-runner");
var Python = require("../index");

Python.exec(
	[
		"print(line1)", 
		"print(line2)"
	],
	{
		vars: {
			"line1": "Carma Carpooling",
			"line2": "Get there together"
		},
		bin: "python3"
	}
)
.then(function(data){
	console.log(data);
})
.catch(function(err){
	console.log("Error", err);
});