import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";
import {ALL_GENRE} from "../../../utils/constants";

const initialState = {
  activeGenre: ALL_GENRE,
  genres: [],
  films: [],
  activeFilm: null,
  reviews: [],
  promo: null,
  myFavoriteFilms: [],
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.SET_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.SET_PROMO:
      return extend(state, {
        promo: action.payload,
      });

    case ActionType.SET_GENRES:
      return extend(state, {
        genres: action.payload,
      });

    case ActionType.SET_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });

    case ActionType.CREATE_COMMENT:
      return extend(state, {
        comment: action.payload,
      });


    case ActionType.SET_MY_FAVORITE_FILMS:
      return extend(state, {
        myFavoriteFilms: action.payload,
      });

    case ActionType.UPDATE_FILM:
      const updatedFilm = action.payload;

      let favoriteFilms = state.myFavoriteFilms.slice();

      if (updatedFilm.inMyFavoriteList) {
        favoriteFilms.push(favoriteFilms);
      } else {
        favoriteFilms = favoriteFilms.filter((film) => film.id === updatedFilm.id);
      }

      let films = state.films.slice();

      const filmIndex = films.findIndex((film) => film.id === updatedFilm.id);

      const updatedFilms = [
        ...films.slice(0, filmIndex),
        updatedFilm,
        ...films.slice(filmIndex + 1)
      ];

      const extendedState = {
        activeFilm: updatedFilm,
        myFavoriteFilms: favoriteFilms,
        films: updatedFilms,
      };

      if (state.promo.id === updatedFilm.id) {
        extendedState.promo = updatedFilm;
      }

      return extend(state, extendedState);
  }

  return state;
};

export {appState};
