// When a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category
// When the message appears, the mediation icon disappears from the message area
// select message option
  // query seleltors
    // [] radios
    // [] get message button
    // [] message display section

var getSelectedRadio = document.querySelector('input[name='selection']:checked');
var receiveMessageButton = document.querySelector('.button');
var messageDisplay = document.querySelector('.received-message');
// Do i need messageDisplay query?
