import $ from "jquery";
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


export function attachListeners() {
  $("#form-age").submit(function(event) {
    event.preventDefault();

    const name = $("#name").val();
    const age  = parseInt($("#age").val());
    let resultHTML = getResultHTML(age);
    let message = `Hi <strong>${name}</strong>, this is a detailed breakdown of your age throughout the solar system!<br><br>`;
    
    $("#content-form").slideUp();
    $("#content-results").prepend(message);
    $("#table-result").append(resultHTML);
    $("#content-results").slideDown("slow");
  });

  $("#refresh").click(function() {
    location.reload();
  });
}
