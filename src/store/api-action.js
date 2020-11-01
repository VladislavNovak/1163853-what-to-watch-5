import {ActionCreator} from './action';
import {AuthorizationStatus, getUniqueGenres} from '../utils/utils';
import {adaptFilmsToClient} from '../services/adapter';

export const fetchFilms = () => (dispatch, _getState, api) =>
  api.get(`/films`).then(({data}) => {
    const adaptedFilms = adaptFilmsToClient(data);

    dispatch(ActionCreator.getFilms(adaptedFilms));
    dispatch(ActionCreator.filterFilmsListByGenre(adaptedFilms));
    const genres = getUniqueGenres(adaptedFilms);
    dispatch(ActionCreator.setGenres(genres));
  });

export const fetchReviews = (id) => (dispatch, _getState, api) =>
  api.get(`/comments/${id}`).then(({data}) => {
    console.log(data)
    dispatch(ActionCreator.getReviews(data));
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
