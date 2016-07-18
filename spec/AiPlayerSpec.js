AiPlayer = require('../src/AiPlayer');

describe("AiPlayer", function() {
  describe("move", function() {

  });

  describe("score board", function() {
    it("scores an empty board as 0", function() {
      var emptyBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

      expect(AiPlayer.scoreBoard(emptyBoard, "X")).toEqual(0);
    });

    it("scores a win for the maximizing piece as 10", function() {
      var xWin = [0, 0, "X", 0, "X", 0, "X", 0, 0];

      expect(AiPlayer.scoreBoard(xWin, "X")).toEqual(10);
    });

    it("scores a win for anything but the  maximizing piece as -10", function() {
      var oWin = [0, 0, "O", 0, "O", 0, "O", 0, 0];

      expect(AiPlayer.scoreBoard(oWin, "X")).toEqual(-10);
    });
  });
});
