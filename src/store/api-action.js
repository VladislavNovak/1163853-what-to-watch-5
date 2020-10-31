import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../utils/utils";
import {adaptFilmsToClient} from "../services/adapter";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
  .then((response) => {
      dispatch(ActionCreator.loadDataFilms(adaptFilmsToClient(response.data)))
      dispatch(ActionCreator.loadDataFilms(adaptFilmsToClient(response.data)))
  }
)

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
