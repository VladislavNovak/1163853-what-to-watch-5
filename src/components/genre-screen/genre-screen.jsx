import React from "react";
import PropTypes from "prop-types";

const GenreScreen = ({genreValueItem}) => {

  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href="#" className="catalog__genres-link">
        {genreValueItem}
      </a>
    </li>
  );
};

GenreScreen.propTypes = {
  genreValueItem: PropTypes.string.isRequired,
};

export default GenreScreen;
