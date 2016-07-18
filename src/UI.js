IO = require('../src/IO');
Util = require('../src/Util');
Validator = require('../src/Validator');

UI = {

  errorMessage: "Please select from the following: ",
  numberOfPlayersQuestion: "How many players? ",
  tieMessage: "That's a nice looking tie!",
  winnerMessage: "Congratulations on your win ",

  printBoard: function(board) {
    var boardString = Util.boardToString(board);
    IO.print(boardString);
  },

  printFinalMessage: function(winner) {
    IO.print(this.winnerMessage + winner);
  },

  printTieMessage: function() {
    IO.print(this.tieMessage);
  },

  getNumberOfPlayers: function(validNumbers) {
    var input = this.getValidInput(this.numberOfPlayersQuestion, validNumbers);
  },

  printErrorMessage: function(validInput) {
    IO.print(this.errorMessage + validInput);
  },

  getValidInput: function(message, validInput) {
    var input = IO.prompt(message + validInput);

    while(!Validator.validate(input, validInput)) {
      this.printErrorMessage(validInput);
      input = IO.prompt(message + validInput);
    }

    return input;
  }
}

module.exports = UI;
