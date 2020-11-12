import React from "react";
import {ClassName} from "../../utils/constants";

const preloadingMessage = {
  textAlign: `center`,
  fontSize: `28px`,
  color: `#dfcf77`,
  lineHeight: `26px`,
};

const Preloader = () => {
  return (
    <div className={ClassName.PRELOADER} style={preloadingMessage}>
      <p>The list is empty. Please select your favorite movies...</p>
    </div>
  );
};

export default Preloader;
