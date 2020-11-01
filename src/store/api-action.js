import {ActionCreator} from './action';
import {AuthorizationStatus, getUniqueGenres} from '../utils/utils';
import {adaptFilmsToClient} from '../services/adapter';

export const fetchFilms = () => (dispatch, _getState, api) =>
  api.get(`/films`).then((response) => {
    const adaptedFilms = adaptFilmsToClient(response.data);

    // dispatch(ActionCreator.loadDataFilms(adaptedFilms));
    dispatch(ActionCreator.getFilms(adaptedFilms));
    dispatch(ActionCreator.filterFilmsListByGenre(adaptedFilms));
    const genres = getUniqueGenres(adaptedFilms);
    dispatch(ActionCreator.setGenres(genres));
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
