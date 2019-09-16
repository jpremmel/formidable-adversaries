export class Match {
  constructor(userFighter, computerFighter) {
    this.userFighter = userFighter;
    this.computerFighter = computerFighter;
  }
  pickRandomAttack() { //method to randomly pick the computerFighter's attack
    const number = Math.round(Math.random() * 2);
    if (number === 0) {
      this.userFighter.maxAttack();
    } else if (number === 1) {
      this.userFighter.medAttack();
    } else if (number === 2) {
      this.userFighter.minAttack();
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
  setInterval(() => {
    this.health++;
  }, 1000);
}
  maxAttack() { //methods for decreasing figher's health when receiving opponent's attacks
    this.health -= 10;
  }
  medAttack() {
    this.health -= 7;
  }
  minAttack() {
    this.health -= 5;
  }
}
