import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getActiveGenre, getGenres} from "../../store/reducers/appState/selectors";

const GenresList = ({activeGenre, genres, changeActiveGenre, filterFilmsListByGenre}) => {

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li
          key={`genre-${index}`}
          onClick={() => {
            changeActiveGenre(genre);
            filterFilmsListByGenre(genre);
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
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  changeActiveGenre: PropTypes.func.isRequired,
  filterFilmsListByGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenre(newSelectedGenre) {
    dispatch(ActionCreator.changeActiveGenre(newSelectedGenre));
  },

  filterFilmsListByGenre(newSelectedGenre) {
    dispatch(ActionCreator.filterFilmsListByGenre(newSelectedGenre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
