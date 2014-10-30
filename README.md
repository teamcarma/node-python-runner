
[![Carma](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/banner.png)](https://carmacarpool.com/)
[![Carma IOS](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/ios.png)](https://carmacarpool.com/ios)
[![Carma Android](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/android.png)](https://carmacarpool.com/android)


# Node Python Runner

A library that allows you to execute python code 

## Install

```shell


npm install python-runner -g


```

## Usage

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
