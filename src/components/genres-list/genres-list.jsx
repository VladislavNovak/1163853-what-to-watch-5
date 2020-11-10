import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {selectsActiveGenre, selectsFilms, selectsGenres} from "../../store/reducers/app-state/selectors";
import {filmPropStructure} from "../../utils/validator.prop";

const GenresList = ({activeGenre, genres, changeActiveGenre}) => {

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li
          key={`genre-${index}`}
          onClick={() => {changeActiveGenre(genre)}}
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
};

const mapStateToProps = (state) => ({
  films: selectsFilms(state),
  activeGenre: selectsActiveGenre(state),
  genres: selectsGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenre(newSelectedGenre) {
    dispatch(ActionCreator.changeActiveGenre(newSelectedGenre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
