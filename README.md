
[![Divhide](http://.png)](https://carmacarpool.com/)


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

```
