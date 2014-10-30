
//var Python = requrie("python-runner");
var Python = require("../index");

Python.execScript(
	__dirname + "/example.py",
	{
		bin: "python3",
		args: [ "argument" ]
	}
)
.then(function(data){
	console.log(data);
})
.catch(function(err){
	console.log("Error", err);
});