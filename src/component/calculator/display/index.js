import React from "react";
import PropType from "prop-types";
import "./index.css";

const Display = (props) => {
  return (
    <div className="display-container">
      <p className="display-value">{props.displayValue}</p>
    </div>
  );
};

Display.propTypes = {
  displayValue: PropType.string.isRequired,
};

export default Display;
