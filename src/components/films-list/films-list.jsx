import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectsVisibleFilmsCount} from "../../store/reducers/app-state/selectors";
import Film from "../film/film";

import {filmPropStructure} from "../../utils/validator.prop";

const FilmsList = ({
  films,
  currentActiveFilm,
  handleMouseOverFilm,
  handleMouseLeaveFilm,
  visibleFilmsCount,
}) => {

  const visibleFilms = films.slice(0, visibleFilmsCount);

  return (
    <div className={`catalog__movies-list`}>
      {visibleFilms.map((film) => (
        <Film
          key={film.id}
          isActiveFilm={currentActiveFilm === film.id}
          id={film.id}
          posterBig={film.posterBig}
          title={film.title}
          trailer={film.trailer}
          handleMouseOverFilm={handleMouseOverFilm}
          handleMouseLeaveFilm={handleMouseLeaveFilm}
        />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
  currentActiveFilm: PropTypes.number.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired,
  handleMouseLeaveFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({visibleFilmsCount: selectsVisibleFilmsCount(state)});

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
