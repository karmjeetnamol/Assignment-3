// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!","#","@","$","%","^","&","*","(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];


var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function generatePassword() {
 
var generatedPassword = "";
var charsToChooseFrom = [];
var passwordLength = parseInt (window.prompt("How  long do you like your password to be?, Enter  a number between 8 and 128."));



 while (isNaN(passwordLength) || passwordLength < 8 || (passwordLength > 128))  {
  var passwordLength = parseInt (window.prompt("Not a valid entry , Enter a number between 8 and 128."));
 }

 while (charsToChooseFrom.length === 0) {

    if (window.confirm("Do you want your password include lowercase letters"))  {
       charsToChooseFrom = charsToChooseFrom.concat(lowercase);
    }

    if (window.confirm("Do you want your password include uppercase letters"))  {
       charsToChooseFrom = charsToChooseFrom.concat(uppercase);
    }
    
    if (window.confirm("Do you want your password include symbols letters"))  {
       charsToChooseFrom = charsToChooseFrom.concat(symbols);
    }
      
    if (window.confirm("Do you want your password include numbers letters"))  {
        charsToChooseFrom = charsToChooseFrom.concat(numbers);

    }
    
   if (charsToChooseFrom.length === 0) {
       window.alert("Not able to give you a password if we aren't allowed to use anycharacters! Try again.");
    } 

  }

 for (var i = 0; i < passwordLength; i++) {
        generatedPassword +- charsToChooseFrom[Math.floor(Math.random() * charsToChooseFrom.length)];
} 

} 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 passwordText.value = password;

}

generateBtn.addEventListener ("click", writePassword);


console.log(password);
