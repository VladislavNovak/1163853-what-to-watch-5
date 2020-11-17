import {ActionCreator} from "./action";
import {getUniqueGenres} from "../utils/utils";
import {AuthorizationStatus, SendTo, JumpTo} from "../utils/constants";
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


export const fetchMyFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(SendTo.FAVORITE)
  .then(({data}) => {
    const adaptedFilms = adaptFilmsToClient(data);
    dispatch(ActionCreator.setMyFavoriteFilms(adaptedFilms));
  })
  );

export const sendUpdatedFavoriteStatus = (id, status) => (dispatch, _getState, api)  =>{
  api.post(`${SendTo.FAVORITE}${id}/${status}`)
  .then(({data}) => {
    const adaptedActiveFilm = adaptOneFilmToClient(data);
    dispatch(ActionCreator.updateFilm(adaptedActiveFilm));
  })
}

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(JumpTo.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
      dispatch(ActionCreator.setUserAvatar(data[`avatar_url`]));
    })
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(JumpTo.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserAvatar(data[`avatar_url`]));
      dispatch(ActionCreator.redirectToRoute(JumpTo.ROOT));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${SendTo.COMMENTS}${id}`)
    .then(({data}) => {
      console.log(data);
      dispatch(ActionCreator.setReviews(data));
    })
);

export const sendComment = ({id, rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${SendTo.COMMENTS}${id}`, {rating, comment})
    .then(({data}) => {
      dispatch(ActionCreator.createComment(data));
      dispatch(ActionCreator.redirectToRoute(`${JumpTo.FILMS}${id}`));
    })
);
