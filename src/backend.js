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
    maxAttack(this.userFighter);
  } else if (number === 1) {
    medAttack(this.userFighter);
  } else if (number === 2) {
    minAttack(this.userFighter);
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
    health = 50;
    atHome = false; //boolean, will be "true" when animal is on home turf
  }
  setHealth() { //method to increase fighter's health slowly over time. make sure to call this method when the fight begins and clear it (using clearInterval()) when the fight ends.
    this.healthInterval = setInterval(() => {
      this.health++;
    }, 1000);
  }
}

export function clickAttack(match) {
  $("#maxAttack").click(function() {
    match.maxAttack(computerFighter);
    setTimeout(function() {
      //wait 2 seconds before computerFighter's turn
      match.pickRandomAttack();
    }, 2000);
  });

  $("#medAttack").click(function(){
    match.medAttack(computerFighter);
    setTimeout(function(){
      match.pickRandomAttack();
    }, 2000);
  });

  $("#minAttack").click(function(){
    match.minAttack(computerFighter);
    setTimeout(function(){
      match.pickRandomAttack();
    }, 2000);
  });

}

export function checkHealth(match) {
  let checkInterval = setInterval(() => {
    if (match.userFighter.health === 0) {
      clearInterval(match.userFighter.healthInterval);
      clearInterval(match.computerFighter.healthInterval);
      clearInterval(checkInterval);
      alert(`${match.computerFighter.name} Wins! `);
    } else if (match.computerFighter.health === 0) {
      clearInterval(match.userFighter.healthInterval);
      clearInterval(match.computerFighter.healthInterval);
      clearInterval(checkInterval);
      alert(`${match.userFighter.name} Wins!`);
    }
  }, 2000);
};
