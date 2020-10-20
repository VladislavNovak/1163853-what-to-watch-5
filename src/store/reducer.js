import {ActionType} from "./action";
import {extend, getFilteredFilmsByGenre} from "../utils/utils";
import {genre} from "../utils/genre";
import {mockFilms} from "../mocks/film";

const initialState = {
  activeGenre: genre.getItemAllGenres(),
  genres: genre.getList(),
  filteredFilms: getFilteredFilmsByGenre(mockFilms, genre.getItemAllGenres()),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.FILTER_FILMS_LIST_BY_GENRE:
      return extend(state, {
        filteredFilms: getFilteredFilmsByGenre(mockFilms, action.payload),
      });
  }

  return state;
};

export {reducer};
