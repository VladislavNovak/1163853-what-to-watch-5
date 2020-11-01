export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  FILTER_FILMS_LIST_BY_GENRE: `FILTER_FILMS_LIST_BY_GENRE`,
  CHANGE_FILMS_COUNT: `CHANGE_FILMS_COUNT`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_DATA_FILMS: `LOAD_DATA_FILMS`,
  SET_GENRES: `SET_GENRES`,
  GET_REVIEWS: `GET_REVIEWS`,
  GET_PROMO: `GET_PROMO`,
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre
  }),

  filterFilmsListByGenre: (films) => ({
    type: ActionType.FILTER_FILMS_LIST_BY_GENRE,
    payload: films
  }),

  addNewVisibleFilms: (filmsCountPerClick) => ({
    type: ActionType.CHANGE_FILMS_COUNT,
    payload: filmsCountPerClick
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  // loadDataFilms: (films) => ({
  setFilms: (films) => ({
    type: ActionType.LOAD_DATA_FILMS,
    payload: films,
  }),

  setGenres: (genres) => ({
    type: ActionType.SET_GENRES,
    payload: genres,
  }),

  setReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews,
  }),

  setPromo: (promo) => ({
    type: ActionType.GET_PROMO,
    payload: promo,
  }),
};
