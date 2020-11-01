import {NameSpace} from "../../../utils/utils";

const selectsVisibleFilmsCount = (state) => state[NameSpace.APP_STATE].visibleFilmsCount;

const selectsActiveGenre = (state) => state[NameSpace.APP_STATE].activeGenre;

const selectsGenres = (state) => state[NameSpace.APP_STATE].genres;

const selectsFilteredFilms = (state) => state[NameSpace.APP_STATE].filteredFilms;

const selectsFilms = (state) => state[NameSpace.APP_STATE].films;

const selectsReviews = (state) => state[NameSpace.APP_STATE].reviews;

const selectsPromo = (state) => state[NameSpace.APP_STATE].promo;


export {selectsVisibleFilmsCount, selectsActiveGenre, selectsGenres, selectsFilteredFilms, selectsFilms, selectsReviews, selectsPromo};
