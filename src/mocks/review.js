import moment from "../../node_modules/moment/moment.js";
import {getRandomInteger, listOfTexts, getRandomItemFromList, listOfPeople, randomDate} from "./temp";

class Reviews {
  constructor(filmID) {
    this.filmID = filmID;
    this.quote = getRandomItemFromList(listOfTexts);
    this.author = getRandomItemFromList(listOfPeople);
    this.datetime = moment(randomDate(`02-13-2013`, `01-01-2021`)).format('YYYY-M-D');
    this.rating = getRandomInteger(0, 10);
  }
}

// Возвращает массив инстансов Reviews в количестве count, с присвоенными в произвольном порядке film.id
export const generateReviews = (films, count) => {
  const collectionID = [];
  films.map((film) => collectionID.push(film.id));

  const reviews = [];

  for (let i = 0; i < count; i++) {
    reviews.push(new Reviews(getRandomItemFromList(collectionID)));
  }

  return reviews;
};
