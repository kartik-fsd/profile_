// Build a calculator that computes the monthly mortgage for a loan.
import  { useState } from 'react';
import './Calculator.css';

export default function MortageCalculator() {
  const [loanData, setLoanData] = useState({
    amount: '',
    term: '',
    interest: '',
    monthlyPayment: 0,
  });

  const calculateMonthlyPayment = () => {
    const { amount, term, interest } = loanData;
    const principal = parseFloat(amount);
    const months = parseFloat(term) * 12; // Assuming the term is entered in years

    if (principal > 0 && interest > 0 && months > 0) {
      const monthlyInterest = (parseFloat(interest) / 100) / 12;
      const x = Math.pow(1 + monthlyInterest, months);
      const monthlyPayment =
        (principal * monthlyInterest * x) / (x - 1);

      setLoanData({ ...loanData, monthlyPayment });
    } else {
      setLoanData({ ...loanData, monthlyPayment: 0 });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const { amount, term, interest, monthlyPayment } = loanData;

  return (
    <form>
      <div>
        <label htmlFor="amount">Loan Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="$"
          value={amount}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="term">Loan Term</label>
        <input
          type="number"
          id="term"
          name="term"
          placeholder="number of years"
          value={term}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="interest">Interest</label>
        <input
          type="number"
          id="interest"
          name="interest"
          placeholder="%"
          value={interest}
          onChange={handleChange}
        />
      </div>

      <button type="button" onClick={calculateMonthlyPayment}>
        Calculate
      </button>

      <div>
        <p>{`Monthly Payment: $${monthlyPayment.toFixed(2)}`}</p>
      </div>
    </form>
  );
}
