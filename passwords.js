// Ask user about the criteria the password must fulfill


/*
var howLong = prompt("How long do you need the password to be?"); // might need to be changed from a string to integer
var isUpper = confirm("Do you need uppercase characters?");
var isLower = confirm("Do you need lowercase characters?");
var alphaNum = confirm("Do you need an alphanumeric password?");
var isSymbol = confirm("Do you need symbols in your password?");



parseInt(howLong);
*/

// create function to gather checkbox data

function getPasswordOptions() {
  var howLong = document.getElementById('charLengthRangeNum').value;
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

  if (options.hasUppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperArray);
    guaranteeCharacters.push(randomize(upperArray))
  }

  if (options.hasUppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperArray);
    guaranteeCharacters.push(randomize(upperArray))
  }

  if (options.hasUppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperArray);
    guaranteeCharacters.push(randomize(upperArray))
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

function randomize() {

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById('#');
  passwordText.value = password;
}
var generateButton = document.querySelector("#button");
generateButton.addEventListener('click', writePassword);

// make arrays of characters
// finish randomize function
// textbox to output password
// make text area for password & make it read only