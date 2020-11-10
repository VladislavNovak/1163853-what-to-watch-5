import React from "react";
import PropTypes from "prop-types";

const ButtonPlay = ({id, onPlayButtonClickHandler}) => {

  return (
    <button
      className="btn btn--play movie-card__button"
      type="button"
      onClick={() => onPlayButtonClickHandler(id)}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  );
};

ButtonPlay.propTypes = {
  id: PropTypes.number.isRequired,
  onPlayButtonClickHandler: PropTypes.func.isRequired,
};

export default ButtonPlay;
