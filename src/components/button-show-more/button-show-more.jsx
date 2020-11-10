import React from "react";
import PropTypes from "prop-types";

import {FILMS_COUNT_PER_CLICK} from "../../utils/constants";

const ButtonShowMore = ({onMoreButtonClickHandler}) => {

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onMoreButtonClickHandler(FILMS_COUNT_PER_CLICK)}
      >
        Show more
      </button>
    </div>
  );
};

ButtonShowMore.propTypes = {
  onMoreButtonClickHandler: PropTypes.func.isRequired,
};

export default ButtonShowMore;

