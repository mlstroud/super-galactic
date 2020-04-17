import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { getResultHTML } from './userinterfacelogic.js';

$(document).ready(function() {

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
});