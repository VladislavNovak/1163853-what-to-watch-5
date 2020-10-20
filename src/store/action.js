import {FILMS_COUNT_PER_CLICK} from "../utils/utils";

export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  FILTER_FILMS_LIST_BY_GENRE: `FILTER_FILMS_LIST_BY_GENRE`,
  CHANGE_FILMS_COUNT: `CHANGE_FILMS_COUNT`
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre
  }),

  filterFilmsListByGenre: (genre) => ({
    type: ActionType.FILTER_FILMS_LIST_BY_GENRE,
    payload: genre
  }),

  addNewVisibleFilms: () => ({
    type: ActionType.CHANGE_FILMS_COUNT,
    payload: FILMS_COUNT_PER_CLICK
  }),
};
