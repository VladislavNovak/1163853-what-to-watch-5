import {NameSpace} from "../../../utils/utils";

const getVisibleFilmsCount = (state) => state[NameSpace.APP_STATE].visibleFilmsCount;

const getActiveGenre = (state) => state[NameSpace.APP_STATE].activeGenre;

const getGenres = (state) => state[NameSpace.APP_STATE].genres;

const getFilteredFilms = (state) => state[NameSpace.APP_STATE].filteredFilms;

const loadDataFilms = (state) => state[NameSpace.APP_STATE].films;

export {getVisibleFilmsCount, getActiveGenre, getGenres, getFilteredFilms, loadDataFilms};
