Validator = {

  validate: function(input, validInput) {
    return validInput.indexOf(input) != -1;
  }
}

module.exports = Validator;
