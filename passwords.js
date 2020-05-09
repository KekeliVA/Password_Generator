// Ask user about the criteria the password must fulfill


/*
var howLong = prompt("How long do you need the password to be?"); // might need to be changed from a string to integer
var isUpper = confirm("Do you need uppercase characters?");
var isLower = confirm("Do you need lowercase characters?");
var alphaNum = confirm("Do you need an alphanumeric password?");
var isSymbol = confirm("Do you need symbols in your password?");



parseInt(howLong);
*/

// connecting range slider and num
const characterRange = document.getElementById('charLengthRange');
const characterNum = document.getElementById('charLengthNum');

charLengthRange.addEventListener('input', linkCharValue);
charLengthNum.addEventListener('input', linkCharValue);

function linkCharValue(e) {
  const value = e.target.value
  charLengthRange.value = value;
  charLengthNum.value = value;
  
};

// creating all the arrays
var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolArray = ['!','@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+','<', '>', '?', '/'];

// create function to gather checkbox data

function getPasswordOptions() {
  var howLong = document.getElementById('charLengthNum').value;
  var isUpper = document.getElementById('reqUpper');
  var isLower = document.getElementById('reqLower');
  var alphaNum = document.getElementById('reqAlphaNum');
  var isSymbol = document.getElementById('reqSymbols');

  // creating object to store these values
  var passwordOptions = {
    length: howLong,
    hasSpecialCharacters: isSymbol.checked,
    hasUppercaseCharacters: isUpper.checked,
    hasLowercaseCharacters: isLower.checked,
    hasAlphaNumbericCharacters: alphaNum.checked,
  };
  return passwordOptions;
};

function generatePassword() {
  // assigning options to return value of getPasswordOptions
  var options = getPasswordOptions();
  var result = [];

  var possibleCharacters = [];
  var guaranteeCharacters = [];

  if (options.hasUppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperArray);
    guaranteeCharacters.push(randomize(upperArray))
  }

  if (options.hasLowercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerArray);
    guaranteeCharacters.push(randomize(lowerArray))
  }

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(symbolArray);
    guaranteeCharacters.push(randomize(symbolArray))
  }

  if (options.hasAlphaNumbericCharacters) {
    possibleCharacters = possibleCharacters.concat(numberArray);
    guaranteeCharacters.push(randomize(numberArray))
  }
  
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = randomize(possibleCharacters);
    result.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteeCharacters.length; i++) {
    result[i] = guaranteeCharacters[i]
  }

  return result.join("");
};

// randomize needs to be able to randomly select elements of an array
function randomize(array) {
  var char = null;
  var i = Math.floor(Math.random() * array.length);
  char = array[i]
  
  return char
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('.password-display');
  passwordText.value = password;
  let resultEl = document.querySelector(".password-display");
  resultEl.innerText = password; // uncaught typeerror: cannot set property innerText of null
}
var generateButton = document.querySelector("#button");
generateButton.addEventListener('click', writePassword);

var isUpper = false;
var isLower = false;
var isSymbol = false;
var alphaNum = false;
var error = "Please select criteria";
let resultEl = document.querySelector(".password-display");
if ( !isUpper && !isLower && !isSymbol && !alphaNum) {
  resultEl.innerText = error;
}



// make arrays of characters
// finish randomize function
// textbox to output password
// make text area for password & make it read only