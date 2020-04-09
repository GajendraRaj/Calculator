import React from "react";
import PropTypes from "prop-types";
import Key from "./key";
import "./index.css";

const Keypad = (props) => {
  const numberKeys = props.numbers.map((number) => (
    <p key={number}>{number}</p>
  ));
  const operatorKeys = props.operators.map((operator) => (
    <p key={operator}>{operator}</p>
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <Key keyAction={props.callOperator} keyType="" keyValue="" />
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
