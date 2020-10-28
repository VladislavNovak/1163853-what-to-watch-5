import {ActionType} from "../../action";
import {FILMS_COUNT_PER_CLICK, extend, getFilteredFilmsByGenre} from "../../../utils/utils";
import {genre} from "../../../utils/genre";
import {mockFilms} from "../../../mocks/film";

const initialState = {
  activeGenre: genre.getItemAllGenres(),
  genres: genre.getList(),
  filteredFilms: getFilteredFilmsByGenre(mockFilms, genre.getItemAllGenres()),
  visibleFilmsCount: FILMS_COUNT_PER_CLICK,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.FILTER_FILMS_LIST_BY_GENRE:
      return extend(state, {
        filteredFilms: getFilteredFilmsByGenre(mockFilms, action.payload),
      });

    case ActionType.CHANGE_FILMS_COUNT:
      return extend(state, {
        visibleFilmsCount: state.visibleFilmsCount + action.payload,
      });
  }

  return state;
};

export {appState};
