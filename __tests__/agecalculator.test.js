import { AgeCalculator } from './../src/agecalculator.js';

describe('Age Calculator', () => {

  let ageCalculator;

  beforeEach(() => {
    ageCalculator = new AgeCalculator(32);
  });

  test('should correctly return user age for a given planet', () => {
    ageCalculator.calculateAges();
    expect(ageCalculator.age["Mercury"]).toEqual(133);
    expect(ageCalculator.age["Venus"]).toEqual(51);
    expect(ageCalculator.age["Mars"]).toEqual(17);
    expect(ageCalculator.age["Jupiter"]).toEqual(2);
  });

  test('should correctly return user life expectancy on given planet', () => {
    ageCalculator.calculateLifeExpectancy("Male", false);

    expect(ageCalculator.lifeExpectancy["Venus"]).toEqual(122);
    expect(ageCalculator.lifeExpectancy["Mars"]).toEqual(40);
    expect(ageCalculator.lifeExpectancy["Earth"]).toEqual(76);

    ageCalculator.calculateLifeExpectancy("Female", true);

    expect(ageCalculator.lifeExpectancy["Mercury"]).toEqual(295);
    expect(ageCalculator.lifeExpectancy["Jupiter"]).toEqual(5);
  });

  test('should correctly return user years to live on a given planet', () => {
    ageCalculator.calculateAges();
    ageCalculator.calculateLifeExpectancy("Male", false);
    ageCalculator.calculateYearsToLive();

    expect(ageCalculator.yearsLeftToLive["Mercury"]).toEqual(183);
    expect(ageCalculator.yearsLeftToLive["Venus"]).toEqual(71);
    expect(ageCalculator.yearsLeftToLive["Earth"]).toEqual(44);
    expect(ageCalculator.yearsLeftToLive["Mars"]).toEqual(23);
    expect(ageCalculator.yearsLeftToLive["Jupiter"]).toEqual(4);
  });

  test('should correctly return how many years user has surpassed their life expectancy on a given planet', () => {
    ageCalculator = new AgeCalculator(100);
    ageCalculator.calculateAges();
    ageCalculator.calculateLifeExpectancy("Male", false);
    ageCalculator.calculateYearsSurpassed();

    expect(ageCalculator.yearsSurpassed["Mercury"]).toEqual(100);
    expect(ageCalculator.yearsSurpassed["Venus"]).toEqual(39);
    expect(ageCalculator.yearsSurpassed["Earth"]).toEqual(24);
    expect(ageCalculator.yearsSurpassed["Mars"]).toEqual(13);
    expect(ageCalculator.yearsSurpassed["Jupiter"]).toEqual(2);
  });
});