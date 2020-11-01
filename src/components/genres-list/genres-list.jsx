import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getActiveGenre, getFilms, getGenres} from "../../store/reducers/app-state/selectors";
import {getFilteredFilmsByGenre} from "../../utils/utils";
import {filmPropStructure} from "../../utils/validator.prop";

const GenresList = ({films, activeGenre, genres, changeActiveGenre, filterFilmsListByGenre}) => {

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li
          key={`genre-${index}`}
          onClick={() => {
            changeActiveGenre(genre);
            filterFilmsListByGenre(films, genre);
          }}
          className={`catalog__genres-item ${
            activeGenre === genre ? `catalog__genres-item--active` : ``
          }`}
        >
          <a className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  changeActiveGenre: PropTypes.func.isRequired,
  filterFilmsListByGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenre(newSelectedGenre) {
    dispatch(ActionCreator.changeActiveGenre(newSelectedGenre));
  },

  filterFilmsListByGenre(films, newSelectedGenre) {
    const newFilms = getFilteredFilmsByGenre(films, newSelectedGenre);
    dispatch(ActionCreator.filterFilmsListByGenre(newFilms));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
