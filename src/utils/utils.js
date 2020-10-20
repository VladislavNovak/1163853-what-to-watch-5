export const ALL_GENRE = `All genres`;
export const FILMS_COUNT_PER_CLICK = 8;

export const isFavoriteType = {
  CHECKED: true,
  UNCHECKED: false,
};

export const TabsType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const shuffle = (originArray) => {
  originArray.forEach((item, index, array) => {
    const randomNumber = getRandomInteger(0, index);
    const valueIndex = array[randomNumber];
    array[randomNumber] = array[index];
    array[index] = valueIndex;
  });

  return originArray;
};

// Находит в списке фильмов (props.films) сответствие в (match.params.id) и возвращает один найденный объект
export const getMatchingFilm = (films, {params}) => films.find((item) => item.id === Number(params.id));

export const getMatchingReview = (reviews, {params}) => reviews.filter((review) => review.filmID === Number(params.id));

// Фильтрует список фильмов (props.films) по соответствию true/false (isFavoriteType) и возвращает массив объектов
export const filterFavoriteFilms = (films, type) => (type) ? films.filter((item) => item.inMyFavoriteList) : films.filter((item) => !item.inMyFavoriteList);

export const extend = (a, b) => Object.assign({}, a, b);

export const getFilteredFilmsByGenre = (films, genre) => (genre === ALL_GENRE) ? films : films.filter((film) => film.genre === genre);
