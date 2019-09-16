export class Fighter {
  constructor (name) {
    this.name = name; //ex. "Bruce the Baboon"
    health = 50;
    atHome = false; //boolean, will be "true" when animal is on home turf
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
  setHealth() { //method to increase fighter's health slowly over time. make sure to call this method when the fight begins and clear it (using clearInterval()) when the fight ends.
    setInterval(() => {
      this.health++;
    }, 1000);
  }
}
