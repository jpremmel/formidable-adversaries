import $ from 'jquery';

export class Match {
  constructor(userFighter, computerFighter) {
    this.userFighter = userFighter;
    this.computerFighter = computerFighter;
  }
  maxAttack(fighter) { //methods for decreasing a figher's health when its opponent attacks
  fighter.health -= 10;
  }
  medAttack(fighter) {
    fighter.health -= 7;
  }
  minAttack(fighter) {
    fighter.health -= 5;
  }
  pickRandomAttack() { //method to randomly pick the computerFighter's attack against the userFighter
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

  setHealth() { //method to increase fighter's health slowly over time. make sure to call this method when the fight begins and clear it (using clearInterval()) when the fight ends!
    this.healthInterval = setInterval(() => {
      this.health++;
    }, 2000);

  }
}
export function chooseOpponent(userChoice) {
  let characters = ["Carol the Cactus", "Octavia the Octopus", "Bruce the Baboon", "Lenny Crabitz", "Pterry the Pterodactyl", "Patti the Penguin", "Misty the Mountain Goat", "Gart the Gator", "Paco the Pig"];

  for(let i = 0; i < characters.length; i++){
    if(characters[i]===userChoice){
      characters.splice(i, 1);
    }
  }
let numberFighter = Math.round(Math.random() * 7);
return characters[numberFighter];
}

export function buttonScramble(fighterName) { //function to scramble the order in which the three attack buttons are appended to the html page. need to call this function when the match begins.
  let buttons = [`<button id="maxAttack" class="btn btn-danger"></button>`, `<button id="medAttack" class="btn btn-danger"></button>`, `<button id="minAttack" class="btn btn-danger"></button>`];
  const numberRemove = Math.round(Math.random() * 2);
  const numberInsert = Math.round(Math.random() * 2);
  buttons.splice(numberInsert, 0, buttons.splice(numberRemove, 1)[0]);
  for (let i = 0; i < buttons.length; i++) {
    $(".attack-buttons").append(buttons[i]);
  }
  if (fighterName === "Carol the Cactus"){
    $("#maxAttack").text("Throw Spikes");
    $("#medAttack").text("Flash Flood");
    $("#minAttack").text("Blind With Sunlight");
  } else if (fighterName === "Octavia the Octopus"){
    $("#maxAttack").text("Beak Bite");
    $("#medAttack").text("Ink Attack");
    $("#minAttack").text("Camoflauge Attack");
  } else if (fighterName === "Bruce the Baboon"){
    $("#maxAttack").text("Banshee Cry");
    $("#medAttack").text("Tail Choke");
    $("#minAttack").text("Power Bite");
  } else if (fighterName === "Lenny Crabitz"){
    $("#maxAttack").text("Scarf Strangle");
    $("#medAttack").text("Death Pinch");
    $("#minAttack").text("Fish Fart");
  } else if (fighterName === "Pterry the Pterodactyl"){
    $("#maxAttack").text("Eye Gouge");
    $("#medAttack").text("Boom Flap");
    $("#minAttack").text("Swoop n' Snatch");
  } else if (fighterName === "Patti the Penguin"){
    $("#maxAttack").text("Flap Slap");
    $("#medAttack").text("Slip n' Slide");
    $("#minAttack").text("Icicle Impalement");
  } else if (fighterName === "Misty the Mountain Goat"){
    $("#maxAttack").text("BAAttle Cry");
    $("#medAttack").text("Powerkick");
    $("#minAttack").text("Head Butt");
  } else if (fighterName === "Gart the Gator"){
    $("#maxAttack").text("Death Roll");
    $("#medAttack").text("Snapper Bite");
    $("#minAttack").text("Tail Smack");
  } else if (fighterName === "Paco the Pig"){
    $("#maxAttack").text("Smother Sit");
    $("#medAttack").text("Acid Mud");
    $("#minAttack").text("Oink Overload");
  }
}

export function clickAttack(match) { //function for turning click listeners on and off for attack buttons. click listener is on while it's the user's turn, then turned off for 2 seconds while it's the computerFighter's turn.
  const maxClick = function() {
    match.maxAttack(match.computerFighter); //deal damage to computerFighter
    //turn off click listeners for all three buttons
    $("#whoseTurn").html(`It's ${match.computerFighter.name}'s turn!'`);
    console.log(`It's ${match.computerFighter.name}'s turn!'`);
    $("#maxAttack").off();
    $("#medAttack").off();
    $("#minAttack").off();
    setTimeout(function() {
      //wait 2 seconds, then computer takes its turn & turns all three buttons back on
      match.pickRandomAttack();
      $("#maxAttack").click(maxClick);
      $("#medAttack").click(medClick);
      $("#minAttack").click(minClick);
      $("#whoseTurn").html(`It's ${match.userFighter.name}'s turn!`);
      console.log(`It's ${match.userFighter.name}'s turn!`);
    }, 2000);
  console.log(match.computerFighter.health);
  }
  $("#maxAttack").click(maxClick);

  const medClick = function(){
    match.medAttack(match.computerFighter);
    $("#whoseTurn").html(`It's ${match.computerFighter.name}'s turn!`);
    console.log(`It's ${match.computerFighter.name}'s turn!`);
    $("#maxAttack").off();
    $("#medAttack").off();
    $("#minAttack").off();
    setTimeout(function(){
      match.pickRandomAttack();
      $("#maxAttack").click(maxClick);
      $("#medAttack").click(medClick);
      $("#minAttack").click(minClick);
      $("#whoseTurn").html(`It's ${match.userFighter.name}'s turn!`);
      console.log(`It's ${match.userFighter.name}'s turn!`);
    }, 2000);
      console.log(match.computerFighter.health);
  }
  $("#medAttack").click(medClick);

  const minClick = function(){
    match.minAttack(match.computerFighter);
    $("#whoseTurn").html(`It's ${match.computerFighter.name}'s turn!'`);
    console.log(`It's ${match.computerFighter.name}'s turn!`);
    $("#maxAttack").off();
    $("#medAttack").off();
    $("#minAttack").off();
    setTimeout(function(){
      match.pickRandomAttack();
      $("#maxAttack").click(maxClick);
      $("#medAttack").click(medClick);
      $("#minAttack").click(minClick);
      $("#whoseTurn").html(`It's ${match.userFighter.name}'s turn!`);
      console.log(`It's ${match.userFighter.name}'s turn!`);
    }, 2000);
      console.log(match.computerFighter.health);
  }
  $("#minAttack").click(minClick);
}

export function checkHealth(match) { //method to check each fighter's health levels every half second. if it finds that one of the fighter has a health less than or equal to zero, declare the other player the winner and clear all the intervals.
  let checkInterval = setInterval(() => {
    $("#computerHealth").html(`${match.computerFighter.name}'s Health Level: ${match.computerFighter.health}`);
    $("#userHealth").html(`${match.userFighter.name}'s Health Level: ${match.userFighter.health}`);
      if (match.userFighter.health <= 0) {
      clearInterval(match.userFighter.healthInterval);
      clearInterval(match.computerFighter.healthInterval);
      clearInterval(checkInterval);
      alert(`${match.computerFighter.name} Wins! `);

    } else if (match.computerFighter.health <= 0) {
      clearInterval(match.userFighter.healthInterval);
      clearInterval(match.computerFighter.healthInterval);
      clearInterval(checkInterval);
      // change alert to modal???
      alert(`${match.userFighter.name} Wins!`);
    }
  }, 100);
}
