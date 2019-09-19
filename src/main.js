import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FrontEnd } from './frontend.js'
import { Match, Fighter, clickAttack, checkHealth, buttonScramble, chooseOpponent, checkHomeArena } from './backend.js';

$(document).ready(function() {
  $("#home-advantage").hide();
  FrontEnd();
  let userChoice;
  $(".card").on("click", ".choose", function() {
    userChoice = this.name;
  });
  $(".card-img-overlay").on("click", "h1", function() {
    const arena = $(this).text();
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

    if (userFighter.atHome){
      $("#at-home").text(`${userFighter.name}`);
      $("#home-advantage").show();
      setTimeout(function() {
        $("#home-advantage").hide();
      }, 3000);
    } else if (computerFighter.atHome){
      $("#at-home").text(`${computerFighter.name}`);
      $("#home-advantage").show();
      setTimeout(function() {
        $("#home-advantage").hide();
      }, 3000);
    }
    const match = new Match(userFighter, computerFighter);

    $(".game-play").hide();
    $("h1").hide();
    $("body").addClass("blueBackground");
    setTimeout(function(){
      $("body").addClass("lightningFlash");
    }, 100);
    setTimeout(function(){
      $("body").removeClass("lightningFlash");
      $("body").removeClass("blueBackground");
      $("body").addClass(`${arena}-background`);
      $(".game-play").show();
      $("h1").show();
      match.userFighter.setHealth();
      match.computerFighter.setHealth();
    }, 200);
    $("#whoseTurn").html(`<h2>It's ${match.userFighter.name}'s turn!</h2>`);
    const compAttacksArray = buttonScramble(userFighter.name, computerFighter.name);
    clickAttack(match, compAttacksArray);
    checkHealth(match);
  });
});
