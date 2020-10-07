import {Mocks, generateId, getRandomInteger, getRandomItemFromList, getLevel, getImage} from "./temp";

export default class Film {
  constructor() {
    this.id = generateId();
    this.title = getRandomItemFromList(Mocks.listOfTitles);
    this.genre = getRandomItemFromList(Mocks.listOfGenres);
    this.released = getRandomInteger(1990, 2020);
    this.score = getRandomInteger(1, 10);
    this.level = getLevel(this.score);
    this.rating = `240 ratings`;
    this.description = `lorem ipsum...`;
    this.director = `Joshua Lucas Easy Dent Maurer`;
    this.starring = `Kurt Russell, Giacinta Barrett, Richard Dreyfuss, Emmanuelle Rossum`;
    this.poster = getImage(this.title);
    this.trailer = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
    this.runtime = `1h 39m`; // TODO [date]
  }
}
