import { AgeCalculator } from './agecalculator.js';

export function getResultHTML(age) {
  let userAges = new AgeCalculator(age);
  userAges.calculateAges();
  userAges.calculateLifeExpectancy();
  userAges.calculateYearsToLive();
  userAges.calculateYearsSurpassed();

  let result = "";

  for(let key in userAges.lifeExpectancy) {
    result +=
      `<tr>` + 
        `<th>${key}</th>` +
        `<td>${userAges.age[key]}</td>` +
        `<td>${userAges.lifeExpectancy[key]}</td>` +
        `<td>${userAges.yearsLeftToLive[key]}</td>` +
        `<td>${userAges.yearsSurpassed[key]}</td>` +
      `</tr>`;
  }

  return result;
}

