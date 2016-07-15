UI = require('../src/UI');
IO = require('../src/IO');

describe("getNumberOfPlayers", function() {

  beforeEach(function() {
    spyOn(IO, 'print');
    spyOn(IO, 'getInput');
  });

  it("prints the number of players question", function() {
    UI.getNumberOfPlayers();

    expect(IO.print.calls.argsFor(0)[0]).toEqual(UI.numberOfPlayersQuestion);
  });

  it("gets the input from the user", function() {
    UI.getNumberOfPlayers();

    expect(IO.getInput.calls.count()).toEqual(1);
  });
});
