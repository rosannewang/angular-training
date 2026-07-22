import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // calculate = output(); // legacy event system
  @Output() calculate = new EventEmitter<InvestmentInput>();
  
  enteredInitialInvestment = '0'; // setting to string to match input type , which is always a string
  enteredAnnualInvestment = '0'; 
  enteredExpectedReturn = '5'; // default 5% return rate 
  enteredDuration = '10'; // default 10 years

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment, // convert string to number with a +
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    });
  }
  
  
}
