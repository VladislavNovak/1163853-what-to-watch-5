export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  FILTER_FILMS_LIST_BY_GENRE: `FILTER_FILMS_LIST_BY_GENRE`,
  CHANGE_FILMS_COUNT: `CHANGE_FILMS_COUNT`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_DATA_FILMS: `LOAD_DATA_FILMS`,
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

  addNewVisibleFilms: (filmsCountPerClick) => ({
    type: ActionType.CHANGE_FILMS_COUNT,
    payload: filmsCountPerClick
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  loadDataFilms: (films) => ({
    type: ActionType.LOAD_DATA_FILMS,
    payload: films,
  })
};
