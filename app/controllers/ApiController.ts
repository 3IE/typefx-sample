/// <reference path="../../app.ts" />

class ApiController extends TF.Controller{
	
	getResponse(){
		this.json({name:'arnaud', lemettre:''});
	}
}