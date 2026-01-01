var ch = prompt("Enter a Character:")
var code = ch.charCodeAt(0)

if(code >= 48 && code <= 57){
    console.log("it is a numbers")
    document.write("It is a number<br><br>");
}
else if(code >= 65 && code <= 90){
    console.log("it is an uppercase letters")
    document.write("It is an uppercase letter<br><br>");
}
else if(code >= 97 && code <= 122){
    console.log("it is an lowercase letters")
    document.write("It is a lowercase letter<br><br>");
 
}
else {
    console.log("Invalid input")
    document.write("Invalid input<br><br>");
}



var num1 = +prompt("Enter first number:")
var num2 = +prompt("Enter second number:")

if(num1 > num2){
    console.log(num1 + " is larger " )
    document.write("this num is large <br><br>")
}

else if(num2 > num1){
    console.log(num2 + " is larger ")
    document.write("this num is large<br><br>")
}
else{
    console.log("Both num are equals")
    document.write("both num are equals<br><br>")
}


var num = +prompt("Enter a num")

if(num > 0){
    console.log("this num is positive")
    document.write("this num is positive<br><br>")
}
else if(num < 0){
    console.log("this num is negative")
    document.write("this num is negative<br><br>")
}
else{
    console.log("num is zero")
    document.write("num is zero<br><br>")
}


var ch = prompt("Enter a character")

if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U" ){
    console.log("True")
    document.write("True<br><br>")
}
else{
    console.log("False")
    document.write("False<br><br>")
}


var password = "batoolMazhar6"
var userPassword = prompt("Enter your password")

if(userPassword == ""){
    console.log("Please enter your password")
    document.write("Please enter your password<br><br>")
}
else if(userPassword == password){
    console.log("Correct! The password you entered matches the original password")
    document.write("Correct! The password you entered matches the original password<br><br>")
}
else{
    console.log("Incorrect password")
    document.write("Incorrect password<br><br>")
}


var greeting;
var hour = 13;

if(hour < 18){
    greeting = "Good Day";
}
else{
    greeting = "Good Evening";
}
document.write(greeting + "<br><br>");




var time = +prompt("Enter time in 24-hour format (e.g. 1900):")

if (time >= 0 && time < 1200) {
    console.log("Good morning")
    document.write("Good morning<br><br");
}
else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon")
    document.write("Good afternoon<br><br");
}
else if (time >= 1700 && time < 2100) {
    console.log("Good evening")
    document.write("Good evening<br><br");
}
else if (time >= 2100 && time <= 2359) {
    console.log("Good night")
    document.write("Good night<br><br");
}
else {
    console.log("Invalid time")
    document.write("Invalid time<br><br");
}