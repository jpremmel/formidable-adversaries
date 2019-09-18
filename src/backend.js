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
  applyHomeAdvantage() {
    if (this.atHome){
      this.health += 10;
    }
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

export function buttonScramble(userFighterName, compFighterName) { //function to scramble the order in which the three attack buttons are appended to the html page. need to call this function when the match begins.
  let buttons = [`<button id="maxAttack" class="btn"></button>`, `<button id="medAttack" class="btn"></button>`, `<button id="minAttack" class="btn"></button>`];
  const numberRemove = Math.round(Math.random() * 2);
  const numberInsert = Math.round(Math.random() * 2);
  buttons.splice(numberInsert, 0, buttons.splice(numberRemove, 1)[0]);
  for (let i = 0; i < buttons.length; i++) {
    $(".attack-buttons").append(buttons[i]);
  }
  if (userFighterName === "Carol the Cactus"){
    $("#maxAttack").text("Throw Spikes");
    $("#medAttack").text("Flash Flood");
    $("#minAttack").text("Blind With Sunlight");
  } else if (userFighterName === "Octavia the Octopus"){
    $("#maxAttack").text("Beak Bite");
    $("#medAttack").text("Ink Attack");
    $("#minAttack").text("Camoflauge Attack");
  } else if (userFighterName === "Bruce the Baboon"){
    $("#maxAttack").text("Banshee Cry");
    $("#medAttack").text("Tail Choke");
    $("#minAttack").text("Power Bite");
  } else if (userFighterName === "Lenny Crabitz"){
    $("#maxAttack").text("Scarf Strangle");
    $("#medAttack").text("Death Pinch");
    $("#minAttack").text("Fish Fart");
  } else if (userFighterName === "Pterry the Pterodactyl"){
    $("#maxAttack").text("Eye Gouge");
    $("#medAttack").text("Boom Flap");
    $("#minAttack").text("Swoop n' Snatch");
  } else if (userFighterName === "Patti the Penguin"){
    $("#maxAttack").text("Flap Slap");
    $("#medAttack").text("Slip n' Slide");
    $("#minAttack").text("Icicle Impalement");
  } else if (userFighterName === "Misty the Mountain Goat"){
    $("#maxAttack").text("BAAttle Cry");
    $("#medAttack").text("Powerkick");
    $("#minAttack").text("Head Butt");
  } else if (userFighterName === "Gart the Gator"){
    $("#maxAttack").text("Death Roll");
    $("#medAttack").text("Snapper Bite");
    $("#minAttack").text("Tail Smack");
  } else if (userFighterName === "Paco the Pig"){
    $("#maxAttack").text("Smother Sit");
    $("#medAttack").text("Acid Mud");
    $("#minAttack").text("Oink Overload");
  }

let compAttacksArray;

  if (compFighterName === "Carol the Cactus"){
    compAttacksArray = ["Throw Spikes", "Flash Flood", "Blind With Sunlight"];

  } else if (compFighterName === "Octavia the Octopus"){
    compAttacksArray = ["Beak Bite", "Ink Attack", "Camoflauge Attack"];

  } else if (compFighterName === "Bruce the Baboon"){
    compAttacksArray = ["Banshee Cry", "Tail Choke", "Power Bite"];

  } else if (compFighterName === "Lenny Crabitz"){
    compAttacksArray = ["Scarf Strangle", "Death Pinch", "Fish Fart"];

  } else if (compFighterName === "Pterry the Pterodactyl"){
    compAttacksArray = ["Eye Gouge", "Boom Flap", "Swoop n' Snatch"];

  } else if (compFighterName === "Patti the Penguin"){
    compAttacksArray = ["Flap Slap", "Slip n' Slide", "Icicle Impalement"];

  } else if (compFighterName === "Misty the Mountain Goat"){
    compAttacksArray = ["BAAttle Cry", "Powerkick", "Head Butt"];

  } else if (compFighterName === "Gart the Gator"){
    compAttacksArray = ["Death Roll", "Snapper Bite", "Tail Smack"];

  } else if (compFighterName === "Paco the Pig"){
    compAttacksArray = ["Smother Sit", "Acid Mud", "Oink Overload"];

  }
  return compAttacksArray;
}

export function checkHomeArena(fighter, arena) {
  if (fighter.name === "Carol the Cactus" && arena === "Desert"){
    fighter.atHome = true;
  } else if (fighter.name === "Octavia the Octopus" && arena === "Ocean"){
    fighter.atHome = true;
  } else if (fighter.name === "Bruce the Baboon" && arena === "Jungle"){
    fighter.atHome = true;
  } else if (fighter.name === "Lenny Crabitz" && arena === "Beach"){
    fighter.atHome = true;
  } else if (fighter.name === "Pterry the Pterodactyl" && arena === "Sky"){
    fighter.atHome = true;
  } else if (fighter.name === "Patti the Penguin" && arena === "Arctic"){
    fighter.atHome = true;
  } else if (fighter.name === "Misty the Mountain Goat" && arena === "Mountain"){
    fighter.atHome = true;
  } else if (fighter.name === "Gart the Gator" && arena === "Swamp"){
    fighter.atHome = true;
  } else if (fighter.name === "Paco the Pig" && arena === "Farm"){
    fighter.atHome = true;
  }
}




export function clickAttack(match, compAttacksArray) { //function for turning click listeners on and off for attack buttons. click listener is on while it's the user's turn, then turned off for 2 seconds while it's the computerFighter's turn.
  const maxClick = function() {
    match.maxAttack(match.computerFighter); //deal damage to computerFighter

    $("#userAttack").html(`<h3><em>${$("#maxAttack").text()}!</em></h3>`);
    //turn off click listeners for all three buttons
    $("#whoseTurn").html(`It's ${match.computerFighter.name}'s turn!`);
    $("#maxAttack").off();
    $("#medAttack").off();
    $("#minAttack").off();
    setTimeout(function() {
      //wait 2 seconds, then computer takes its turn & turns all three buttons back on
      match.pickRandomAttack();
      const number =  Math.round(Math.random() * 2);
      $("#computerAttack").html(`<h3><em>${compAttacksArray[number]}!</em></h3>`);
      $("#maxAttack").click(maxClick);
      $("#medAttack").click(medClick);
      $("#minAttack").click(minClick);
      $("#whoseTurn").html(`It's ${match.userFighter.name}'s turn!`);
    }, 2000);
  }
  $("#maxAttack").click(maxClick);

  const medClick = function(){
    match.medAttack(match.computerFighter);
  $("#userAttack").html(`<h3><em>${$("#medAttack").text()}!</em></h3>`);

    $("#whoseTurn").html(`It's ${match.computerFighter.name}'s turn!`);
    $("#maxAttack").off();
    $("#medAttack").off();
    $("#minAttack").off();
    setTimeout(function(){
      match.pickRandomAttack();
      const number =  Math.round(Math.random() * 2);
      $("#computerAttack").html(`<h3><em>${compAttacksArray[number]}!</em></h3>`);
      $("#maxAttack").click(maxClick);
      $("#medAttack").click(medClick);
      $("#minAttack").click(minClick);
      $("#whoseTurn").html(`It's ${match.userFighter.name}'s turn!`);
    }, 2000);
  }
  $("#medAttack").click(medClick);

  const minClick = function(){
    match.minAttack(match.computerFighter);
    $("#userAttack").html(`<h3><em>${$("#minAttack").text()}!</em></h3>`);
    $("#whoseTurn").html(`It's ${match.computerFighter.name}'s turn!`);
    $("#maxAttack").off();
    $("#medAttack").off();
    $("#minAttack").off();


    setTimeout(function(){
      match.pickRandomAttack();
      const number =  Math.round(Math.random() * 2);
      $("#computerAttack").html(`<h3><em>${compAttacksArray[number]}!</em></h3>`);
      $("#maxAttack").click(maxClick);
      $("#medAttack").click(medClick);
      $("#minAttack").click(minClick);
      $("#whoseTurn").html(`It's ${match.userFighter.name}'s turn!`);
    }, 2000);
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
