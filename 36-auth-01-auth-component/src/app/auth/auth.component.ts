import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{

  isLoginMode = true;

  onSwithcMode(){
    this.isLoginMode = !this.isLoginMode;
  }

}
