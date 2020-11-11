export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  FILTER_FILMS_LIST_BY_GENRE: `FILTER_FILMS_LIST_BY_GENRE`,
  CHANGE_FILMS_COUNT: `CHANGE_FILMS_COUNT`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_USER_DATA: `GET_USER_DATA`,
  SET_FILMS: `SET_FILMS`,
  SET_MY_FAVORITE_FILMS: `SET_MY_FAVORITE_FILMS`,
  SET_PROMO: `SET_PROMO`,
  SET_GENRES: `SET_GENRES`,
  SET_REVIEWS: `SET_REVIEWS`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),

  addNewVisibleFilms: (filmsCountPerClick) => ({
    type: ActionType.CHANGE_FILMS_COUNT,
    payload: filmsCountPerClick,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  setUserData: (data) => ({
    type: ActionType.SET_USER_DATA,
    payload: data,
  }),

  setFilms: (films) => ({
    type: ActionType.SET_FILMS,
    payload: films,
  }),

  setPromo: (promo) => ({
    type: ActionType.SET_PROMO,
    payload: promo,
  }),

  setMyFavoriteFilms: (films) => ({
    type: ActionType.SET_MY_FAVORITE_FILMS,
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

  setActiveFilm: (activeFilm) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: activeFilm,
  }),
};
