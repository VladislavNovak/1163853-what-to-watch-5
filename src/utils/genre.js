import {mockFilms} from "../mocks/film";
import {ALL_GENRE} from "./utils";

class Genre {
  constructor(films) {
    this._VISIBLE_AMOUNT_OF_GENRES = 9;
    this._categories = this.collectGenres(films);
  }

  collectGenres(films) {
    return [ALL_GENRE, ...Array.from(new Set(films.map(({genre}) => genre))).slice(0, this._VISIBLE_AMOUNT_OF_GENRES)];
  }

  getList() {
    return this._categories;
  }

  getItemAllGenres() {
    return ALL_GENRE;
  }
}

const genre = new Genre(mockFilms);

export {genre, Genre};
