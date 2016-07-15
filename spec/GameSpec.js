Game = require('../src/Game');
HumanPlayer = require('../src/HumanPlayer');
AiPlayer = require('../src/AiPlayer');
UI = require('../src/UI');

describe("setup", function() {

  beforeEach(function() {
    spyOn(Game, 'play');
  });

  it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
    spyOn(UI, 'getNumberOfPlayers').and.returnValue(0);

    Game.setup();

    expect(Game.play).toHaveBeenCalledWith([AiPlayer.move, AiPlayer.move], Board.newBoard());
  });

  it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
    spyOn(UI, 'getNumberOfPlayers').and.returnValue(1);

    Game.setup();

    expect(Game.play).toHaveBeenCalledWith([HumanPlayer.move, AiPlayer.move], Board.newBoard());
  });

  it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
    spyOn(UI, 'getNumberOfPlayers').and.returnValue(2);

    Game.setup();

    expect(Game.play).toHaveBeenCalledWith([HumanPlayer.move, HumanPlayer.move], Board.newBoard());
  });
});

describe("play game", function() {

  var isOverLoops = 2;

  beforeEach(function() {
    spyOn(Board, 'setSpace');

    spyOn(UI, 'printBoard');
    spyOn(UI, 'displayFinalMessage');

    spyOn(Evaluator, 'isOver').and.callFake(function() {
      if (isOverLoops > 0) {
        isOverLoops--;
        return false;
      }
      return true;
    });
  });

  it("prints the final game message if the game is over", function() {
    isOverLoops = 0;

    Game.play(null, "board");

    expect(UI.displayFinalMessage.calls.argsFor(0)).toEqual(["board"]);
  });

  var test1 = function(board) { return 1; }
  var test2 = function(board) { return 2; }

  var testFunctions = [test1, test2];

  it("uses the move function in the first spot of the playerMoves array on the first loop to make a move", function() {
    isOverLoops = 1;

    Game.play(testFunctions, null);

    expect(Board.setSpace.calls.argsFor(0)[0]).toEqual(test1());
  });

  it("uses the move function that was originally in the second spot of the playersMoves array on the second loop to make a move on a board", function() {
    isOverLoops = 2;

    Game.play(testFunctions, null);

    expect(Board.setSpace.calls.argsFor(1)[0]).toEqual(test2());
  });

  it("prints the board every time the game is not over", function() {
    isOverLoops = 3;

    Game.play(testFunctions, null);

    expect(UI.printBoard.calls.count()).toEqual(3);
  });
});
