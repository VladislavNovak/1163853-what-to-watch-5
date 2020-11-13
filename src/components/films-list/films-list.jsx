import React from "react";
import PropTypes from "prop-types";
import Film from "../film/film";

import {filmPropStructure} from "../../utils/validator.prop";

const FilmsList = ({
  films,
  currentActiveFilm,
  onMouseOverFilm,
  onMouseLeaveFilm,
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
          onMouseOverFilm={onMouseOverFilm}
          onMouseLeaveFilm={onMouseLeaveFilm}
        />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  currentActiveFilm: PropTypes.number.isRequired,
  onMouseOverFilm: PropTypes.func.isRequired,
  onMouseLeaveFilm: PropTypes.func.isRequired,
};

export default FilmsList;

