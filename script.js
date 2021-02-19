// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"]

function generatePassword(){
        var passwordLength
        //     return "Password123!"; 
            var randomIndex = Math.floor(Math.random()*23)
            for (let i = 0; i < passwordLength; i++);

            
  // This should be a randomly generated variable that takes into account:
        //  passwordLength (user input - should we give them upper and lower bounds)
        //  passwordUpper = confirmTrue or False 
        //  passwordLower = True or False  
        //  passwordSpecial = True or False
        //  passwordNumber = True or False

}
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"]
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var speChar = ["~","!","@","#","$","%","^","*","(",")","-","_","+","="];

var passwordLength = prompt("How long would you like your password to be? \nPlease enter a number between 8 and 24")
if (passwordLength  >=24) { 
alert("Come on bro thats too long")        
} else {
        console.log(passwordLength)
}
var passwordUpper = confirm("Do you want UPPER CASE letters?")

var passwordLower = confirm("DO you want lower case letters?")

var passwordSpecial = confirm("Do you want $peci@l characters in your password?")

var passwordNumber = confirm("Do you want numbers in your password?")

var availChars = [];



console.log(passwordUpper)

console.log(passwordLower)

console.log(passwordSpecial)

console.log(passwordNumber)

if (passwordLower = true) {
        console.log("It is not false.")
} else {
        console.log("It is false I suppose!")
}


        // If they choose True True True True; when generating the PASSWORD it should choose AT LEAST one character from all 4: letters / lettersLower / specChar / numbers

        // If they choose True True True FALSE; when generating the PASSWORD it should choose AT LEAST one CHARACTER from  3 out of the 4: letters / lettersLower / specChar

        // If they choose True True FALSE FALSE; when generating the PASSWORD it should choose AT LEAST one Character from 2 out of the 4: letters / lettersLower

        // If they choose True FALSE FALSE FALSE; when generating the PASSWORD it should choose AT LEAST one Character from 1 out of the 4: Letters

        // If they choose FALSE FALSE FALSE FALSE; when generating the PASSWORD it should TELL THEM THEY NEED AT LEAST ONE TRUE STATEMENT TO GENERATE A PW

        // If they choose FALSE FALSE FALSE TRUE; when generating the PASSWORD it should choose AT LEAST one character from 1 out of the 4: numbers

        // If they choose FALSE FALSE TRUE TRUE; when generating the PASSWORD it should choose AT LEAST one Character from 2 out of the 4: specChar / numbers

        // If they choose FALSE TRUE TRUE TRUE; when generating the PASSWORD it should choose AT LEAST one CHARACTER from  3 out of the 4: lettersLower / specChar / numbers



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
