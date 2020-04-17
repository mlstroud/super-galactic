import { AgeCalculator } from './../src/agecalculator.js';

describe('Age Calculator', () => {

  let ageCalculator;

  beforeEach(() => {
    ageCalculator = new AgeCalculator(32);
  });

  test('should correctly create an AgeCalculator object and assign user age', () => {
    expect(ageCalculator.age).toEqual(32);
  });

  test('should correctly return user age in Mercury years', () => {
    ageCalculator.calculateMercuryAge();
    expect(ageCalculator.ageOnMercury).toEqual(133);
  });

  test('should correctly return user age in Venus years', () => {
    ageCalculator.calculateVenusAge();
    expect(ageCalculator.ageOnVenus).toEqual(51);
  });

  test('should correctly return user age in Mars years', () => {
    ageCalculator.calculateMarsAge();
    expect(ageCalculator.ageOnMars).toEqual(17);
  });

});