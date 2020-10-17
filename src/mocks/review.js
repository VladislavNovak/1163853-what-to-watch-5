import {
  generateId,
  getRandomInteger,
  LIST_OF_TEXTS,
  getRandomItemFromList,
  LIST_OF_PEOPLES,
  randomDate
} from './temp';

class Reviews {
  constructor(filmID) {
    this.id = generateId();
    this.filmID = filmID;
    this.quote = getRandomItemFromList(LIST_OF_TEXTS);
    this.author = getRandomItemFromList(LIST_OF_PEOPLES);
    this.datetime = randomDate(`02-13-2013`, `01-01-2021`);
    this.rating = getRandomInteger(0, 10);
  }
}

// Возвращает массив инстансов Reviews в количестве count, с присвоенными в произвольном порядке film.id
export const generateReviews = (films, count) => {
  const collectionID = films.map(({id}) => id);

  const reviews = [];

  for (let i = 0; i < count; i++) {
    reviews.push(new Reviews(getRandomItemFromList(collectionID)));
  }

  return reviews;
};
