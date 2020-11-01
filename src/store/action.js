export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  FILTER_FILMS_LIST_BY_GENRE: `FILTER_FILMS_LIST_BY_GENRE`,
  CHANGE_FILMS_COUNT: `CHANGE_FILMS_COUNT`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_FILMS: `SET_FILMS`,
  SET_GENRES: `SET_GENRES`,
  SET_REVIEWS: `SET_REVIEWS`,
  SET_PROMO: `SET_PROMO`,
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

  setFilms: (films) => ({
    type: ActionType.SET_FILMS,
    payload: films,
  }),

  setGenres: (genres) => ({
    type: ActionType.SET_GENRES,
    payload: genres,
  }),

  setReviews: (reviews) => ({
    type: ActionType.SET_REVIEWS,
    payload: reviews,
  }),

  setPromo: (promo) => ({
    type: ActionType.SET_PROMO,
    payload: promo,
  }),
};
