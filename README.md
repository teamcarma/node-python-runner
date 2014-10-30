
[![Carma](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/banner.png)](https://carmacarpool.com/)
[![Carma IOS](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/ios.png)](https://carmacarpool.com/ios)
[![Carma Android](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/android.png)](https://carmacarpool.com/android)


# Node Python Runner

A library that allows you to execute python code 

## Install

```shell


npm install python-runner -g


```

The only dependencies of this package are:

* [Q library](https://www.npmjs.org/package/q)
* [lodash](https://www.npmjs.org/package/lodash)

## Usage

The execution function will run send every command to the python stdin interpreter returning 
a Q promise. This will be resolved with the stdout of the python binary.

The python binary will be executed with the same environment variables as its parent process.

You can tweak the following options:

* bin - The python binary to be used
* env - Replace the environment variables for this python execution. Useful for PYTHONPATH, ... 

```js


var python = requrie("python-runner");

python.exec(
	"print('Carma Carpooling - Get there together')",
	{
		/// set which version of python to use
		bin: "python",
		env: {

			/// set the PYTHONPATH of the current execution
			PYTHONPATH: "...."

		}
	})
	/// get the stdout
	.then(function(stdout){

	})
	/// catch the error
	.then(function(err){

	});


```

## Authors

* [Oscar Brito](https://twitter.com/aetheon)
* [Carma](https://twitter.com/TeamCarma)
