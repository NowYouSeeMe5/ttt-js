Validator = {

  validate: function(input, validInput) {
    if (validInput.indexOf(input) != -1) {
      return true;
    }
    return false;
  }
}

module.exports = Validator;
