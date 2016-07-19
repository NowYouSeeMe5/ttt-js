Board = require('../src/board');

describe("Board", function() {
  describe("new board", function() {
    it("returns a board with 9 empty spaces when given a size of 3", function() {
      var newBoard = Board.newBoard(3);

      expect(newBoard).toEqual(Array(9).fill(0));
    });

    it("returns a board with 16 empty spaces when given a size of 4", function() {
      var newBoard = Board.newBoard(4);

      expect(newBoard).toEqual(Array(16).fill(0));
    });
  });

  describe("set space", function() {
    var board = Board.newBoard(3);

    it("returns a board with the first spot occupied by an 'X'", function() {
      var newBoard = Board.setSpace(board, "X", 0);

      expect(newBoard[0]).toEqual("X");
    });

    it("replaces whatever piece is in the spot trying to be set", function() {
      var newBoard = Board.setSpace(board, "X", 0);
      newBoard = Board.setSpace(board, "O", 0);

      expect(newBoard[0]).toEqual("O");
    });

    it("returns a new board without mutating the original board", function() {
      var newBoard = Board.setSpace(board, "X", 0);

      expect(board).not.toEqual(newBoard);
    });
  });
});
