IO = require('../src/IO');

UI = {

  numberOfPlayersQuestion: "How many players: 0, 1, or 2?",

  getNumberOfPlayers: function() {
    IO.print(this.numberOfPlayersQuestion);

    IO.getInput();
  },

  printBoard: function() {

  },

  displayFinalMessage: function() {

  }
}

module.exports = UI
