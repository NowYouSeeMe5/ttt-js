Game = require('../src/Game');
HumanPlayer = require('../src/HumanPlayer');
AiPlayer = require('../src/AiPlayer');
UI = require('../src/UI');

describe("setup", function() {

  beforeEach(function() {
    spyOn(Game, 'playGame');
  });

  it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
    spyOn(UI, 'getNumberOfPlayers').and.returnValue(0);

    Game.setup();

    expect(Game.playGame).toHaveBeenCalledWith(AiPlayer.move, AiPlayer.move);
  });

  it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
    spyOn(UI, 'getNumberOfPlayers').and.returnValue(1);

    Game.setup();

    expect(Game.playGame).toHaveBeenCalledWith(HumanPlayer.move, AiPlayer.move);
  });

  it("sets a human player as player 1 and an ai player as player 2 when the input is 1", function() {
    spyOn(UI, 'getNumberOfPlayers').and.returnValue(2);

    Game.setup();

    expect(Game.playGame).toHaveBeenCalledWith(HumanPlayer.move, HumanPlayer.move);
  });
});
