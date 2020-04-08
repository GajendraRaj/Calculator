import React from "react";
import PropType from "prop-types";

const Display = (props) => {
  return <div className="display-container"></div>;
};

Display.propTypes = {
  displayValue: PropType.string.isRequired,
};

export default Display;
