import { Component, output, signal } from '@angular/core';
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
  calculate = output<InvestmentInput>();
  
  enteredInitialInvestment = signal('0'); // setting to string to match input type , which is always a string
  enteredAnnualInvestment = signal('0'); 
  enteredExpectedReturn = signal('5'); // default 5% return rate 
  enteredDuration = signal('10'); // default 10 years

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(), // convert string to number with a +
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });

    // reset the form after the form is submitted 
    // this.enteredInitialInvestment.set('0');
    // this.enteredAnnualInvestment.set('0');
    // this.enteredExpectedReturn.set('5');
    // this.enteredDuration.set('10');
  }
  
  
}
