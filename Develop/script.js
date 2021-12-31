// Assignment code here
var randomChar = function(passwordLength, allowUppercase, allowLowercase, allowSymbols) {
  var result = "";
  /* Create characters array */
  var characters = ""; 

  if (allowUppercase){
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characters += uppercase;
  } 
  if (allowLowercase){
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    characters += lowercase;
  }
  
  if (allowSymbols) {
    var symbols = "0123456789!@#$%^&*";
    characters += symbols;
  }
  
  for (var i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  if (!allowUppercase && !allowLowercase && !allowSymbols) {
    window.confirm("You must select at least one character type!")
    return generatePassword();
  }
  return result;
}



function generatePassword() {
  var charLength = window.prompt("Please enter a character length for your password between 8 and 128 characters.");
    if (charLength < 8 || charLength > 128) {
      window.confirm("Character length must be between 8 and 128");
      return generatePassword();
    }
  var confirmUpper = window.confirm("Would you like to include uppercase letters?");
  var confirmLower = window.confirm("Would you like to include lowercase letters?");
  var confirmSymbols = window.confirm("Would you like to include special characters and/or numbers?");
  var password = randomChar(charLength, confirmUpper, confirmLower, confirmSymbols);
  
  return password;  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);