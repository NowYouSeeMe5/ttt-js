prompt = require('prompt-sync')();

var IO = {

  print: function(message) {
    console.log(message);
  },

  prompt: function(message) {
    return prompt(message);
  }
}

module.exports = IO;
