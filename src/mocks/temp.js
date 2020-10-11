export const listOfTitles = [
  `Bad Boys for Life`, `Badland`, `Dark Forces`, `Double World`,
  `Enola Holmes`, `Grand Isle`, `Legacy of Lies`, `Pinocchio`,
  `Project Power`, `Rogue`, `Sponge on the Run`, `The Binge`,
  `The Hunt`, `The Innocence`, `The Last Days of American Crime`,
  `The New Mutants`, `The Owners`, `The Paramedic`, `Toxic`, `Venom`,
  `The Tax Collector`, `Playdate with Destiny`, `The Old Guard`, `Guest House`,
  `A Quiet Place Part II`, `Dark Phoenix`, `Extraction`, `The Outpost`, `Monos`,
  `The Angry Birds Movie 2`, `The Addams Family`, `The Pale Door`, `Ava`];

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

// возвращает первый элемент переданного массива
export const getRandomItemFromList = (mocks) => shuffle(mocks)[0];

export const getImage = (title) => {
  return `img/${title}.jpg`;
};

// получаем уникальный номер объекта
export const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);
