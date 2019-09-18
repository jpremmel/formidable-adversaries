import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FrontEnd } from './frontend.js'
import { Match, Fighter, clickAttack, checkHealth, buttonScramble, chooseOpponent, checkHomeArena } from './backend.js';
//ADD IMPORT STATEMENTS for classes and/or functions we write in frontend.js and backend.js

$(document).ready(function() {
  //CALL FUNCTIONS AND INSTANTIATE CLASSES written in frontend.js and backend.js and imported above
  FrontEnd();
  let userChoice;
  $(".card").on("click", ".choose", function() {
    userChoice = this.name;
  });
  $(".card-img-overlay").on("click", "h1", function() {
    const arena = $(this).text();
    $("body").addClass(`${arena}-background`);
    $(".arena").hide();
    const compChoice = chooseOpponent(userChoice);
    $("#userImg").html(`<img class="userImage" src="./img/${userChoice}.png">`);
    $("#computerImg").html(`<img class="computerImage" src="./img/${compChoice}.png">`);
    const userFighter = new Fighter(userChoice); //example; will populate this with the user's choice
    checkHomeArena(userFighter, arena); //check to see if the user's fighter is in their home arena
    userFighter.applyHomeAdvantage(); //method to add 10 health points if the user's fighter is at home

    const computerFighter = new Fighter(compChoice); //example; will populate this with a computer-generated choice
    checkHomeArena(computerFighter, arena); //check to see if the computer's fighter is in their home arena
    computerFighter.applyHomeAdvantage(); //method to add 10 health points if the computer's fighter is at home

    if (userFighter.atHome){
      alert(`${userFighter.name} has the home court advantage! Enjoy 10 extra health points!`);
    } else if (computerFighter.atHome){
      alert(`Your opponent, ${computerFighter.name}, has the home court advantage of 10 extra health points!`);
    }

    const match = new Match(userFighter, computerFighter);
    $("#whoseTurn").html(`<h2>It's ${match.userFighter.name}'s turn!</h2>`);
    match.userFighter.setHealth(); //start interval to slowly increase the userFighter's health over time
    match.computerFighter.setHealth(); //start interval to slowly increase the userFighter's health over time
    const compAttacksArray = buttonScramble(userFighter.name, computerFighter.name);
    //function to scramble the order of the maxAttack, medAttack, and minAttack buttons before appending them to the html (so the user doesn't figure out that the one on the right always gives the highest attack damage, for example)
    clickAttack(match, compAttacksArray); //function to manage click listeners during match
    checkHealth(match); //function to continuously monitor both players' health levels and end the game when one reaches zero
  });
});
