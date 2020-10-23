import {
  LIST_OF_TITLES,
  LIST_OF_PEOPLES,
  LIST_OF_GENRES,
  generateId,
  getRandomInteger,
  getRandomItemFromList,
  getImage,
} from './temp';
import {shuffle} from '../utils/utils';
import Level from '../utils/level';

class Film {
  constructor() {
    this.id = generateId();
    this.title = getRandomItemFromList(LIST_OF_TITLES);
    this.genre = getRandomItemFromList(LIST_OF_GENRES);
    this.released = getRandomInteger(1990, 2020);
    this.score = getRandomInteger(1, 10);
    this.level = new Level().getLevel(this.score);
    this.rating = `${getRandomInteger(1, 500)} ratings`;
    this.description = `Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem....`;
    this.director = getRandomItemFromList(LIST_OF_PEOPLES);
    this.starring = shuffle(LIST_OF_PEOPLES).slice(0, [getRandomInteger(5, 15)]);
    this.poster = getImage(this.title);
    this.posterBig = getImage(this.title);
    this.trailer = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
    this.runtime = `1h 39m`; // TODO [date]
    this.inMyFavoriteList = !getRandomInteger(0, 5);
  }
}

// Возвращает инстансы класса ClassObject в количестве указанном в count
const generateFilms = (count) => {
  const films = [];
  for (let i = 0; i < count; i++) {
    films.push(new Film());
  }

  return films;
};

const mockFilms = generateFilms(50);

export {mockFilms};
