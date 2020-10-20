import {mockFilms} from "../mocks/film";

class Genre {
  constructor() {
    this.VISIBLE_AMOUNT_OF_GENRES = 9;
    this.ALL_GENRE = `All genres`;
    this.categories = [this.ALL_GENRE];
  }

  updateList(films) {
    let tempList = films.map((film) => film.genre);
    this.categories = [...this.categories, ...Array.from(new Set(tempList.slice(0, this.VISIBLE_AMOUNT_OF_GENRES)))];
  }

  getList() {
    return this.categories;
  }

  getItemAllGenres() {
    return this.ALL_GENRE;
  }

  getFilteredFilmsByGenre(films, genre) {
    return (genre === this.ALL_GENRE) ? films : films.filter((film) => film.genre === genre);
  }
}

const genre = new Genre();
genre.updateList(mockFilms);

export {genre};
