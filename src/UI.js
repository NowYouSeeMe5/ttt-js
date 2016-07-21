IO = require('../src/IO');
Util = require('../src/Util');
Validator = require('../src/Validator');

UI = {

  errorMessage: "There was an error, please select from the following: ",
  numberOfPlayersQuestion: "How many players? ",
  tieMessage: "That's a nice looking tie!",
  winnerMessage: "Congratulations on your win, ",
  moveQuestion: "Please choose a move from the following: ",
  prompt: " > ",

  printBoard: function(board) {
    var boardString = Util.boardToString(board);
    IO.print(boardString);
  },

  printWinnerMessage: function(winner) {
    IO.print(UI.winnerMessage + winner);
  },

  printTieMessage: function() {
    IO.print(UI.tieMessage);
  },

  getNumberOfPlayers: function(validNumbers) {
    validNumbers = validNumbers.map(Util.intToString);
    response = UI.getValidInput(UI.numberOfPlayersQuestion, validNumbers);
    return parseInt(response);
  },

  getMove: function(validMoves) {
    validMoves = validMoves.map(Util.intToString);
    response = UI.getValidInput(UI.moveQuestion, validMoves);
    return parseInt(response) - 1;
  },

  printErrorMessage: function(validInput) {
    IO.print(UI.errorMessage + validInput);
  },

  getValidInput: function(message, validInput) {
    var input = IO.prompt(message + validInput + UI.prompt);

    while(!Validator.validate(input, validInput)) {
      UI.printErrorMessage(validInput);
      input = IO.prompt(message + validInput + UI.prompt);
    }

    return input;
  }
}

module.exports = UI;
