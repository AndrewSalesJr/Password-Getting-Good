// Assignment code here
// Declare the variables
var passLength = "";



// Define generatePassword
function generatePassword() {
  console.log("Button is now working.");
// Add prompts when button is clicked pertaining to password criteria
  // Length of password between 8-128 characters
  var passLength = (prompt("How many character, between 8 and 128, would you like in you password?"))
  // Will uppercase, lowercase, numbers and/or special characters be used?
//Validate input and at least one character of each selected criteria is used

//Display generated password(return)

  return "Placeholder Password!"
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
