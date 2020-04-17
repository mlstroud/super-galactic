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

  calculateLifeExpectancy(sex, isSmoker) {
    const baseLifeExpectancy = 81;
    let planetLifeExpectancy = baseLifeExpectancy;

    if(sex === "Male") {
      planetLifeExpectancy -= 5;
    }

    if(isSmoker) {
      planetLifeExpectancy -= 10;
    }

    this.lifeExpectancy["Mercury"] = Math.floor(planetLifeExpectancy / this.yearOnMercury);
    this.lifeExpectancy["Venus"] = Math.floor(planetLifeExpectancy / this.yearOnVenus);
    this.lifeExpectancy["Mars"] = Math.floor(planetLifeExpectancy / this.yearOnMars);
    this.lifeExpectancy["Jupiter"] = Math.floor(planetLifeExpectancy / this.yearOnJupiter);
  }
}