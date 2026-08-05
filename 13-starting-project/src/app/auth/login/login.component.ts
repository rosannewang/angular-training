import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  // 1. Set up the form
  form = new FormGroup({ // register key value pairs where each value is a FormControl
    email: new FormControl('', {
      validators: [ Validators.required, Validators.email ],

    }),
    password: new FormControl('', {
      validators: [ Validators.required, Validators.minLength(6) ]
    })
  }); 

  get emailIsInvalid(){
    return this.form.controls.email.touched 
      && this.form.controls.email.dirty 
      && this.form.controls.email.invalid;
  }
  
  get passwordIsInvalid(){
    return this.form.controls.password.touched 
      && this.form.controls.password.dirty 
      && this.form.controls.password.invalid;
  }

  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(enteredEmail, enteredPassword);
  }
}
