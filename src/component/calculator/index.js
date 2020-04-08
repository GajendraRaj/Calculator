import React, { useState } from "react";
import "./Calculator.css";
import Display from "./display";

const Calculator = () => {
  const initialState = {
    displayValue: "0",
    numbers: [],
    operators: [],
    selectedOperator: "",
    storedValue: "",
  };
  const [state, setState] = useState(initialState);

  const callOperator = () => {};

  const setOperator = () => {};

  const updateDisplay = () => {};

  return (
    <div className="calculator-container">
      <Display displayValue={state.displayValue} />
    </div>
  );
};

export default Calculator;
