import {ActionCreator} from './action';
import {AuthorizationStatus, getUniqueGenres} from '../utils/utils';
import {adaptOneFilmToClient, adaptFilmsToClient} from '../services/adapter';

export const fetchFilms = () => (dispatch, _getState, api) =>
  api.get(`/films`).then(({data}) => {
    const adaptedFilms = adaptFilmsToClient(data);

    dispatch(ActionCreator.setFilms(adaptedFilms));
    dispatch(ActionCreator.filterFilmsListByGenre(adaptedFilms));

    const genres = getUniqueGenres(adaptedFilms);
    dispatch(ActionCreator.setGenres(genres));
  });

export const fetchPromo = () => (dispatch, _getState, api) =>
  api.get(`/films/promo`).then(({data}) => {
    const adaptedPromo = adaptOneFilmToClient(data);
    dispatch(ActionCreator.setPromo(adaptedPromo));
  });

export const fetchActiveFilm = (id) => (dispatch, _getState, api) =>
  api.get(`/films/${id}`).then(({data}) => {
    const adaptedActiveFilm = adaptOneFilmToClient(data);

    dispatch(ActionCreator.setActiveFilm(adaptedActiveFilm));
  });

export const fetchReviews = (id) => (dispatch, _getState, api) =>
  api.get(`/comments/${id}`).then(({data}) => {
    dispatch(ActionCreator.setReviews(data));
  });

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(`/login`)
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    )
    .catch((err) => {
      throw err;
    });

export const login = ({login: email, password}) => (
    dispatch,
    _getState,
    api
) =>
  api
    .post(`/login`, {email, password})
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    );
