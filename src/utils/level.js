// нужен для генерации разметки и, временная функция, для генерации моков
export default class Level {
  constructor() {
    this.LevelsType = {
      BAD: `Bad`,
      NORMAL: `Normal`,
      GOOD: `Good`,
      VERY_GOOD: `Very good`,
      AWESOME: `Awesome`,
    };
  }

  // возвращает строку из в зависимости от переданного диапазона
  getLevel(score) {
    let level;
    if (score < 3) {
      level = this.LevelsType.BAD;
    } else if (score < 5) {
      level = this.LevelsType.NORMAL;
    } else if (score < 8) {
      level = this.LevelsType.GOOD;
    } else if (score < 10) {
      level = this.LevelsType.VERY_GOOD;
    } else if (score === 10) {
      level = this.LevelsType.AWESOME;
    }

    return level;
  }
}
