import React, { useState } from "react";
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

  return <div></div>;
};

export default Calculator;
