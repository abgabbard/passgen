// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){

    return "Password123!";  // This should be a randomly generated number that takes into account:
  // password length (user input)

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
