Game = require('../src/Game');
HumanPlayer = require('../src/HumanPlayer');
AiPlayer = require('../src/AiPlayer');
UI = require('../src/UI');

var Game = {
  player1: null,
  player2: null,
  board: null,

  setup: function() {
    var numberOfPlayers = UI.getNumberOfPlayers();

    if (numberOfPlayers == 1) {
      this.player1 = HumanPlayer.move;
      this.player2 = AiPlayer.move;
    }
  }
};

module.exports = Game
