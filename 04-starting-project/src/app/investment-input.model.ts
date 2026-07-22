export interface InvestmentInput {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}

// alternative way to define the same interface
// type InvestmentInput = {
//   initialInvestment: number;
//   duration: number;
//   expectedReturn: number;
//   annualInvestment: number;
// }