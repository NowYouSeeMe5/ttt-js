HumanPlayer = require('../src/HumanPlayer');

describe("Human Player", function() {
  describe("move", function() {
    it("uses the ui to get a move using the available spaces left on the board", function() {
      spyOn(UI, 'getMove');

      var board = [0, "X", 0, "X", 0, "O", 0, "O", 0];
      HumanPlayer.move(board);

      expect(UI.getMove).toHaveBeenCalledWith([1, 3, 5, 7, 9]);
    });
  });

  describe("possible moves", function() {
    it("returns an array of empty space indexes incremented by 1 for human readibility", function() {
      var board = [0, 0, 0, "X", "O", "X", "O", "X", "O"];

      var possibleMoves = HumanPlayer.possibleMoves(board);
      var expectedMoves = [1, 2, 3];

      expect(possibleMoves).toEqual(expectedMoves);
    });
  });
});
