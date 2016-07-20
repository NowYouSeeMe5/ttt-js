UI = require('../src/UI');

HumanPlayer = {

  move: function(board) {
    var possibleMoves = HumanPlayer.possibleMoves(board);
    return UI.getMove(possibleMoves);
  },

  possibleMoves: function(board) {
    var moves = [];

    for (var i = 0; i < board.length; i++) {
      if (board[i] == 0) {
        moves.push(i + 1);
      }
    }

    return moves;
  }
};

module.exports = HumanPlayer;
