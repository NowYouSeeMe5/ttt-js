Evaluator = require('../src/Evaluator');

describe("Evaluator", function() {

  describe("is over", function() {
    it("is not over when there are empty spaces and nobody has won", function() {
      var notOver = ["X", "O", 0, 0, 0, "X", 0, 0, "O"];

      expect(Evaluator.isOver(notOver)).toEqual(false);
    });

    it("is over if there is a tie", function() {
      var tieGame = ["O", "X", "O", "X", "O", "X", "X", "O", "X"];

      expect(Evaluator.isOver(tieGame)).toEqual(true);
    });

    it("is over if someone has won even if there are still moves to be made", function() {
      var winningGame = ["O", "O", "X", "O", 0, 0, "O", 0, 0];

      expect(Evaluator.isOver(winningGame)).toEqual(true);
    });
  });

  describe("is tie game", function() {
    it("is a tie game when there are no more moves left", function() {
      var tieGame = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];

      expect(Evaluator.isTieGame(tieGame)).toEqual(true);
    });

    it("is not a tie game if someone has won", function() {
      var notTieGame = [0, "O", "X", "O", "X", "O", "X", "X", "X"];

      expect(Evaluator.isTieGame(notTieGame)).toEqual(false);
    });

    it("is not a tie if there are moves left", function() {
      var notOver = ["X", "O", 0, 0, 0, "X", 0, 0, "O"];

      expect(Evaluator.isTieGame(notOver)).toEqual(false);
    });
  });

  describe("winner", function() {
    it("returns 0 if there is no winner", function() {
      var unfinishedGame = [0, 0, "X", 0, "O", 0, 0, 0, 0];

      expect(Evaluator.winner(unfinishedGame)).toEqual(0);
    });

    it("returns 0 if there is a tie", function() {
      var tieGame = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];

      expect(Evaluator.winner(tieGame)).toEqual(0);
    });

    it("returns X if X has won horizontally", function() {
      var winningGame = ["X", "X", "X", 0, 0, 0, 0, 0, 0];

      expect(Evaluator.winner(winningGame)).toEqual("X");
    });

    it("returns O if O has won vertically", function() {
      var winningGame = ["O", 0, 0, "O", 0, 0, "O", 0, 0];

      expect(Evaluator.winner(winningGame)).toEqual("O");
    });

    it("returns O if O has won diagonally left to right", function() {
      var winningGame = ["O", 0, 0, 0, "O", 0, 0, 0, "O"];

      expect(Evaluator.winner(winningGame)).toEqual("O");
    });

    it("returns X if X has won diagonally right to left", function() {
      var winningGame = [0, 0, "X", 0, "X", 0, "X", 0, 0];

      expect(Evaluator.winner(winningGame)).toEqual("X");
    });
  });

  describe("whose turn", function() {
    it("returns X when there are an even number of ", function() {
      var board = ["X", "O", "X", "O", 0, 0, 0, 0, 0];

      player = Evaluator.whoseTurn(board, ["X", "O"]);

      expect(player).toEqual("X");
    });

    it("returns O when there are more X's on the board", function() {
      var board = ["X", "O", "X", 0, 0, 0, 0, 0, 0];

      player = Evaluator.whoseTurn(board, ["X", "O"]);

      expect(player).toEqual("O");
    });
  });

  describe("current depth", function() {
    it("returns 5 when there are 5 spaces left", function() {
      var board = ["X", "O", 0, "O", "X", 0, 0, 0, 0];

      currentDepth = Evaluator.currentDepth(board);

      expect(currentDepth).toEqual(5);
    });
  });
});
