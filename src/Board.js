var Board = {
  newBoard: function(size) {
    return Array(size*size).fill(0);
  },

  setSpace: function(board, playerPiece, position) {
    board[position] = playerPiece;

    return board;
  }
}

module.exports = Board;
