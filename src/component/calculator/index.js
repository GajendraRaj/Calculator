import React, { useState } from "react";
import Display from "./display";
import Keypad from "./keypad";
import "./Calculator.css";

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
      <Keypad
        callOperator={callOperator}
        numbers={state.numbers}
        operators={state.operators}
        setOperator={setOperator}
        updateDisplay={updateDisplay}
      />
    </div>
  );
};

export default Calculator;
