import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FrontEnd } from './frontend.js'
import { Match, Fighter, clickAttack, checkHealth, buttonScramble, chooseOpponent, checkHomeArena } from './backend.js';
import Thunder from "./shortthunder.mp3";

$(document).ready(function() {
  $("#home-advantage").hide();
  $("#end-game").hide();
  $(".attack-buttons").hide();
  $("#userHealth").hide();
  $("#computerHealth").hide();
  $("#whoseTurn").hide();
  $(".game-play").hide();
  FrontEnd();
  let userChoice;
  $(".card").on("click", ".choose", function() {
    userChoice = this.name;
  });
  $(".col-xl-6").on("click", ".card", function() {
    const arena = this.id;
    $(".arena").hide();
    const compChoice = chooseOpponent(userChoice);

    $("#userImg").html(`<img class="userImage" src="./img/${userChoice}.png">`);
    $("#computerImg").html(`<img class="computerImage" src="./img/${compChoice}.png">`);
    const userFighter = new Fighter(userChoice);
    checkHomeArena(userFighter, arena);
    userFighter.applyHomeAdvantage();

    const computerFighter = new Fighter(compChoice);
    checkHomeArena(computerFighter, arena);
    computerFighter.applyHomeAdvantage();

    const match = new Match(userFighter, computerFighter);
    let thunder = new Audio(Thunder);

    $("h1").hide();
    $("body").addClass("blueBackground");
    thunder.play();
    thunder.volume = 0.1;

    setTimeout(function(){
      $("body").addClass("lightningFlash");
    }, 3000);
    setTimeout(function(){
      $("body").removeClass("lightningFlash");
      $("body").removeClass("blueBackground");
      $("body").addClass(`${arena}-background`);
      $(".game-play").show();
      $("h1").show();
      if (userFighter.atHome) {
        $("#at-home").text(`${userFighter.name}`);
        $("#home-advantage").show();
        setTimeout(function() {
          $("#home-advantage").hide();
          startGame(match);
        }, 5000);
      } else if (computerFighter.atHome) {
        $("#at-home").text(`${computerFighter.name}`);
        $("#home-advantage").show();
        setTimeout(function() {
          $("#home-advantage").hide();
          startGame(match);
        }, 5000);
      } else {
        startGame(match);
      }
    }, 3200);
    $("#whoseTurn").html(`<h2>It's ${match.userFighter.name}'s turn!</h2>`);
    const compAttacksArray = buttonScramble(userFighter.name, computerFighter.name);
    clickAttack(match, compAttacksArray);
    checkHealth(match);
  });
});

function startGame(match) {
  $("#whoseTurn").show();
  $(".attack-buttons").show();
  $("#userHealth").show();
  $("#computerHealth").show();
  match.userFighter.setHealth();
  match.computerFighter.setHealth();
}
