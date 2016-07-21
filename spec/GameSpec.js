AiPlayer = require('../src/AiPlayer');
Evaluator = require('../src/Evaluator');
Game = require('../src/Game');
HumanPlayer = require('../src/HumanPlayer');
UI = require('../src/UI');

describe("Game", function() {
  describe("start", function() {

    beforeEach(function() {
      spyOn(Game, 'play');
    });

    it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
      spyOn(UI, 'getNumberOfPlayers').and.returnValue(0);

      Game.start();

      expect(Game.play).toHaveBeenCalledWith([AiPlayer.move, AiPlayer.move], Board.newBoard(3));
    });

    it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
      spyOn(UI, 'getNumberOfPlayers').and.returnValue(1);

      Game.start();

      expect(Game.play).toHaveBeenCalledWith([HumanPlayer.move, AiPlayer.move], Board.newBoard(3));
    });

    it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
      spyOn(UI, 'getNumberOfPlayers').and.returnValue(2);

      Game.start();

      expect(Game.play).toHaveBeenCalledWith([HumanPlayer.move, HumanPlayer.move], Board.newBoard(3));
    });
  });

  describe("play game", function() {
    var isOverLoops = 2;

    beforeEach(function() {
      spyOn(Board, 'setSpace');

      spyOn(Game, 'end');

      spyOn(UI, 'printBoard');
      spyOn(UI, 'printTieMessage');
      spyOn(UI, 'printWinnerMessage');

      spyOn(Evaluator, 'isOver').and.callFake(function() {
        if (isOverLoops > 0) {
          isOverLoops--;
          return false;
        }
        return true;
      });
    });

    var test1 = function(board) { return 1; }
    var test2 = function(board) { return 2; }

    var testFunctions = [test1, test2];

    it("uses the move function in the first spot of the playerMoves array on the first loop to make a move", function() {
      isOverLoops = 1;

      Game.play(testFunctions, null);

      expect(Board.setSpace).toHaveBeenCalledWith(null, test1(), Game.gamePieces[0]);
    });

    it("uses the move function that is in the second spot of the playersMoves array on the second loop to make a move on a board", function() {
      isOverLoops = 2;

      Game.play(testFunctions, null);

      expect(Board.setSpace.calls.argsFor(1)).toEqual([undefined, test2(), Game.gamePieces[1]]);
    });

    it("prints the board every time the game is not over plus once just before the final message", function() {
      isOverLoops = 3;

      Game.play(testFunctions, null);

      expect(UI.printBoard.calls.count()).toEqual(4);
    });

    it("calls end with board", function() {
      isOverLoops = 0;
      var board = "board";

      Game.play(testFunctions, board);

      expect(Game.end).toHaveBeenCalledWith(board);
    });
  });

  describe("end", function() {

    beforeEach(function() {
      spyOn(UI, 'printWinnerMessage');
      spyOn(UI, 'printTieMessage');
    });

    it("prints the final game message with an X when someone wins and it is X's turn", function() {
      var board = ["X", "X", "X", 0, 0, 0, 0, 0, 0];

      Game.end(board);

      expect(UI.printWinnerMessage).toHaveBeenCalledWith("X");
    });

    it("prints the final game message with an O when O wins", function() {
      var board = ["O", "O", "O", 0, 0, 0, 0, 0, 0];

      Game.end(board);

      expect(UI.printWinnerMessage).toHaveBeenCalledWith("O");
    });

    it("prints the tie game message if the game is over and there is no winner", function() {
      var board = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];

      Game.end(board);

      expect(UI.printTieMessage.calls.count()).toEqual(1);
    });
  });
});
