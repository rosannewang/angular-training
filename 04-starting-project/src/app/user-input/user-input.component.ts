import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = '0'; // setting to string to match input type, which is always a string
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5'; // default 5% return rate 
  enteredDuration = '10'; // default 10 years

  onSubmit() {
    console.log('Form submitted');
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
  }
  
  
}
