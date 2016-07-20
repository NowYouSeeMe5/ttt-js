AiPlayer = require('../src/AiPlayer');
Evaluator = require('../src/Evaluator');
HumanPlayer = require('../src/HumanPlayer');
UI = require('../src/UI');

var Game = {

  validNumberOfPlayers: ["0", "1", "2"],
  gamePieces: ["X", "O"],

  start: function() {
    var boardSize = 3;
    var numberOfPlayers = UI.getNumberOfPlayers(UI.validNumberOfPlayers);
    var playerMoves = [];

    if (numberOfPlayers == 1) {
      playerMoves = [HumanPlayer.move, AiPlayer.move];
    } else if (numberOfPlayers == 2) {
      playerMoves = [HumanPlayer.move, HumanPlayer.move];
    } else {
      playerMoves = [AiPlayer.move, AiPlayer.move];
    }

    Game.play(playerMoves, Board.newBoard(boardSize));
  },

  play: function(playerMoves, board) {
    currentPlayer = 0;

    while (!Evaluator.isOver(board)) {
      UI.printBoard(board);

      var move = playerMoves[currentPlayer](board, Game.gamePieces);
      board = Board.setSpace(board, move, Game.gamePieces[currentPlayer]);

      currentPlayer = (currentPlayer == 0 ? 1 : 0);
    }

    UI.printFinalMessage(Game.gamePieces[currentPlayer]);
  },
};

module.exports = Game;
