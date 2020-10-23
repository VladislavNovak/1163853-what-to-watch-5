import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import Film from "../film/film";
import ButtonShowMore from "../button-show-more/button-show-more";

import {filmPropStructure} from "../../utils/validator.prop";

const FilmsList = ({
  films,
  currentActiveFilm,
  handleMouseOverFilm,
  handleMouseLeaveFilm,
  visibleFilmsCount,
  handleMoreButtonClick,
}) => {

  const visibleFilms = films.slice(0, visibleFilmsCount);

  return (
    <React.Fragment>
      <div className={`catalog__movies-list`}>
        {visibleFilms.map((film) => (
          <Film
            key={film.id}
            isActiveFilm={currentActiveFilm === film.id}
            id={film.id}
            poster={film.poster}
            title={film.title}
            trailer={film.trailer}
            handleMouseOverFilm={handleMouseOverFilm}
            handleMouseLeaveFilm={handleMouseLeaveFilm}
          />
        ))}
      </div>

      {films.length > visibleFilmsCount ? (
        <ButtonShowMore handleMoreButtonClick={handleMoreButtonClick} />
      ) : (
        ``
      )}
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
  currentActiveFilm: PropTypes.number.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired,
  handleMouseLeaveFilm: PropTypes.func.isRequired,
  handleMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({visibleFilmsCount}) => ({visibleFilmsCount});

const mapDispatchToProps = (dispatch) => ({
  handleMoreButtonClick(filmsCountPerClick) {
    dispatch(ActionCreator.addNewVisibleFilms(filmsCountPerClick));
  }
});

export {FilmsList};
export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
