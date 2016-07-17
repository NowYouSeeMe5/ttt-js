IO = require('../src/IO');

describe("IO", function() {
  describe("print", function() {
    it("uses the console to print the message to the command line", function() {
      spyOn(console, 'log');

      var testMessage = "test";
      IO.print(testMessage);

      expect(console.log).toHaveBeenCalledWith(testMessage);
    });
  });
});
