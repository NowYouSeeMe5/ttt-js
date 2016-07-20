AiPlayer = require('../src/AiPlayer');
Evaluator = require('../src/Evaluator');
Game = require('../src/Game');
HumanPlayer = require('../src/HumanPlayer');
UI = require('../src/UI');

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

    spyOn(UI, 'printBoard');
    spyOn(UI, 'printFinalMessage');

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

  it("prints the board every time the game is not over", function() {
    isOverLoops = 3;

    Game.play(testFunctions, null);

    expect(UI.printBoard.calls.count()).toEqual(3);
  });

  it("prints the final game message with an X when it is X's turn", function() {
    isOverLoops = 0;

    Game.play(testFunctions, null);

    expect(UI.printFinalMessage).toHaveBeenCalledWith("X");
  });

  it("prints the final game message with an O when it is O's turn", function() {
    isOverLoops = 1;

    Game.play(testFunctions, null);

    expect(UI.printFinalMessage).toHaveBeenCalledWith("O");
  });
});
