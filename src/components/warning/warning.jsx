import React from "react";
import PropTypes from "prop-types";

const WarningStyle = {
  textAlign: `center`,
  fontSize: `28px`,
  color: `#8B0000`,
  lineHeight: `26px`,
};

const Warning = ({warningType}) => {
  return (
    <div style={WarningStyle}>
      <p>{warningType}</p>
    </div>
  );
};

Warning.propTypes = {
  warningType: PropTypes.string.isRequired,
};

export default Warning;
