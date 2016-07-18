Evaluator = require('../src/Evaluator');

AiPlayer = {

  move: function(board, playerPieces) {

  },

  nextBoards: function(board) {

  },

  scoreBoard: function(board, maximizingPiece) {
    var winner = Evaluator.winner(board)

    if (winner == maximizingPiece) {
      return 10;
    } else if (winner != 0) {
      return -10;
    }
    return 0;
  }
};

module.exports = AiPlayer;
