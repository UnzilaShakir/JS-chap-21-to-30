// Chap 21 to 25
// Qno 1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");

// Qno 2
var favoritePhone = prompt("Enter your favorite mobile phone model:");

var inputLength = favoritePhone.length;

document.write("Your favorite mobile phone model is: " + favoritePhone + "<br>");
document.write("Length of String " + inputLength);

// Qno 3
var country = "Pakistani";
var index = country.indexOf("n");

document.write("String" + " "  + country + "<br>");
document.write("Index of n is " + index + "<br>" + "<br>");

// Qno 4
var msg = "Hello world";
var index = msg.lastIndexOf("l")

document.write("String" + " "  + msg + "<br>");
document.write("Index of n is " + index + "<br>" + "<br>");

// Qno 5
var country = "Pakistani";
var index = country.indexOf("i");

document.write("String" + " "  + country + "<br>");
document.write("Index of i is " + index + "<br>" + "<br>");


// Qno 6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ",lastName);

alert("Hello, " + fullName + "! Welcome!");

// Qno 7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write(city+ "<br>");
document.write(newCity + "<br>" + "<br>");

// Qno 8
var message = "“Ali and Sami are best friends. They play cricket and football together.”";
var newmsg = message.replaceAll('and',"&");
document.write(newmsg + "<br>" + "<br>");

// Qno 9
var str = "472";

var num = Number(str);

document.write("Value as string: " + str + "<br>" + " (Type: " + typeof str + "<br>");
document.write("Value as number: " + num + "<br>" + " (Type: " + typeof num + "<br>" + "<br>");

// Qno 10
var userinp = prompt("Enter any word");
var res = userinp.toUpperCase();

document.write( userinp + "<br>");
document.write( res + "<br>" + "<br>");

// Qno 11
var userInput = prompt("Enter a sentence or word:");
var titleCaseInput = toTitleCase(userInput);

document.write( userInput + "<br>");
document.write( titleCaseInput + "<br>" + "<br>");

// Qno 12
var num = 35.36;
var numString = num.toString();
var result = numString.replace(".", "");
document.write( num + "<br>");
document.write("The number without the dot is: " + result + "<br>" + "<br>");

// Qno 13
var username = prompt("Enter your username:");
var invalidChars = ['@', '.', ',', '!'];
var isValid = true;

for (let i = 0; i < invalidChars.length; i++) {
    if (username.includes(invalidChars[i])) {
        isValid = false;
        break; 
    }
}

if (!isValid) {
    alert("Invalid username! Please do not use special characters like @, ., ,, or !.");
} else {
    alert("Your username is valid: " + username);
}

// Qno 14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput1 = prompt("Enter the item you are looking for:");
userInput1 = userInput1.toLowerCase();
let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput1) {
        found = true;
        break; 
    }
}

if (found) {
    alert(userInput1 + " is available in the list.");
} else {
    alert(userInput1 + " is not available in the list.");
}

// Qno 15
var password = prompt("Enter your password");
var hasLetter = false;
var hasNumber = false;
var isValidStart = true;

if (!isNaN(password.charAt(0))) {
    isValidStart = false;
}

for (let i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    
    if (char.match(/[a-zA-Z]/)) {
        hasLetter = true;
    }

    if (!isNaN(char)) {
        hasNumber = true;
    }
}

if (password.length === 6 && hasLetter && hasNumber && isValidStart) {
   alert("Password is valid.");
} else {
    alert("Invalid password! The password must:\n1. Contain alphabets and numbers.\n2. Not start with a number.\n3. Be at least 6 characters long.");
}

// Qno 16
var university = "University of Karachi";

for (var i = 0; i < university.length; i++) {
    console.log(university[i]);
}

// Qno 17
var userInput = prompt("Enter a word or sentence:");

var lastChar = userInput.charAt(userInput.length - 1);

document.write("The last character of your input is: " + lastChar);

// Qno 18
var sentence = "The quick brown fox jumps over the lazy dog";
var lowerCaseSentence = sentence.toLowerCase();

var wordsArray = lowerCaseSentence.split(" ");

var count = 0;
for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === "the") {
        count++;
    }
}
document.write("The word 'the' occurs " + count + " times in the sentence.");

// Chap 26 to 30
// Qno 1
var userNumber = +(prompt("Enter a positive number:"));

document.write("Number: " + userNumber + "<br>");

document.write("Round off value: " + Math.round(userNumber) + "<br>");

document.write("Floor value: " + Math.floor(userNumber) + "<br>");

document.write("Ceil value: " + Math.ceil(userNumber) + "<br>");

// Qno 2
var userNumber = +(prompt("Enter a negative number:"));

document.write("Number: " + userNumber + "<br>");

document.write("Round off value: " + Math.round(userNumber) + "<br>");

document.write("Floor value: " + Math.floor(userNumber) + "<br>");

document.write("Ceil value: " + Math.ceil(userNumber) + "<br>");


// Qno 3
let userNumber1 = +(prompt("Enter a number (positive or negative):"));
let absoluteValue = Math.abs(userNumber1);
document.write("The absolute value of " + userNumber + " is " + absoluteValue);

// Qno 4
var dicevalue = Math.floor(Math.random() * 6)+1;
console.log(dicevalue);

// Qno 5
var head = 0;
var tail = 1;

if(Math.random() > 0.5){
    head++;
    console.log(head + " "+ "wins");
}
else{
    tail++;
    console.log(tail + " "+ "wins")
}

// Qno 6
var randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random number between 1 and 100: " + randomNumber);

// Qno 7
var userinp = prompt("Please enter your weight");
var weight = "";

for (var i = 0; i < userinp.length; i++) {
    var char = userinp[i];

    if (char >= '0' && char <= '9' || char === '.') {
        weight += char;
    }
}

if (weight.length > 0) {
    console.log("Your weight is: " + weight + " kg");
} else {
    console.log("Invalid weight input. Please enter a valid weight.");
}

// Qno 8
var secnum = Math.floor(Math.random()* 10)+ 1;
var usernum = +prompt("Enter a number between 1 to 10");

if(secnum === usernum){
    alert("Congragulations");
}
else{
    alert("Sorry, the secret number was: " + secnum + ". Try again next time!");

}




























