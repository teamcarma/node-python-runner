
//var Python = requrie("python-runner");
var Python = require("../index");

Python.exec(
	"print('Carma Carpooling')" + "\n" + 
	"print('Get there together')" + "\n"
)
.then(function(data){
	console.log(data);
});