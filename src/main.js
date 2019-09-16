import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FrontEnd } from './frontend.js'
import { Match, Fighter, clickAttack, checkHealth } from './backend.js';
//ADD IMPORT STATEMENTS for classes and/or functions we write in frontend.js and backend.js

$(document).ready(function() {
  //CALL FUNCTIONS AND INSTANTIATE CLASSES written in frontend.js and backend.js and imported above

  FrontEnd();


  const userFighter = new Fighter("Bruce the Baboon"); //example; will populate this with the user's choice
  const computerFighter = new Fighter("Pterry the Pterodactyl"); //example; will populate this with a computer-generated choice
  const match = new Match(userFighter, computerFighter);
  match.userFighter.setHealth(); //start interval to slowly increase the userFighter's health over time
  match.computerFighter.setHealth(); //start interval to slowly increase the userFighter's health over time
  clickAttack(match); //function to manage click listeners during match
  checkHealth(match); //function to continuously monitor both players' health levels and end the game when one reaches zero
});
