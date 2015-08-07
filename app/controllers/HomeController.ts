/// <reference path="../../app.ts" />

class HomeController extends TF.Controller {

    index() {
        this.view('index', { layout: 'layout' });        
    }

}