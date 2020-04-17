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
    expect(ageCalculator.ageOnMercury).toEqual(133);
  });

});