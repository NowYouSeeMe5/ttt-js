var Board = {
  newBoard: function(size) {
    return Array(size*size).fill(0);
  },

  setSpace: function(board, playerPiece, position) {
    var newBoard = board.slice();

    newBoard[position] = playerPiece;

    return newBoard;
  }
}

module.exports = Board;
