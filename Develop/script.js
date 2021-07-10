// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adding the array for the password criteria
// number charaters for the password 
const numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// lowecase charaters
const lowerCasedChar = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// uppercase charaters
const upperCasedChar = [
  'A', 'B', 'C', 'D', 'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',
  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z'
];

// special characters
const specialChar= [
  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',
  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'
];

// adding function code
function generatePassword () {

  let randomArray = [];
  let password = '';
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
