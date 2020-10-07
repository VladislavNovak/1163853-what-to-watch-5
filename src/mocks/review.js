import {getRandomInteger} from "./temp";

export default class Reviews {
  constructor() {
    this.quote = `lorem ipsum...`;
    this.author = `Anna Kay Faris`;
    this.datetime = `1h 39m`; // TODO [date]
    this.rating = getRandomInteger(0, 10);
  }
}
