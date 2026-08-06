import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

function equalValues(controlName1: string, controlName2: string) {

  return (control: AbstractControl) => {
  const password = control.get(controlName1)?.value;
  const confirmPassword = control.get(controlName2)?.value;
  
  if (password === confirmPassword) {
    return null;
  }
  
  return { passwordNotEqual: true };
  }
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})

export class SignupComponent {
  form = new FormGroup({ 
    email: new FormControl('', {
      validators: [ Validators.required, Validators.email ],
    }),

    passwords: new FormGroup ({
      password: new FormControl('', {
        validators: [ Validators.required, Validators.minLength(6) ],
      }),
      confirmPassword: new FormControl('', {
        validators: [ Validators.required, Validators.minLength(6) ],
      }),
     }, {
        validators: [equalValues('password', 'confirmPassword')]
    }), 

    Name: new FormControl('', { validators: [ Validators.required ], }),
    lastName: new FormControl('', { validators: [ Validators.required ], }),
    street: new FormControl('', { validators: [ Validators.required ], }),
    number: new FormControl('', { validators: [ Validators.required ], }),
    postalCode: new FormControl('', { validators: [ Validators.required ], }),
    city: new FormControl('', { validators: [ Validators.required ], }),
    role: new FormControl<
      'student' | 'teacher' | 'employee' | 'founder' | 'other'
    >('student', { validators: [ Validators.required ], }), // dropdown
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    agree: new FormControl(false, {validators: [Validators.required]} ),
  
  }); 

  onSubmit(){
    if (this.form.invalid){
      console.log('Invald Form');
      return;
    }
  }

  onReset(){
    this.form.reset();
  }
}
