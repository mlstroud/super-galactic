import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ageCalculator } from './agecalculator.js';

$(document).ready(function() {

  $("#form-age").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();


    let message = `Hi <strong>${name}</strong>, this is a detailed breakdown of your age throughout the solar system!<br><br>`;
    $("#content-results").prepend(message);
    $("#content-results").slideDown("slow");
  });
});