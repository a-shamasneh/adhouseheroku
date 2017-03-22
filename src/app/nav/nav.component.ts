import { Component, OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
 isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

  ngOnInit() {
  }
  	auth(){
  	if(!localStorage.getItem("com.addhouse")){
  		return false
  	}else{
  		return true
  	}
  	}
    authAdmin(){
      if(JSON.parse(localStorage.getItem('UserType'))===true){
        return true
       }
       return false
    }
  logout(){
  	localStorage.clear();
  	window.location.href=("")
  }

}
