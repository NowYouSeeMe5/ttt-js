Evaluator = {
  isOver: function(board) {
    if (Evaluator.isTieGame(board) || (Evaluator.winner(board) != 0)) {
      return true;
    }
    return false;
  },

  isTieGame: function(board) {
    for(var i = 0; i < board.length; i++) {
      if (board[i] == 0 || Evaluator.winner(board) != 0) {
        return false;
      }
    }
    return true;
  },

  winner: function(board) {
    var winners = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                   [0, 3, 6], [1, 4, 7], [2, 5, 8],
                   [0, 4, 8], [2, 4, 6]];


    var sliceBoard = function(winner) {
      return winner.map(function(index) {
        return board[index];
      });
    }

    var allTheSame = function(array) {
      return !array.some(function(value, index, array){
        return value !== array[0];
      });
    }

    var boardSlices = winners.map(function(winner) {
       return sliceBoard(winner);
    });


    for (var i = 0; i < boardSlices.length; i++) {
      if (allTheSame(boardSlices[i]) && boardSlices[i][0] != 0) {
        return boardSlices[i][0];
      }
    }

    return 0;
  },

  whoseTurn: function(board, playerPieces) {
    var player1Count = player2Count = 0;

    for (var i = 0; i < board.length; i++) {
      if (board[i] == playerPieces[0]) {
        player1Count++;
      } else if (board[i] == playerPieces[1]) {
        player2Count++;
      }
    }

    return player1Count == player2Count ? playerPieces[0] : playerPieces[1];
  },

  currentDepth: function(board) {
    var zeroCount = 0;
    for (var i = 0; i < board.length; i++) {
      if (board[i] == 0) {
        zeroCount++;
      }
    }
    return zeroCount;
  }
};

module.exports = Evaluator;
