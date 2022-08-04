// Assignment code here

//Create the Arrays
var Upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var Lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Special = ["U+0020","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
var Numbers = ["0","1","2","3","4","5","6","7","8","9"]

// Declare the variables
var passLength = "";
var UpCase;
var LwCase;
var SpcChar;
var NmChar;

// Define generatePassword
function generatePassword() {
  console.log("Button is now working.");
// Add prompts when button is clicked pertaining to password criteria
  // Length of password between 8-128 characters
  var passLength = (window.prompt("How many character, between 8 and 128, would you like in you password?"))
    // Loop prompt if response is not within specified parameters
    while(passLength <= 7 || passLength >= 129) {
      var passLength = (window.prompt("How many character, between 8 and 128, would you like in you password?"))
    }
  // Will uppercase, lowercase, numbers and/or special characters be used?
  var UpCase = (window.confirm("Click OK to confirm including uppercase characters."))

  var LwCase = (window.confirm("Click OK to confirm including lowercase characters."))

  var SpcChar = (window.confirm("Click OK to confirm including special characters."))

  var NmChar = (window.confirm("Click OK to confirm including numerical characters."))
    // Loop prompts if all display false
    while(UpCase === false && LwCase === false && SpcChar === false && NmChar === false)
      var UpCase = (window.confirm("Click OK to confirm including uppercase characters."))
      var LwCase = (window.confirm("Click OK to confirm including lowercase characters."))  
      var SpcChar = (window.confirm("Click OK to confirm including special characters."))
      var NmChar = (window.confirm("Click OK to confirm including numerical characters."))
//Validate input and at least one character of each selected criteria is used
  var ChosenCharacters = []
  if (UpCase) {
    ChosenCharacters = ChosenCharacters + Upper
  }
  if (LwCase) {
    ChosenCharacters = ChosenCharacters + Lower
  }
  if (SpcChar) {
    ChosenCharacters = ChosenCharacters + Special
  }
  if (NmChar) {
    ChosenCharacters = ChosenCharacters + Numbers
  }
//Display generated password(return)
  var DisplayPass = ""

  for (var i = 0; i < passLength; i++) {
    DisplayPass = DisplayPass + ChosenCharacters[Math.floor(Math.random() * ChosenCharacters.length)]
  }
  return DisplayPass
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
