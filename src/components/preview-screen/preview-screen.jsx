import React from "react";
import PropTypes from "prop-types";

const PreviewScreen = ({trailer}) => {
  return (
    <video src={trailer} autoPlay muted width="280" height="175">something is wrong</video>
  );
};

PreviewScreen.propTypes = {
  trailer: PropTypes.string.isRequired,
};

export default PreviewScreen;
