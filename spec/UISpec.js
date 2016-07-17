UI = require('../src/UI');
IO = require('../src/IO');
Util = require('../src/Util');
Validator = require('../src/Validator');

describe("UI", function() {

  beforeEach(function() {
    spyOn(IO, 'print');
  });

  describe("printErrorMessage", function() {
    it("Prints the error message combined with the valid input", function() {
      var validInput = [1, 2, 3];

      UI.printErrorMessage(validInput);

      expect(IO.print).toHaveBeenCalledWith(UI.errorMessage + validInput);
    });
  });

  describe("printBoard", function() {
    it("Uses the util class to create a string representation of a board", function() {
      spyOn(Util, 'boardToString');

      UI.printBoard("board");

      expect(Util.boardToString).toHaveBeenCalledWith("board");
    });

    it("Prints the string version of the board returned from Util.boardToString", function() {
      spyOn(Util, 'boardToString').and.returnValue("board-string");

      UI.printBoard("board");

      expect(IO.print).toHaveBeenCalledWith("board-string");
    });
  });

  describe("Print final message", function() {
    it("prints the winning game message with the winning piece interpolated as part of the message", function() {

      UI.printFinalMessage("X");

      var expectedString = UI.winnerMessage + "X";
      expect(IO.print).toHaveBeenCalledWith(expectedString);
    });
  });

  describe("Print tie message", function() {
    it("prints the tie game message", function() {

      UI.printTieMessage();

      expect(IO.print).toHaveBeenCalledWith(UI.tieMessage);
    });
  });

  describe("getValidInput", function() {
    var validInput = "valid-input";
    var invalidInput = "invalid-input";
    var promptLoops = 0;

    beforeEach(function() {
      spyOn(IO, 'prompt').and.callFake(function() {
        if (promptLoops > 0) {
          promptLoops--;
          return invalidInput;
        }
        return validInput;
      });
    });

    it("returns the input if the input is valid", function() {
      var input = UI.getValidInput(null, [validInput]);

      expect(input).toBe(validInput);
    });

    it("prints an error message when the input is not valid", function() {
      promptLoops = 1;

      UI.getValidInput(null, [validInput]);

      expect(IO.print).toHaveBeenCalledWith(UI.errorMessage + validInput);
    });

    it("prompts for input every time there is a failure", function() {
      promptLoops = 2;

      UI.getValidInput(null, [validInput]);

      expect(IO.prompt.calls.count()).toEqual(3);
    });

    it("calls prompt with the message and valid together", function() {
      promptLoops = 0;

      var message = "message";
      UI.getValidInput(message, [validInput]);

      expect(IO.prompt).toHaveBeenCalledWith(message + validInput);
    });
  });
});
