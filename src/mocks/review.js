import {getRandomInteger, listOfTexts, getRandomItemFromList, listOfPeople} from "./temp";

class Reviews {
  constructor(filmID) {
    this.filmID = filmID;
    this.quote = getRandomItemFromList(listOfTexts);
    this.author = getRandomItemFromList(listOfPeople);
    this.datetime = `1h 39m`; // TODO [date]
    this.rating = getRandomInteger(0, 10);
  }
}

// Возвращает массивы инстансов Reviews
export const generateReviews = (films, count) => {
  const collectionID = [];
  films.map((film) => collectionID.push(film.id));

  const instances = [];

  for (let i = 0; i < count; i++) {
    instances.push(new Reviews(getRandomItemFromList(collectionID)));
  }

  return instances;
};
