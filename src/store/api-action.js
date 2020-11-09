import {ActionCreator} from "./action";
import {getUniqueGenres} from "../utils/utils";
import {AuthorizationStatus, JumpTo} from "../utils/constants";
import {adaptOneFilmToClient, adaptFilmsToClient} from "../services/adapter";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(JumpTo.FILMS)
    .then(({data}) => {
      const adaptedFilms = adaptFilmsToClient(data);

      dispatch(ActionCreator.setFilms(adaptedFilms));

      const genres = getUniqueGenres(adaptedFilms);
      dispatch(ActionCreator.setGenres(genres));
    })
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(JumpTo.PROMO)
    .then(({data}) => {
      const adaptedPromo = adaptOneFilmToClient(data);
      dispatch(ActionCreator.setPromo(adaptedPromo));
    })
);

export const fetchActiveFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${JumpTo.FILMS}${id}`)
    .then(({data}) => {
      const adaptedActiveFilm = adaptOneFilmToClient(data);

      dispatch(ActionCreator.setActiveFilm(adaptedActiveFilm));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${JumpTo.COMMENTS}${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.setReviews(data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(JumpTo.LOGIN)
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      // throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(JumpTo.LOGIN, {email, password})
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    )
);

