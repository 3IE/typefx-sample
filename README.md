# Welcome to the typefx-sample

This repository demonstrates how to use [TypeFx](https://github.com/3IE/typeframework)

## Prerequisites
If you are on Windows, don't forget install grunt-cli.

## Installation
Clone the repository :
```
$ git clone https://github.com/3IE/typefx-sample.git
$ cd typefx-sample
$ npm install
$ grunt
$ node .build\app.js
```

To test the server browse these urls :
```
http://localhost:3000/home
http://localhost:3000/user/getResponse
```

## Add new controller
To add new contoller, create new file in folder controllers (ex: UserController.js):
```
/// <reference path="../../app.ts" />

class UserController extends TF.Controller{
	
	index(){
		this.json({name:'arnaud', lemettre:''});
	}
}
```

In file app.ts :

Reference this new file 
```
/// <reference path="app/controllers/UserController.ts" />
```

And add the new controller :
```
app.addController(UserController);
```