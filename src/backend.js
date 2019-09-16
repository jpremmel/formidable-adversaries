import $ from 'jquery';

export class Match {
  constructor(userFighter, computerFighter) {
    this.userFighter = userFighter;
    this.computerFighter = computerFighter;
  }
  maxAttack(fighter) { //methods for decreasing figher's health when receiving opponent's attacks
  fighter.health -= 10;
  }
  medAttack(fighter) {
    fighter.health -= 7;
  }
  minAttack(fighter) {
    fighter.health -= 5;
  }
  pickRandomAttack() { //method to randomly pick the computerFighter's attack
  const number = Math.round(Math.random() * 2);
  if (number === 0) {
    this.maxAttack(this.userFighter);
  } else if (number === 1) {
    this.medAttack(this.userFighter);
  } else if (number === 2) {
    this.minAttack(this.userFighter);
  }
}
rematch() {
  this.userFighter.health = 50;
  this.computerFighter.health = 50;
  }
}

export class Fighter {
  constructor(name) {
    this.name = name; //ex. "Bruce the Baboon"
    this.health = 50;
    this.atHome = false; //boolean, will be "true" when animal is on home turf
  }

  setHealth() { //method to increase fighter's health slowly over time. make sure to call this method when the fight begins and clear it (using clearInterval()) when the fight ends.
    this.healthInterval = setInterval(() => {
      this.health++;
    }, 2000);

  }
}

export function clickAttack(match) { //function for turning click listeners on and off for attack buttons. click listener is on while it's the user's turn, then it is turned off for 2 seconds during which time it's the computer's turn.
  const maxClick = function() {
    match.maxAttack(match.computerFighter); //deal damage
    //turn off click listeners for all three buttons
    $("#maxAttack").off();
    $("#medAttack").off();
    $("#minAttack").off();
    setTimeout(function() {
      //wait 2 seconds before computerFighter's turn & turn all three buttons back on
      match.pickRandomAttack();
      $("#maxAttack").click(maxClick);
      $("#medAttack").click(medClick);
      $("#minAttack").click(minClick);
    }, 2000);
  console.log(match.computerFighter.health);
  }
  $("#maxAttack").click(maxClick);

  const medClick = function(){
    match.medAttack(match.computerFighter);
    $("#maxAttack").off();
    $("#medAttack").off();
    $("#minAttack").off();
    setTimeout(function(){
      match.pickRandomAttack();
      $("#maxAttack").click(maxClick);
      $("#medAttack").click(medClick);
      $("#minAttack").click(minClick);
    }, 2000);
      console.log(match.computerFighter.health);
  }
  $("#medAttack").click(medClick);

  const minClick = function(){
    match.minAttack(match.computerFighter);
    $("#maxAttack").off();
    $("#medAttack").off();
    $("#minAttack").off();
    setTimeout(function(){
      match.pickRandomAttack();
      $("#maxAttack").click(maxClick);
      $("#medAttack").click(medClick);
      $("#minAttack").click(minClick);
    }, 2000);
      console.log(match.computerFighter.health);
  }
  $("#minAttack").click(minClick);
}

export function checkHealth(match) {
  let checkInterval = setInterval(() => {
    if (match.userFighter.health <= 0) {
      clearInterval(match.userFighter.healthInterval);
      clearInterval(match.computerFighter.healthInterval);
      clearInterval(checkInterval);
      alert(`${match.computerFighter.name} Wins! `);
    } else if (match.computerFighter.health <= 0) {
      clearInterval(match.userFighter.healthInterval);
      clearInterval(match.computerFighter.healthInterval);
      clearInterval(checkInterval);
      alert(`${match.userFighter.name} Wins!`);
    }
  }, 500);
}
