const listOfGenres = [
  `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thriller`];

const listOfTitles = [
  `Bad Boys for Life`, `Badland`, `Dark Forces`, `Double World`,
  `Enola Holmes`, `Grand Isle`, `Legacy of Lies`, `Pinocchio`,
  `Project Power`, `Rogue`, `Sponge on the Run`, `The Binge`,
  `The Hunt`, `The Innocence`, `The Last Days of American Crime`,
  `The New Mutants`, `The Owners`, `The Paramedic`, `Toxic`, `Venom`];

const LevelsType = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const shuffle = (originArray) => {
  originArray.forEach((item, index, array) => {
    const randomNumber = getRandomInteger(0, index);
    const valueIndex = array[randomNumber];
    array[randomNumber] = array[index];
    array[index] = valueIndex;
  });

  return originArray;
};

// объект должен содержать только массивы
export const Mocks = {
  listOfGenres,
  listOfTitles,
};

// возвращает первый элемент переданного массива
export const getRandomItemFromList = (mocks) => shuffle(mocks)[0];

// возвращает строку из в зависимости от переданного диапазона
export const getLevel = (score) => {
  let level;
  if (score < 3) {
    level = LevelsType.BAD;
  } else if (score < 5) {
    level = LevelsType.NORMAL;
  } else if (score < 8) {
    level = LevelsType.GOOD;
  } else if (score < 10) {
    level = LevelsType.VERY_GOOD;
  } else if (score === 10) {
    level = LevelsType.AWESOME;
  }

  return level;
};

export const getImage = (title) => {
  return `img/${title}.jpg`;
};

// получаем уникальный номер объекта
export const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);
