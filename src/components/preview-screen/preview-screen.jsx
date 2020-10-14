import React from "react";
import PropTypes from "prop-types";

const PreviewScreen = ({trailer, poster}) => {
  return (
    <video
      src={trailer}
      poster={poster}
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
  poster: PropTypes.string.isRequired,
};

export default PreviewScreen;
