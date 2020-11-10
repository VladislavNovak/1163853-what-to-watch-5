import React from "react";
import PropTypes from "prop-types";
import Film from "../film/film";

import {filmPropStructure} from "../../utils/validator.prop";

const FilmsList = ({
  films,
  currentActiveFilm,
  onMouseOverFilmHandler,
  onMouseLeaveFilmHandler,
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
          onMouseOverFilmHandler={onMouseOverFilmHandler}
          onMouseLeaveFilmHandler={onMouseLeaveFilmHandler}
        />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  currentActiveFilm: PropTypes.number.isRequired,
  onMouseOverFilmHandler: PropTypes.func.isRequired,
  onMouseLeaveFilmHandler: PropTypes.func.isRequired,
};

export default FilmsList;

