/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function () {
  if (this.health >= 1) {
    return false;
  }
  if (this.health <= 0) {
    return true;
  }
};
// let pikachu = new Pokemon('Pikachu', 250, 4);
// let charizard = new Pokemon('Charizard', 300, 5);

function simulateBattle(player1, player2, value) {
  let finalValue = '';
  let attackingPlayer;
  let temp;
  let defendingPlayer;
  if (player1.name === value) {
    attackingPlayer = player1;
    defendingPlayer = player2;
  } else {
    attackingPlayer = player2;
    defendingPlayer = player1;
  }
  while (!player1.isDefeated() && !player2.isDefeated()) {
    defendingPlayer.health =
      defendingPlayer.health - attackingPlayer.biteAttack();

    temp = defendingPlayer;
    defendingPlayer = attackingPlayer;
    attackingPlayer = temp;
  }
  if (attackingPlayer.isDefeated()) {
    finalValue = `${defendingPlayer.name} Wins!`;
  } else {
    finalValue = `${attackingPlayer.name} Wins!`;
  }
  return finalValue;
}
// simulateBattle(pikachu, charizard, 'Pikachu');
