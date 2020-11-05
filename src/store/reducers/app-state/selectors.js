import {ALL_GENRE, NameSpace} from "../../../utils/constants";
import {createSelector} from "reselect";

const selectsActiveGenre = (state) => state[NameSpace.APP_STATE].activeGenre;

const selectsGenres = (state) => state[NameSpace.APP_STATE].genres;

const selectsFilms = (state) => state[NameSpace.APP_STATE].films;

const selectsReviews = (state) => state[NameSpace.APP_STATE].reviews;

const selectsPromo = (state) => state[NameSpace.APP_STATE].promo;

const selectsActiveFilm = (state) => state[NameSpace.APP_STATE].activeFilm;

const selectsFilteredFilms = createSelector(
    selectsFilms,
    selectsActiveGenre,
    (films, genre) => (genre === ALL_GENRE) ? films : films.filter((film) => film.genre === genre)
);

export {
  selectsActiveGenre,
  selectsGenres,
  selectsFilteredFilms,
  selectsFilms,
  selectsReviews,
  selectsPromo,
  selectsActiveFilm
};
