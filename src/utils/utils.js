export const isFavoriteType = {
  CHECKED: true,
  UNCHECKED: false,
};

// Возвращает инстансы класса ClassObject в количестве указанном в count
export const generateInstances = (ClassObject, count) => {
  const instances = [];
  for (let i = 0; i < count; i++) {
    instances.push(new ClassObject());
  }

  return instances;
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

// Фильтрует список фильмов (props.films) по соответствию true/false (isFavoriteType) и возвращает массив объектов
export const filterFavoriteFilms = (films, type) => {
  const filtredFilms = (type) ? films.filter((item) => item.inMyFavoriteList) : films.filter((item) => !item.inMyFavoriteList);
  return filtredFilms;
};
