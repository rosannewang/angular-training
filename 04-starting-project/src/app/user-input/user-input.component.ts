import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // calculate = output(); // legacy event system
  
  enteredInitialInvestment = signal('0'); // setting to string to match input type , which is always a string
  enteredAnnualInvestment = signal('0'); 
  enteredExpectedReturn = signal('5'); // default 5% return rate 
  enteredDuration = signal('10'); // default 10 years

  constructor(private investmentService: InvestmentService) { // making the service available
  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(), // convert string to number with a +
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
  }
  
  
}
