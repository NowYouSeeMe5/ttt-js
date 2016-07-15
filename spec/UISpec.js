UI = require('../src/UI');
IO = require('../src/IO');
Util = require('../src/Util');

describe("getNumberOfPlayers", function() {

  beforeEach(function() {
    spyOn(IO, 'print');
    spyOn(IO, 'getInput');
  });

  it("prints the number of players question", function() {
    UI.getNumberOfPlayers();

    expect(IO.print).toHaveBeenCalledWith(UI.numberOfPlayersQuestion);
  });

  it("gets the input from the user by passing in the valid number of players", function() {
    var validNumberOfPlayers = [0, 1, 2];
    UI.getNumberOfPlayers(validNumberOfPlayers);

    expect(IO.getInput).toHaveBeenCalledWith(validNumberOfPlayers);
  });
});

describe("printBoard", function() {

  it("Uses the util class to create a string representation of a board", function() {
    spyOn(Util, 'boardToString');

    UI.printBoard("board");

    expect(Util.boardToString).toHaveBeenCalledWith("board");
  });

  it("Prints the string version of the board returned from Util.boardToString", function() {
    spyOn(IO, 'print');
    spyOn(Util, 'boardToString').and.returnValue("board-string");

    UI.printBoard("board");

    expect(IO.print).toHaveBeenCalledWith("board-string");
  });
});
