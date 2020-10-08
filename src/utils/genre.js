import {shuffle} from "./utils";

// нужен для генерации разметки и, временная функция, для генерации моков
export default class Genre {
  constructor() {
    this.listOfGenres = {
      ALL_GENRES: `All_genres`,
      COMEDIES: `Comedies`,
      CRIME: `Crime`,
      DOCUMENTARY: `Documentary`,
      DRAMAS: `Dramas`,
      HORROR: `Horror`,
      Kids: `Kids & Family`,
      ROMANCE: `Romance`,
      SCI: `Sci-Fi`,
      THRILLER: `Thriller`,
    }
  }

  // получаем все значения [array], кроме `All_genres`
  getValuesWithoutAll() {
    return Object.values(this.listOfGenres).filter((genre) => genre !== this.listOfGenres.ALL_GENRES);
  }

  // получаем одно случайное значение [string], кроме `All_genres`
  getRandomValue() {
    const arrWithoutAll = this.getValuesWithoutAll();
    return shuffle(arrWithoutAll)[0];
  }
}

