Util = {

  boardSize: function(board) {
    return Math.sqrt(board.length);
  },

  boardToString: function(board) {
    var size = this.boardSize(board);
    var boardString = "";
    var newLine = "\n";

    for (var i = 0; i < board.length; i++) {
      if (i % size == 0 && i != 0) {
        boardString += newLine;
      }

      if (board[i] == 0) {
        boardString += (i + 1);
      } else {
        boardString += board[i];
      }
    }
    boardString += newLine;

    return boardString;
  },

  intToString: function(int) {
    return int.toString();
  },
}

module.exports = Util;
