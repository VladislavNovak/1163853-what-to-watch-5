
const SHOW_COUNT_OF_RANDOM_GENRES = 9;

export default class Genre {
  constructor () {
    this.categories = [`All genres`];
  }

  updateGList(films) {
    let tempList = films.map((film) => film.genre);
    this.categories = [...this.categories, ...Array.from(new Set(tempList.slice(0, SHOW_COUNT_OF_RANDOM_GENRES)))];
  }

  getList() {
    return this.categories;
  }

  getFilteredFilmsByGenre(films, genre) {
    return (genre === this.categories[0]) ? films : films.filter((film) => film.genre === genre);
  }
}
