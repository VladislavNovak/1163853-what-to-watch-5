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
export const getMatchingFilm = (films, match) => {
  const id = match.params.id;
  const film = films.find((item) => item.id === parseInt(id, 10));
  return film;
};

export const getMatchingReview = (reviews, match) => {
  const id = match.params.id;
  const matchReviews = reviews.filter((review) => review.filmID === parseInt(id, 10));
  return matchReviews;
};

// Фильтрует список фильмов (props.films) по соответствию true/false (isFavoriteType) и возвращает массив объектов
export const filterFavoriteFilms = (films, type) => {
  const filtredFilms = (type) ? films.filter((item) => item.inMyFavoriteList) : films.filter((item) => !item.inMyFavoriteList);
  return filtredFilms;
};
