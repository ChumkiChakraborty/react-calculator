import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const validateInputs = () => {
    if (!num1 || !num2) {
      setError('Both fields are required.');
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setError('Both inputs must be valid numbers.');
      return false;
    }
    setError('');
    return true;
  };

  const handleAddition = () => {
    if (!validateInputs()) return;
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    if (!validateInputs()) return;
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    if (!validateInputs()) return;
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    if (!validateInputs()) return;
    if (parseFloat(num2) === 0) {
      setError('Division by zero is not allowed.');
      return;
    }
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
        />
        <input
          type="text"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
        />
      </div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      {error && <div className="error">{error}</div>}
      {result !== null && <div className="result">Result: {result}</div>}
    </div>
  );
}

export default App;
