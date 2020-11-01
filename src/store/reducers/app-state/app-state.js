import {ActionType} from "../../action";
import {FILMS_COUNT_PER_CLICK, extend} from "../../../utils/utils";
import {genre} from "../../../utils/genre";

const initialState = {
  activeGenre: genre.getItemAllGenres(),
  genres: [],
  films: [],
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

    case ActionType.SET_GENRES:
      return extend(state, {
        genres: action.payload,
      });
  }

  return state;
};

export {appState};
