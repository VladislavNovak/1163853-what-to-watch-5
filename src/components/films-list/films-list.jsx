import React from "react";
import PropTypes from "prop-types";
import Film from "../film/film";

import {filmPropStructure} from "../../utils/validator.prop";

const FilmsList = ({
  films,
  currentActiveFilm,
  handleMouseOverFilm,
  handleMouseLeaveFilm,
}) => {

  return (
    <div className={`catalog__movies-list`}>
      {films.map(({id, posterBig, title, trailer}) => (
        <Film
          key={id}
          isActiveFilm={currentActiveFilm === id}
          id={id}
          posterBig={posterBig}
          title={title}
          trailer={trailer}
          handleMouseOverFilm={handleMouseOverFilm}
          handleMouseLeaveFilm={handleMouseLeaveFilm}
        />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  currentActiveFilm: PropTypes.number.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired,
  handleMouseLeaveFilm: PropTypes.func.isRequired,
};

export default FilmsList;

