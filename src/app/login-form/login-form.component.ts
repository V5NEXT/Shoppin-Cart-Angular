import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})



export class LoginFormComponent{

  firstname : string ='admin';
  password : any;
  constructor(private route: Router) { }


  log( password: any){
  

    if(this.firstname=='admin' && password.value=="admin"){
      this.route.navigate(['/dashboard'])
    }
    else{
      alert('Hint : username : admin , password : admin');
    }
   }

}
