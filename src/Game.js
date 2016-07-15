AiPlayer = require('../src/AiPlayer');
Evaluator = require('../src/Evaluator');
HumanPlayer = require('../src/HumanPlayer');
UI = require('../src/UI');

var Game = {

  validNumberOfPlayers: [0, 1, 2],

  start: function() {
    var numberOfPlayers = UI.getNumberOfPlayers(this.validNumberOfPlayers);

    var playerMoves = [];

    if (numberOfPlayers == 1) {
      playerMoves = [HumanPlayer.move, AiPlayer.move];
    } else if (numberOfPlayers == 2) {
      playerMoves = [HumanPlayer.move, HumanPlayer.move];
    } else {
      playerMoves = [AiPlayer.move, AiPlayer.move];
    }

    this.play(playerMoves, Board.newBoard());
  },

  play: function(playerMoves, board) {
    currentPlayer = 0;

    while (!Evaluator.isOver(board)) {
      UI.printBoard(board);

      move = playerMoves[currentPlayer](board);
      board = Board.setSpace(move, currentPlayer);

      currentPlayer = (currentPlayer == 0 ? 1 : 0);
    }

    UI.printFinalMessage(board);
  },
};

module.exports = Game;
