import {ActionType} from "../../action";
import {FILMS_COUNT_PER_CLICK, extend, getFilteredFilmsByGenre} from "../../../utils/utils";
import {genre} from "../../../utils/genre";
// import {mockFilms} from "../../../mocks/film";
// import {непонятно что, т.к. невозможно извлечь данные просто из адаптера}

const initialState = {
  activeGenre: genre.getItemAllGenres(),
  genres: genre.getList(),
  films: [],
  // filteredFilms: getFilteredFilmsByGenre(films, genre.getItemAllGenres()),
  filteredFilms: [],
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
        filteredFilms: action.payload,
      });

    case ActionType.CHANGE_FILMS_COUNT:
      return extend(state, {
        visibleFilmsCount: state.visibleFilmsCount + action.payload,
      });

    case ActionType.LOAD_DATA_FILMS:
      return extend(state, {
        films: action.payload,
      });
  }

  return state;
};

export {appState};
