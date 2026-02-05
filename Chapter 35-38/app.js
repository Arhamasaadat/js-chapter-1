//Question no 1
function date(){
    var newDate =new Date()
    console.log(newDate)
}
date()

//Question no 2
 var userName =prompt("Enter your name here") || "user";
 var lName = prompt("Enter your last name")
 var fullName=userName+lName
 function greet(fullName){
    
console.log("Welcome " +fullName) ;

 }
 greet(userName,lName)

//Question no 3
function sum(a,b){
console.log(a+b)
}
sum(15,10)
// Question no 4
function calculator(num1, num2, operator) {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
}

alert(calculator(10, 5, "/"));

//Question no 5
function squares(num){
    console.log(num*num);
    
}
squares(9);

// Question no 6
function factorial(n){
    result = 1
    for(var i =1;i<=n;i++){
result=result*i
    }
    return result;
}
console.log(factorial(7));

// Question no 7
function counting(start,end){
    var showcount=""
    for(var i =start;i<=end;i++){
showcount+=i+"";
    }
    return showcount;
}
document.write(counting(1,25))

// Question no 8

function calculateHyp(base, perp) {
  function calculateSquare(x) {
    return x ** 2;
  }
  var hypSquare = calculateSquare(base) + calculateSquare(perp)
  return hypSquare
}
console.log(calculateHyp(2,3));

//Question no 9
function rectangleArea(height,weight){
    return height*weight;
}
console.log(rectangleArea(5,10))

// Question no 10
 function palindrome(word) {
   var myWord = "";
   for (var i = word.length - 1; i >= 0; i--) {
     myWord += word[i];
   }
   if (myWord === word) {
     console.log("its plaindrome");
   } else {
     console.log("Not Plaindrome");
   }
 }
 palindrome("level");

//  Question no 11
 function capital(str) {
  var mystr = str.split(" ");
  console.log(mystr);
       var word = "";
       for(var i = 0 ; i < mystr.length; i++){
            word += ` ${mystr[i][0].toUpperCase()}${mystr[i].slice(1)}`;

       }
   return word;
       console.log(word);

  var cap = mystr[0][0].toUpperCase();
  var cap2 = mystr[1][0].toUpperCase();
  var cap3 = mystr[2][0].toUpperCase();
  var cap4 = mystr[3][0].toUpperCase();
  console.log(cap, cap2, cap3, cap4);
  var word1 = cap + mystr[0].slice(1);
  var word2 = cap2 + mystr[1].slice(1);
  var word3 = cap3 + mystr[2].slice(1);
  var word4 = cap4 + mystr[3].slice(1);
  var sentence = word1 + " " + word2 + " " + word3 + " " + word4;
  console.log(sentence);
}
// console.log(capital("my name is arhama  and i am a student of smit "));

capital("the quick brown fox");

// Question no 12
function longestWord(mystr) {
   var mystr1 = mystr.split(" ");
   console.log(mystr1);

   var logW = "";
   for (var i = 0; i < mystr1.length; i++) {
     console.log(mystr1[i]);

     if (mystr1[i].length > logW.length) {
       logW = mystr1[i];
     }
   }
   console.log(logW);
 }
 longestWord("Web Development Tutorial");

//  Question no 13
function occurrences(str,letter){
    var occur = str.indexOf(letter)
    console.log(occur);
    
}
occurrences("JSResourceS.com","o")

//  Question no 14
function calcCircumference(r){
var circum = 2*(3.15)* r
return circum

}
console.log(calcCircumference(5));


function calcArea(rad){
    var circle = (3.15)* (rad**2) ;
    return circle;
}
console.log(calcArea(12));