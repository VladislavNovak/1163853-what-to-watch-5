import React from "react";
import PropTypes from "prop-types";

const GenreScreen = ({type}) => {

  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href="#" className="catalog__genres-link">
        {type}
      </a>
    </li>
  );
};

GenreScreen.propTypes = {
  type: PropTypes.string.isRequired,
};

export default GenreScreen;
