import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FrontEnd } from './frontend.js'
import { Match, Fighter, clickAttack, checkHealth, buttonScramble, chooseOpponent } from './backend.js';
//ADD IMPORT STATEMENTS for classes and/or functions we write in frontend.js and backend.js

$(document).ready(function() {
  //CALL FUNCTIONS AND INSTANTIATE CLASSES written in frontend.js and backend.js and imported above

  FrontEnd();

 $(".card").on("click", ".choose", function() {
   let userChoice = this.name ;
   let compChoice = chooseOpponent(userChoice);

  const userFighter = new Fighter(userChoice); //example; will populate this with the user's choice
  const computerFighter = new Fighter(compChoice); //example; will populate this with a computer-generated choice
  const match = new Match(userFighter, computerFighter);
  match.userFighter.setHealth(); //start interval to slowly increase the userFighter's health over time
  match.computerFighter.setHealth(); //start interval to slowly increase the userFighter's health over time
  buttonScramble(userFighter.name); //function to scramble the order of the maxAttack, medAttack, and minAttack buttons before appending them to the html (so the user doesn't figure out that the one on the right always gives the highest attack damage, for example)
  clickAttack(match); //function to manage click listeners during match
  checkHealth(match); //function to continuously monitor both players' health levels and end the game when one reaches zero
});
});
