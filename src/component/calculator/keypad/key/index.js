import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Key = (props) => {
  return (
    <div className="key-container">
      <p className="key-value">{props.keyValue}</p>
    </div>
  );
};

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};

export default Key;
