import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { attachListeners } from './userinterfacelogic.js';

$(document).ready(function() {

  attachListeners();
});