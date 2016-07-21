Evaluator = require('../src/Evaluator');
Board = require('../src/Board');

AiPlayer = {

  move: function(board, playerPieces) {
    var aiPiece = Evaluator.whoseTurn(board, playerPieces);
    var nextBoards = AiPlayer.nextBoards(board, aiPiece);
    var currentDepth = Evaluator.currentDepth(board);

    var scoredIndexes = nextBoards.map(function(nextBoard) {
      return [nextBoard[0], AiPlayer.minimax(nextBoard[1], currentDepth, playerPieces, aiPiece)];
    }, AiPlayer);

    return AiPlayer.bestIndex(scoredIndexes);
  },

  minimax: function(board, depth, playerPieces, aiPiece) {

    if (depth == 0 || Evaluator.isOver(board)) {
      return AiPlayer.scoreBoard(board, aiPiece);
    }

    var nextPlayer = Evaluator.whoseTurn(board, playerPieces);
    var nextBoards = AiPlayer.nextBoards(board, nextPlayer);

    if (nextPlayer == aiPiece) {
      var bestScore = -100;
      for (var i = 0; i < nextBoards.length; i++) {
        var nextScore = AiPlayer.minimax(nextBoards[i][1], depth - 1, playerPieces, aiPiece);
        bestScore = Math.max(nextScore, bestScore);
      }
      return bestScore;
    } else {
      var worstScore = 100;
      for (var i = 0; i < nextBoards.length; i++) {
        var nextScore = AiPlayer.minimax(nextBoards[i][1], depth - 1, playerPieces, aiPiece);
        worstScore = Math.min(nextScore, worstScore);
      }
      return worstScore;
    }
  },

  bestIndex: function(scoredIndexes) {
    var bestScore = -100;
    var bestIndex;

    for(i = 0; i < scoredIndexes.length; i++) {
      if (scoredIndexes[i][1] > bestScore) {
        bestIndex = scoredIndexes[i][0];
        bestScore = scoredIndexes[i][1];
      }
    }

    return bestIndex;
  },

  nextPlayer: function(currentPlayer, playerPieces) {
    for (var i = 0; i < playerPieces.length; i++) {
      if (playerPieces[i] != currentPlayer) {
        return playerPieces[i];
      }
    }
  },


  nextBoards: function(board, nextPlayer) {
    return board.map(function(piece, i) {
      if (piece == 0) {
        return [i, Board.setSpace(board, i, nextPlayer)];
      }
    }).filter(function(board){
      return board
    });
  },

  scoreBoard: function(board, aiPiece) {
    var winner = Evaluator.winner(board)

    if (winner == aiPiece) {
      return 10;
    } else if (winner != 0) {
      return -10;
    }
    return 0;
  }
};

module.exports = AiPlayer;
