export class AgeCalculator {
  constructor(userAge) {
    this.age                = userAge;
    this.ageOnMercury       = 0;
    this.ageOnVenus         = 0;
    this.ageOnMars          = 0;
    this.ageOnJupiter       = 0;
    this.lifeExpectancy     = {};
    this.yearsLeftToLive    = {};
    this.yearsSurpassed     = {};
    this.yearOnMercury      = .24;
    this.yearOnVenus        = .62;
    this.yearOnMars         = 1.88;
    this.yearOnJupiter      = 11.86;
  }

  calculateMercuryAge() {
    this.ageOnMercury = Math.floor(this.age / this.yearOnMercury);
  }

  calculateVenusAge() {
    this.ageOnVenus = Math.floor(this.age / this.yearOnVenus);
  }

  calculateMarsAge() {
    this.ageOnMars = Math.floor(this.age / this.yearOnMars);
  }

  calculateJupiterAge() {
    this.ageOnJupiter = Math.floor(this.age / this.yearOnJupiter);
  }
}