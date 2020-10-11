import {listOfTitles, generateId, getRandomItemFromList, getImage} from "./temp";
import {getRandomInteger} from "../utils/utils";
import Genre from "../utils/genre";
import Level from "../utils/level";

export default class Film {
  constructor() {
    this.id = generateId();
    this.title = getRandomItemFromList(listOfTitles);
    this.genre = new Genre().getRandomValue();
    this.released = getRandomInteger(1990, 2020);
    this.score = getRandomInteger(1, 10);
    this.level = new Level().getLevel(this.score);
    this.rating = `${getRandomInteger(1, 500)} ratings`;
    this.description = `Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem....`;
    this.director = `Joshua Lucas Maurer... `;
    this.starring = `Kurt Russell, Giacinta Barrett, Richard Dreyfuss, Emmanuelle Rossum...`;
    this.poster = getImage(this.title);
    this.posterBig = getImage(this.title);
    this.trailer = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
    this.runtime = `1h 39m`; // TODO [date]
    this.inMyFavoriteList = !(getRandomInteger(0, 5));
  }
}
