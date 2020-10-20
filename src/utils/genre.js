import {mockFilms} from "../mocks/film";

const SHOW_COUNT_OF_RANDOM_GENRES = 9;
const ALL_GENRE = `All genres`;

class Genre {
  constructor() {
    this.categories = [ALL_GENRE];
  }

  updateList(films) {
    let tempList = films.map((film) => film.genre);
    this.categories = [...this.categories, ...Array.from(new Set(tempList.slice(0, SHOW_COUNT_OF_RANDOM_GENRES)))];
  }

  getList() {
    return this.categories;
  }

  getItemAllGenres() {
    return ALL_GENRE;
  }

  getFilteredFilmsByGenre(films, genre) {
    return (genre === this.getItemAllGenres()) ? films : films.filter((film) => film.genre === genre);
  }
}

const genre = new Genre();
genre.updateList(mockFilms);

export {genre};
