IO = require('../src/IO');
Util = require('../src/Util');

UI = {

  numberOfPlayersQuestion: "How many players: 0, 1, or 2?",

  getNumberOfPlayers: function(validNumbers) {
    IO.print(this.numberOfPlayersQuestion);
    IO.getInput(validNumbers);
  },

  printBoard: function(board) {
    var boardString = Util.boardToString(board);
    IO.print(boardString);
  },

  printFinalMessage: function(winner) {
  }
}

module.exports = UI
