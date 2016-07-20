Util = require('../src/Util');

describe("Util", function() {
  describe("board to string", function() {
    it("converts an empty board array into a printable empty board", function() {
      var emptyBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      var expectedBoardString = "123\n456\n789\n";

      var boardString = Util.boardToString(emptyBoard);

      expect(boardString).toEqual(expectedBoardString);
    });

    it("converts a non empty board into a board string", function() {
      var nonEmptyBoard = ["X", 0, "X", "O", 0, "O", "X", 0, 0];
      var expectedBoardString = "X2X\nO5O\nX89\n";

      var boardString = Util.boardToString(nonEmptyBoard);

      expect(boardString).toEqual(expectedBoardString);
    });
  });

  describe("board size", function() {
    it("returns 3 for a 3X3 sized board", function() {
      var board = [0, 0, "X", "O", 0, 0, "X", 0, 0];

      expect(Util.boardSize(board)).toEqual(3);
    });

    it("returns 4 for a 4X4 size board", function() {
      var board = [0, 0, "X", "O", "X", "O", 0, 0, 0, 0, "X", 0, "O", 0, 0, "X"];

      expect(Util.boardSize(board)).toEqual(4);
    });
  });

  describe("int to string", function() {
    it("returns the string representation of the integer", function() {
      expect(Util.intToString(5)).toEqual("5");
    });
  });
});
