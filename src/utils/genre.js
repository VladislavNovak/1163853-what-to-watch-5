import {mockFilms} from "../mocks/film";

const SHOW_COUNT_OF_RANDOM_GENRES = 9;

class Genre {
  constructor() {
    this.categories = [`All genres`];
  }

  updateList(films) {
    let tempList = films.map((film) => film.genre);
    this.categories = [...this.categories, ...Array.from(new Set(tempList.slice(0, SHOW_COUNT_OF_RANDOM_GENRES)))];
  }

  getList() {
    return this.categories;
  }

  getItemAllGenres() {
    return this.categories[0];
  }

  getFilteredFilmsByGenre(films, genre) {
    return (genre === this.categories[0]) ? films : films.filter((film) => film.genre === genre);
  }
}

const genre = new Genre();
genre.updateList(mockFilms);

export {genre};
