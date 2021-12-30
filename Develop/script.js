// Assignment code here
var randomChar = function() {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}



function generatePassword() {
  var charLength = window.prompt("Please enter a character length for your password between 8 and 128 characters.");
    console.log(charLength);

  var confirmUpper = window.confirm("Would you like to use uppercase letters?"); 
    if (confirmUpper) {
      randomChar();
    }

  var confirmLower = window.confirm("Would you like to use lowercase letters?");
    if (confirmLower) {

    }
     
}

console.log(randomChar);
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
