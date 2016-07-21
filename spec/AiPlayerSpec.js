AiPlayer = require('../src/AiPlayer');

describe("AiPlayer", function() {
  describe("move", function() {
    var playerPieces = ["X", "O"];

    it("returns 8 to block", function() {
      var board = [
        "O", 0, "X",
        "X","O","X",
        "O","X", 0];

      var move = AiPlayer.move(board, playerPieces);

      expect(move).toEqual(8);
    });

    it("moves in 5 as the second player", function() {
      var board = [
        "X", 0, 0,
         0 , 0, 0,
         0 , 0, 0];

      var move = AiPlayer.move(board, playerPieces);

      expect(move).toEqual(4);
    });

    it("moves in 1 to prevent opponent from having two ways to win", function() {
      var board = [
        0, 0, "X",
        0, "O", 0,
        "X", 0, 0];

      var move = AiPlayer.move(board, playerPieces);

      expect(move).toEqual(1);
    });
  });

  describe("minimax", function() {
    var playerPieces = ["X", "O"];
    var aiPiece = "X";
    var board = [0, "X", "O", 0, 0, 0, 0, 0, 0];
    var depth = 7;

    it("scores a board that will at best tie as a 0", function() {
      var score = AiPlayer.minimax(board, depth, playerPieces, aiPiece);

      expect(score).toEqual(0);
    });

    it("scores a board for X that will at best win as a 10", function() {
      var depth = 5;
      var board = [0, "X", "X", "O", "O", 0, 0, 0, 0];

      var score = AiPlayer.minimax(board, depth, playerPieces, aiPiece);

      expect(score).toEqual(10);
    });

    it("scores a board for X that will certainly lose as a -10", function() {
      var board = [0, "O", "O", "X", 0, 0, 0, 0, 0];

      var score = AiPlayer.minimax(board, depth, playerPieces, aiPiece);

      expect(score).toEqual(-10);
    });
  });

  describe("score board", function() {
    it("scores an empty board as 0", function() {
      var emptyBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

      var score = AiPlayer.scoreBoard(emptyBoard, "X");

      expect(score).toEqual(0);
    });

    it("scores a tie as 0", function() {
      var tieGame = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];

      var score = AiPlayer.scoreBoard(tieGame, "X");

      expect(score).toEqual(0);
    });

    it("scores a win for the ai piece as 10", function() {
      var xWin = [0, 0, "X", 0, "X", 0, "X", 0, 0];

      expect(AiPlayer.scoreBoard(xWin, "X")).toEqual(10);
    });

    it("scores a win for anything but the ai piece as -10", function() {
      var oWin = [0, 0, "O", 0, "O", 0, "O", 0, 0];

      expect(AiPlayer.scoreBoard(oWin, "X")).toEqual(-10);
    });

    it("scores a win for the ai piece as 10 when the ai piece is O", function() {
      var oWin = [0, 0, "O", 0, "O", 0, "O", 0, 0];

      var score = AiPlayer.scoreBoard(oWin, "O");

      expect(score).toEqual(10);
    });
  });

  describe("possible next boards", function() {
    it("returns an array of all of the next possible move indexes and their respective board states", function() {
      var board = [0, "O", 0, "O", "O", "O", "O", "O", "O"];

      var expectedBoards = [[0, ["X", "O", 0, "O", "O", "O", "O", "O", "O"]], [2, [0, "O", "X", "O", "O", "O", "O", "O", "O"]]];
      var nextBoards = AiPlayer.nextBoards(board, "X");

      expect(nextBoards).toEqual(expectedBoards);
    });
  });

  describe("best index", function() {
    it("returns the best index when given an array of move-score tuples", function() {
      var tuples = [[0, 10], [2, 0], [3, -10]];

      var bestIndex = AiPlayer.bestIndex(tuples);

      expect(bestIndex).toEqual(0);
    });

    it("returns the first index if all of the tuples are the same", function() {
      var tuples = [[0, 0], [1, 0], [3, 0]]

      var bestIndex = AiPlayer.bestIndex(tuples);

      expect(bestIndex).toEqual(0);
    });
  });
});
