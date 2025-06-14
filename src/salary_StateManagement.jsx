import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmployeeSalary() {
  const [salary, setSalary] = useState('');
  const [tax, setTax] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  const calculate = () => {
    const numericSalary = parseFloat(salary);

    if (isNaN(numericSalary)) {
      alert("Please enter a valid number for salary.");
      return;
    }

    let calculatedTax = 0;

    if (numericSalary > 50000) {
      calculatedTax = numericSalary * 0.10;
    } else if (numericSalary > 30000) {
      calculatedTax = numericSalary * 0.05;
    }

    const calculatedNetSalary = numericSalary - calculatedTax;

    setTax(calculatedTax);
    setNetSalary(calculatedNetSalary);
  };

  return (
    <div className="container mt-4">
      <h3>Employee Salary Calculation</h3>

      <div className="form-group mt-3">
        <input type="text" className="form-control" placeholder="Employee Name" />
      </div>

      <div className="form-group mt-2">
        <label>Salary</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>

      <div className="form-group mt-2">
        <label>Tax</label>
        <input
          type="text"
          className="form-control"
          value={tax.toFixed(2)}
          readOnly
        />
      </div>

      <div className="form-group mt-2">
        <label>Net Salary</label>
        <input
          type="text"
          className="form-control"
          value={netSalary.toFixed(2)}
          readOnly
        />
      </div>

      <button type="button" className="btn btn-primary mt-3" onClick={calculate}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeSalary;
