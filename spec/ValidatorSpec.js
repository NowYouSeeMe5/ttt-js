Validator = require('../src/Validator');

describe("Validator", function() {
  describe("validate", function() {
    var validInput = [1, 2, 3];
    console.log(typeof validInput);

    it("returns true if the input is in the valid input", function() {
      expect(Validator.validate(1, validInput)).toBe(true);
    });

    it("returns false if the input is not in the valid input", function() {
      expect(Validator.validate(0, validInput)).toBe(false);
    });

    it("returns false if the input is a string as opposed to an int", function() {
      expect(Validator.validate("1", validInput)).toBe(false);
    });
  });
});
