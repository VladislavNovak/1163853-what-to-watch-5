import {shuffle} from "./utils";




// нужен для генерации разметки и, временная функция, для генерации моков
export default class GenreList {
  constructor() {
    // this.categories = [
    //   {id: 0, type: `All genres`, genre: `All`},
    //   {id: 1, type: `Comedies`, genre: `Comedy`},
    //   {id: 2, type: `Crime`,genre: `Crime`},
    //   {id: 3, type: `Documentary`, genre: `Documentary`},
    //   {id: 4, type: `Dramas`, genre: `Drama`},
    //   {id: 5, type: `Horrors`, genre: `Horror`},
    //   {id: 6, type: `Kids & Family`, genre: `Kids & Family`},
    //   {id: 7, type: `Romance`, genre: `Romance`},
    //   {id: 8, type: `Sci-Fi`, genre: `Sci-Fi`},
    //   {id: 9, type: `Thrillers`, genre: `Thriller`},
    // ];

    this.categories = [
      {id: 0, type: `All genres`, genre: `All`},
      {id: 1, type: `Comedies`, genre: `Comedy`},
      {id: 2, type: `Crime`,genre: `Crime`},
      {id: 3, type: `Documentary`, genre: `Documentary`},
      {id: 4, type: `Dramas`, genre: `Drama`},
      {id: 5, type: `Horrors`, genre: `Horror`},
      {id: 6, type: `Kids & Family`, genre: `Kids & Family`},
      {id: 7, type: `Romance`, genre: `Romance`},
      {id: 8, type: `Sci-Fi`, genre: `Sci-Fi`},
      {id: 9, type: `Thrillers`, genre: `Thriller`},
    ];
  }

  getFilteredFilms(films, genre) {
    if (genre === this.categories) {
      return films;
    }

    return films.filter((film) => film.genre === genre);
  }
}


// const generateOffers = (activity) => {
//   const offers = new Map([
//     [`Taxi`, [getOffer(7, listOfOffers)]],
//     [`Bus`, [getOffer(10, listOfOffers)]],
//     [`Train`, [getOffer(3, listOfOffers), getOffer(10, listOfOffers)]],
//     [`Ship`, [getOffer(2, listOfOffers), getOffer(10, listOfOffers), getOffer(10, listOfOffers)]],
//     [`Transport`, [getOffer(9, listOfOffers)]],
//     [`Drive`, [getOffer(8, listOfOffers), getOffer(9, listOfOffers)]],
//     [`Flight`, [getOffer(0, listOfOffers), getOffer(1, listOfOffers), getOffer(2, listOfOffers), getOffer(3, listOfOffers)]],
//     [`Check-in`, [getOffer(0, listOfOffers)]],
//     [`Sightseeing`, [getOffer(11, listOfOffers), getOffer(12, listOfOffers)]],
//     [`Restaurant`, [getOffer(6, listOfOffers)]],
//   ]);

//   return offers.get(activity);
// };
