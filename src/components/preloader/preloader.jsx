import React from "react";

const preloadingMessage = {
  textAlign: `center`,
  fontSize: `28px`,
  color: `#dfcf77`,
  lineHeight: `26px`,
};

const Preloader = () => {
  return (
    <div className="preloading__message" style={preloadingMessage}>
      <p>The list is empty. Please select your favorite movies...</p>
    </div>
  );
};

export default Preloader;
