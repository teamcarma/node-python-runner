
//var Python = requrie("python-runner");
var Python = require("../index");

Python.exec(
	"print('Carma Carpooling')" + "\n" + 
	"print('Get there together')" + "\n",
	{
		bin: "python3"
	}
)
.then(function(data){
	console.log(data);
})
.catch(function(err){
	console.log("Error", err);
});