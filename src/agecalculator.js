export class AgeCalculator {
  constructor(userAge) {
    this.age                          = {};
    this.age["Earth"]                 = userAge;
    this.lifeExpectancy               = {};
    this.yearsLeftToLive              = {};
    this.yearsSurpassed               = {};
    this.yearDuration                 = {};
    this.yearDuration["Mercury"]      = .24;
    this.yearDuration["Venus"]        = .62;
    this.yearDuration["Mars"]         = 1.88;
    this.yearDuration["Jupiter"]      = 11.86;
  }

  calculateAges() {
    this.age["Mercury"] = Math.floor(this.age["Earth"] / this.yearDuration["Mercury"]);
    this.age["Venus"] = Math.floor(this.age["Earth"] / this.yearDuration["Venus"]);
    this.age["Mars"] = Math.floor(this.age["Earth"] / this.yearDuration["Mars"]);
    this.age["Jupiter"] = Math.floor(this.age["Earth"] / this.yearDuration["Jupiter"]);
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

    this.lifeExpectancy["Mercury"]  = Math.floor(planetLifeExpectancy / this.yearDuration["Mercury"]);
    this.lifeExpectancy["Venus"]    = Math.floor(planetLifeExpectancy / this.yearDuration["Venus"]);
    this.lifeExpectancy["Earth"]    = planetLifeExpectancy;
    this.lifeExpectancy["Mars"]     = Math.floor(planetLifeExpectancy / this.yearDuration["Mars"]);
    this.lifeExpectancy["Jupiter"]  = Math.floor(planetLifeExpectancy / this.yearDuration["Jupiter"]);
  }

  calculateYearsToLive() {
    for(let key in this.lifeExpectancy) {
      let years = this.lifeExpectancy[key] - this.age[key];
      
      if(years < 0) {
        this.yearsLeftToLive[key] = 0;
      } else {
        this.yearsLeftToLive[key] = years;
      }
    }
  }

  calculateYearsSurpassed() {
    for(let key in this.lifeExpectancy) {
      let years = this.age[key] - this.lifeExpectancy[key];

      if(years < 0) {
        this.yearsSurpassed[key] = 0;
      } else {
        this.yearsSurpassed[key] = years;
      }
    }
  }
}