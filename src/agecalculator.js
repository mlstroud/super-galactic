export class AgeCalculator {
  constructor(userAge) {
    this.age = userAge;
    this.ageOnMercury = 0;
    this.ageOnVenus = 0;
    this.ageOnMars = 0;
    this.ageOnJupiter = 0;
    this.lifeExpectancy = {};
    this.yearsLeftToLive = {};
    this.yearsSurpassed = {};
  }
}