import React from "react";
import PropTypes from "prop-types";

const PreviewScreen = ({trailer, posterBig}) => {
  return (
    <video
      src={trailer}
      posterbig={posterBig}
      autoPlay
      muted
      width="280"
      height="175"
    >
      Something is wrong
    </video>
  );
};

PreviewScreen.propTypes = {
  trailer: PropTypes.string.isRequired,
  posterBig: PropTypes.string.isRequired,
};

export default PreviewScreen;
