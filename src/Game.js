Game = require('../src/Game');
HumanPlayer = require('../src/HumanPlayer');
AiPlayer = require('../src/AiPlayer');
UI = require('../src/UI');

var Game = {

  setup: function() {
    var that = this;

    var numberOfPlayers = UI.getNumberOfPlayers();

    var player1Move = null;
    var player2Move = null;

    if (numberOfPlayers == 1) {
      player1Move = HumanPlayer.move
      player2Move = AiPlayer.move
    } else if (numberOfPlayers == 2) {
      player1Move = player2Move = HumanPlayer.move
    } else {
      player1Move = player2Move = AiPlayer.move
    }

    this.playGame(player1Move, player2Move);
  },

  playGame: function(player1Move, player2Move) {

  }
};

module.exports = Game
