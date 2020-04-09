import React from "react";
import PropTypes from "prop-types";
import Key from "./key";
import "./index.css";

const Keypad = (props) => {
  const numberKeys = props.numbers.map((number) => (
    <Key
      key={number}
      keyAction={props.updateDisplay}
      keyType="number-key"
      keyValue={number}
    />
  ));
  const operatorKeys = props.operators.map((operator) => (
    <Key
      key={operator}
      keyAction={props.setOperator}
      keyType="operator-key"
      keyValue={operator}
    />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <div className="submit-container">
        <Key keyAction={props.callOperator} keyType="submit-key" keyValue="=" />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
};

export default Keypad;
