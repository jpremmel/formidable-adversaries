export class Fighter {
  constructor (name) {
    this.name = name;
    health = 50;
    atHome = false;
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
