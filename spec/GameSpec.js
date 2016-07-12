Game = require('../src/Game');
HumanPlayer = require('../src/HumanPlayer');
AiPlayer = require('../src/AiPlayer');
UI = require('../src/UI');

describe("setup", function() {
  it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
    spyOn(UI, "getNumberOfPlayers").and.returnValue(1);

    Game.setup();

    expect(HumanPlayer.move).toEqual(Game.player1);
    expect(AiPlayer.move).toEqual(Game.player2);
  })
})
