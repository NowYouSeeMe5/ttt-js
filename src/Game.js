AiPlayer = require('../src/AiPlayer');
Board = require('../src/Board');
Evaluator = require('../src/Evaluator');
Game = require('../src/Game');
HumanPlayer = require('../src/HumanPlayer');
UI = require('../src/UI');

var Game = {

  setup: function() {
    var numberOfPlayers = UI.getNumberOfPlayers();

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

    UI.displayFinalMessage(board);
  },
};

module.exports = Game;
