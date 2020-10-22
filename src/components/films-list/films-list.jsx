import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import withFilmList from "../../hocs/with-film-list/with-film-list";
import FilmScreen from "../film/film";
import ButtonShowMore from "../button-show-more/button-show-more";

import {filmPropStructure} from "../../utils/validator.prop";

const FilmsList = ({
  films,
  visibleFilmsCount,
  visibleFilms,
  activeFilmID,
  handleMouseOverFilm,
  handleMouseLeaveFilm,
  handleMoreButtonClick,
}) => {

  return (
    <React.Fragment>
      <div className={`catalog__movies-list`}>
        {visibleFilms.map((film) => (
          <FilmScreen
            key={film.id}
            isActiveFilm={activeFilmID === film.id}
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
  visibleFilms: PropTypes.arrayOf(filmPropStructure).isRequired,
  activeFilmID: PropTypes.number.isRequired,
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

const FilmsListWrapper = withFilmList(FilmsList);

export {FilmsListWrapper};
export default connect(mapStateToProps, mapDispatchToProps)(FilmsListWrapper);
