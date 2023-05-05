import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './button';

const Calculator = () => {
  const initialState = {
    total: null,
    next: null,
    operation: null,
  };
  const [calculatorState, setCalculatorState] = useState(initialState);

  const handleClick = (buttonName) => {
    setCalculatorState((prevState) => calculate(prevState, buttonName));
  };

  const displayValue = () => {
    const { total, next, operation } = calculatorState;
    if (operation && !next) {
      return `${total || ''} ${operation}`;
    }
    if (next && operation) {
      return `${total || ''} ${operation} ${next}`;
    }
    return next || total || '0';
  };

  return (
    <div className="calculator">
      <input className="display" type="text" readOnly value={displayValue()} />
      <div className="buttons">
        <div className="row">
          <Button value="AC" onClick={handleClick} />
          <Button value="+/-" onClick={handleClick} />
          <Button value="%" onClick={handleClick} />
          <Button value="÷" operation onClick={handleClick} />
        </div>
        <div className="row">
          <Button value="7" onClick={handleClick} />
          <Button value="8" onClick={handleClick} />
          <Button value="9" onClick={handleClick} />
          <Button value="x" operation onClick={handleClick} />
        </div>
        <div className="row">
          <Button value="4" onClick={handleClick} />
          <Button value="5" onClick={handleClick} />
          <Button value="6" onClick={handleClick} />
          <Button value="-" operation onClick={handleClick} />
        </div>
        <div className="row">
          <Button value="1" onClick={handleClick} />
          <Button value="2" onClick={handleClick} />
          <Button value="3" onClick={handleClick} />
          <Button value="+" operation onClick={handleClick} />
        </div>
        <div className="row">
          <Button value="0" onClick={handleClick} />
          <Button value="." onClick={handleClick} />
          <Button value="=" operation onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
