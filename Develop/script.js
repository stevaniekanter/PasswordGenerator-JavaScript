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

// prompt for lenght of password desire 
let passLength = parseInt(prompt('Enter the length of the password desired (Min: 8 and Max: 128)'));
// alert that tells warns user to try again if it's less than 8 and greater than 128 characters 
  if (passLength < 8 || passLength > 128 || isNaN(+passLength))
    {
    alert('Please try again! Password length does not meet the minimum of 8 and maximum of 128 characters');

    return 'Please try again!';

    }

// prompt box for password criteria
    let confirmSpecialChar = confirm("Do you want special characters? Click 'OK' for Yes or 'Cancel' for No");
    let confirmLowerCase = confirm("Do you want lower case characters? Click 'OK' for Yes or 'Cancel' for No");
    let confirmUpperCase = confirm("Do you want upper case characters? Click 'OK' for Yes or 'Cancel' for No");
    let confirmNumChar = confirm("Do you want numeric characters? Click 'OK' for Yes or 'Cancel' for No");
// alert is generated to try again if they don't select at least one option 
  if ( !confirmSpecialChar && !confirmLowerCase && !confirmUpperCase && !confirmNumChar)
  {

    alert("Please try again. You must select at least one password criteria");

    return 'Please try again';
  }
// true or false respons to the prompts then code will read from which random arrays to choose from or not choose from
  if (confirmSpecialChar)
  { randomArray = randomArray.concat(specialChar)
  }

  if (confirmLowerCase) 
  {randomArray = randomArray.concat(lowerCasedChar)
  }

  if (confirmUpperCase)
  { randomArray = randomArray.concat(upperCasedChar)
  }

  if (confirmNumChar)
  { randomArray = randomArray.concat(numericChar)
  }

// Generates code based on the length of desired password from the first prompt 
  for (var i = 0; i < passLength; i++) {
    var numero = Math.floor(Math.random() * randomArray.length);
    password += randomArray[numero]
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
