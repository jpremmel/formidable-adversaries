import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Match, Fighter, clickAttack, checkHealth } from './backend.js';
//Add import statements for classes and/or functions we write in frontend.js and backend.js



$(document).ready(function() {
  //Call functions and instantiate classes written in frontend.js and backend.js


  const userFighter = new Fighter("Bruce the Baboon"); //example; will populate this with the user's choice
  const computerFighter = new Fighter("Pterry the Pteradactyl"); //example; will populate this with a computer-generated choice
  const match = new Match(userFighter, computerFighter);
  match.userFighter.setHealth(); //start slow health increase interval for userFighter
  match.computerFighter.setHealth(); //start slow health increase interval for computerFighter
  clickAttack(match);
  checkHealth(match);

});
