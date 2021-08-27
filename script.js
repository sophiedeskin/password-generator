var generateBtn = document.querySelector("#generate");
// Why do we have these strings here? To be able to store data
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()_+";
function getRandom(str) {
  // What is going on here? Random number generator based on the length user puts in
  var randomIndex = Math.floor(Math.random() * str.length);
  // and here? Returning the random string to the page
  return str[randomIndex];
}
// Write password to the #password input
function writePassword() {
  // What is the difference between return and console log? Return gives an output on the page and console log only logs info in the console
  // What happens if we console log our password instead of returning it? It stores our password in the console instead of actually giving an output
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  // Ask the user for their password criteria
  // 8 characters and no more than 128 characters
  // Prompt the user for the password length
  var length = prompt("How long would you like your password to be?");
  // If the length is less than 8 or more than 128
  if (length < 8 || length > 128) {
    // alert the user that they messed up
    alert("Your password must be between 8 and 128");
    // exit the function early, (use the return keyword)
    return "";
  }
  // What are we doing here? Asking the user what kind of characters they want in their password.
  var useLowercase = confirm("Would you like to use lower case characters?");
  var useUppercase = confirm("Would you like to use upper case characters?");
  var useNumeric = confirm("Would you like to use numeric characters?");
  var useSpecial = confirm("Would you like to use special characters?");
  // Why is this if statement necessary? 
  //User has to have a minimum of at least one selection to make the prompt run.
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("We need at least one option to be chosen.");
    return "";
  }
  var password2 = ""
  // generate the password based off the criteria
 for (let index = 0; index < length; index++) {
 if (useLowercase) {
   password2 += getRandom(lowercase)
 }
 //adding the lowercase option to my password if selected by the user, using our getRandom function to determine length and to generate a random #
 if (useUppercase) {
   password2 += getRandom(uppercase)
 }
 if (useNumeric) {
   password2 += getRandom(numeric)
 }
 if (useSpecial) {
   password2 += getRandom(special)
 }
}
  // `return` that password
 return password2.substr(0,length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);