import { AgeCalculator } from './../src/agecalculator.js';

describe('Age Calculator', () => {

  let ageCalculator;

  beforeEach(() => {
    ageCalculator = new AgeCalculator(32);
  });

  test('should correctly create an AgeCalculator object and assign user age', () => {
    expect(ageCalculator.age["Earth"]).toEqual(32);
  });

  test('should correctly return user age in Mercury years', () => {
    ageCalculator.calculateMercuryAge();
    expect(ageCalculator.age["Mercury"]).toEqual(133);
  });

  test('should correctly return user age in Venus years', () => {
    ageCalculator.calculateVenusAge();
    expect(ageCalculator.age["Venus"]).toEqual(51);
  });

  test('should correctly return user age in Mars years', () => {
    ageCalculator.calculateMarsAge();
    expect(ageCalculator.age["Mars"]).toEqual(17);
  });

  test('should correctly return user age in Jupiter years', () => {
    ageCalculator.calculateJupiterAge();
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
    ageCalculator.calculateVenusAge();
    ageCalculator.calculateLifeExpectancy("Male", false);
    ageCalculator.calculateYearsToLive();
    expect(ageCalculator.yearsLeftToLive["Venus"]).toEqual(71);
  });
});