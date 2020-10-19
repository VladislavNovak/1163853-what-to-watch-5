import {ActionType} from "./action";
import {extend} from "../utils/utils";
import Genre from "../utils/genre";
import {mockFilms} from "../mocks/film"

const genre = new Genre();

const initialState = {
  activeGenre: genre.listOfGenres.ALL_GENRES,
  filmsListByGenre: genre.getFilteredFilms(mockFilms, activeGenre),
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return extend(state, {
        activeGenre: state.activeGenre,
      });

    case ActionType.FILMS_LIST_BY_GENRE:
      return extend(state, {
        filmsListByGenre: state.filmsListByGenre,
      })
  }

  return state;
};
