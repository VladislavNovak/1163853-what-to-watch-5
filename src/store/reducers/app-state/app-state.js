import {ActionType} from "../../action";
import {FILMS_COUNT_PER_CLICK, extend} from "../../../utils/utils";
import {ALL_GENRE} from "../../../utils/utils";

const initialState = {
  activeGenre: ALL_GENRE,
  genres: [],
  films: [],
  activeFilm: [],
  reviews: [],
  filteredFilms: [],
  promo: [],
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
  }

  return state;
};

export {appState};
